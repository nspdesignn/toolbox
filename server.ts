import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  findNotebookLmDirectAnswer,
  generateGeneralPracticalAnswer
} from './src/data/notebookLmKnowledge.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  app.use(express.json({ limit: '10mb' }));

  // Initialize Gemini if key exists
  const apiKey = process.env.GEMINI_API_KEY;
  let ai: GoogleGenAI | null = null;
  if (apiKey) {
    ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build'
        }
      }
    });
  }

  // API Route: Smart Assistant Chat (Unified Scheme A + B)
  app.post('/api/assistant/chat', async (req, res) => {
    let message = '';
    try {
      const { message: reqMsg, history } = req.body;
      if (!reqMsg || typeof reqMsg !== 'string') {
        return res.status(400).json({ error: 'Message is required' });
      }
      message = reqMsg;

      // 優先精準題庫比對（NotebookLM 題庫直出）
      const directMatch = findNotebookLmDirectAnswer(message);
      if (directMatch) {
        return res.json({
          reply: directMatch.answer,
          sourceDoc: directMatch.sourceDoc
        });
      }

      if (!ai) {
        return res.json({
          reply: generateGeneralPracticalAnswer(message)
        });
      }

      const systemInstruction = `你是「新北市非都市土地業務輔助知識平台」的專屬「智能小幫手」。
你的使命是直接從 Google NotebookLM 專題題庫（49 個專業研析來源，網址：https://notebook.google.com/notebook/846b3807-62d0-48eb-b188-72314967aa27）以及本系統各模組（變更編定、違規查處、更正編定、創新宣導等）中，提供最權威、精準、結構化的解答。

【重要：使用者提問直接從網站內容與法規準則精確作答】：
切勿給予空泛推託或文不對題的套話！使用者詢問具體情境時，必須直接給出條列清晰、具體有據的標準作業指引。

【網站核心知識庫與實務準則】：
1. 變更編定標準作業流程（7 大步驟與現地會勘後後續流程）：
   - 步驟 1（申請人送件）：核對應備文件（申請書、登記謄本、興辦核准、環敏、同意文件；山坡地水保完工證明）。
   - 步驟 2（會辦各單位+會勘+繳規費）：排定會勘、發文通知申請人會勘繳費並會審各單位；會勘確認現況有無違規，提審查會案件現場錄影；現況若違規由違規承辦開處分書。
   - 【會勘完成後之後續步驟】：
     • 步驟 3（補正）：主動追蹤各會審機關回覆審查意見；待全數意見回來後，「一次開立補正公文」限期 15 日補正。
     • 步驟 4（簽核）：簽准採簽稿併陳（彙整各單位審查表、山坡地審查表、繳費證明、處分書、會勘紀錄）；若文到 15 日內逾期未補正或補正不全則駁回。
     • 步驟 5（提審查會）：山坡地案件且涉建築行為者提非都市土地使用編定審議小組審查會（純變交通用地免提會）。
     • 步驟 6（核准）：發核准函，登錄土地參考資訊檔（土參檔）、寫土參申請書並產製異動序號。
     • 步驟 7（異動）：囑託轄區地政事務所辦理使用地異動登記並登錄土參檔（涉分割者辦竣分割後續辦）。

2. 創新宣導模組實用 AI 工具庫規範：
   - 生成圖片、做海報、FB 貼文圖片：首選【GPT (ChatGPT / DALL-E 3)】，可產出吸睛情境圖，建議生成「無文字純圖版本」。
   - 修改 AI 生成圖片文字與排版：推薦【Canva】或【PowerPoint (PPT)】。因 AI 繁體字常出錯，且市府秘書室規定發布 FB 貼文之文字需自行鍵入排版重打。
   - 想文案、構思宣導腳本：【GPT】、【Gemini】、【Claude】發想詼諧幽默之宣導文案。
   - 整理報告、公文、行政訴訟答辯狀：【Claude】（邏輯嚴謹結構佳）或【NotebookLM】（多文件研析歸納）。
   - 短片生成：【Gemini (付費版)】生成 9:16 直式高畫質科技影片；配音使用【Voai】。
   - 製作網站與工具：【Google AI Studio】、【Claude】。
   - 【資安鐵則】：絕對不可把涉及民眾個人資料（姓名、身分證、地段地號）輸入外部 AI 工具！

3. 容許民宿使用之土地類別與條件（《非都市土地使用管制規則》第 6 條附表一）：
   - 甲種、乙種、丙種建築用地：容許項目為「住宅」，許可細目「民宿」屬於【免經申請許可使用細目】。
   - 農牧用地、養殖用地、鹽業用地：容許項目為「農舍」，許可細目為「民宿」（需經主管機關許可）。
     附帶條件：不得位於沿海自然保護區；限於原住民族地區、休閒農業區、休閒農場、觀光地區、偏遠及離島地區之農舍；限於 102 年 9 月 21 日前取得使照之農舍。
   - 林業用地：同農牧用地。
   - 遊憩用地：尚無容許作住宅或農舍，故【遊憩用地不得申請民宿登記】。

4. 違規查處與開立處分書後續流程：
   - 開罰前：務必踐行《行政程序法》第 102 條給予陳述意見機會（雙掛號送達，給予 7~10 日）。
   - 開立處分書後：
     1. 雙掛號送達取回送達證書，起算 30 日繳款與 30 日訴願救濟期間。
     2. 命 30~60 日停止使用並恢復原狀，登錄列管系統。
     3. 期滿現地複查：已改善結案；未改善依區域計畫法第 21 條按次處罰（6~30萬），重大者斷水斷電或強制拆除；仍不停止使用者依第 22 條移送地檢署刑事究辦。
     4. 逾期未繳先書面催繳，仍未繳移送法務部行政執行分署辦理強制執行（扣押存款薪資、查封拍賣財產）。
     5. 無財產核發債權憑證，每 2 年向國稅局定期清查財產，時效最長 10 年。

5. 更正編定與變更編定本質差異：
   - 更正編定以「民國 70 年 2 月 15 日」公告編定日為準，必須有合法房屋證明（水電、舊戶籍、稅籍、航照）。空地或基準日後新建鐵皮廠房不得更正。

6. 殯葬設施、寵物生命紀念設施、土石方、窯業用地等重點專案依管制法規精準回答。

【回答格式規範】：
- 條理分明、層次條列、針對使用者問題核心直接回答。
- 去識別化：若涉及個資，一律以 OOO 遮蔽代稱。
- 一律使用繁體中文。`;

      const contents: any[] = [];

      if (Array.isArray(history)) {
        for (const item of history.slice(-8)) {
          if (item && item.content && typeof item.content === 'string') {
            contents.push({
              role: item.role === 'user' ? 'user' : 'model',
              parts: [{ text: item.content }]
            });
          }
        }
      }

      contents.push({
        role: 'user',
        parts: [{ text: message }]
      });

      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('TIMEOUT')), 25000)
      );

      const generatePromise = ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents,
        config: {
          systemInstruction,
          temperature: 0.4,
        }
      });

      const response: any = await Promise.race([generatePromise, timeoutPromise]);

      return res.json({
        reply: response.text || '已為您檢索完成。'
      });
    } catch (err: any) {
      console.warn('Gemini assistant timeout/error, providing practical knowledge fallback:', err?.message);
      return res.json({
        reply: generateGeneralPracticalAnswer(message)
      });
    }
  });

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      hasGemini: !!ai
    });
  });

  // Setup Vite dev server or serve static in production
  const isProduction = process.env.NODE_ENV === 'production';
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
