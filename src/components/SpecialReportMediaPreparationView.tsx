import React, { useState } from 'react';
import { ExternalLink, ZoomIn, Play } from 'lucide-react';
import { SpecialReportTopic } from './SpecialReportDetailPage';

interface SpecialReportMediaPreparationViewProps {
  topic: SpecialReportTopic;
  mediaType: 'comic' | 'video' | 'podcast';
}

interface VideoConfig {
  title: string;
  youtubeId: string;
  youtubeUrl: string;
  description: string;
}

interface ComicImage {
  webp: string;
  png: string;
  title: string;
  alt: string;
}

interface ComicConfig {
  title: string;
  images: ComicImage[];
}

const TOPIC_VIDEOS: Record<string, VideoConfig> = {
  'ceramic-land': {
    title: '窯業用地・解說影片',
    youtubeId: '1bVJpPV7kRo',
    youtubeUrl: 'https://youtu.be/1bVJpPV7kRo',
    description:
      '本解說影片重點解析非都市土地「窯業用地」業務實務，包括：新北市窯業用地現況分布、免申請容許使用之陶製品製造與綠能許可、丁種建築用地夾雜包圍與毗鄰擴展處理原則、70 年 2 月 15 日前之更正編定與變更編定審查要件，以及國土計畫法上路後的管制接軌。建議配合【📄報告全文】與【🎨漫畫懶人包】深入了解完整法規脈絡。'
  },
  'funeral-facilities': {
    title: '殯葬設施・解說影片',
    youtubeId: 'ZlbN8honf6U',
    youtubeUrl: 'https://youtu.be/ZlbN8honf6U',
    description:
      '本解說影片深入剖析「殯葬設施涉非都市土地容許使用、變更及更正編定」實務機制，包括：人類五大殯葬設施（公墓、殯儀館、火化場、骨灰存放、禮廳靈堂）與寵物生命紀念園區（處理設施、紀念碑、樹葬、灑葬）法規管制、與學校醫院/易燃場所/飲用水之法定距離限制（300/500/1000公尺）、農地變更特定目的事業用地之興辦事業計畫核准要件，以及國土計畫法分區管制接軌重點。建議配合【📄報告全文】與【🎨漫畫懶人包】深入了解完整法規脈絡。'
  }
};

const TOPIC_COMICS: Record<string, ComicConfig> = {
  'ceramic-land': {
    title: '窯業用地・漫畫懶人包',
    images: [
      {
        webp: '/assets/aistudio/A-1_opt.webp',
        png: '/assets/aistudio/A-1_2f6b7aec.png',
        title: 'A-1（第 1～4 格）',
        alt: '窯業用地漫畫懶人包 A-1（第 1～4 格：新北現況、免申請使用、綠能許可、丁種路）'
      },
      {
        webp: '/assets/aistudio/B-1_opt.webp',
        png: '/assets/aistudio/B-1_a0ccaca6.png',
        title: 'B-1（第 5～8 格）',
        alt: '窯業用地漫畫懶人包 B-1（第 5～8 格：工廠登記、包圍夾雜、備齊資料、審議小組）'
      },
      {
        webp: '/assets/aistudio/C-1_opt.webp',
        png: '/assets/aistudio/C-1_69ad3aca.png',
        title: 'C-1（第 9～12 格）',
        alt: '窯業用地漫畫懶人包 C-1（第 9～12 格：70.2.15更正與變更、主輔文件、不得更正、國土計畫）'
      }
    ]
  },
  'funeral-facilities': {
    title: '殯葬設施・漫畫懶人包',
    images: [
      {
        webp: '/assets/aistudio/A_opt.webp',
        png: '/assets/aistudio/A_27776d7a.png',
        title: 'A（第 1～4 格）',
        alt: '殯葬設施漫畫懶人包 A（第 1～4 格：人口老化與殯葬需求飆升、毛孩寵物殯葬尊嚴、人類五種殯葬設施、寵物紀念園區規定）'
      },
      {
        webp: '/assets/aistudio/B_opt.webp',
        png: '/assets/aistudio/B_4e6df63a.png',
        title: 'B（第 5～8 格）',
        alt: '殯葬設施漫畫懶人包 B（第 5～8 格：法定距離限制、禁止設置分區特農/森林/鄉村、興辦事業計畫核准再變更、國土計畫分區確認）'
      },
      {
        webp: '/assets/aistudio/C_opt.webp',
        png: '/assets/aistudio/C_cb81e1e8.png',
        title: 'C（第 9～12 格）',
        alt: '殯葬設施漫畫懶人包 C（第 9～12 格：偷蓋查處檢舉、鄰避設施抗議、溝通協調與補償方案、天然樹林屏障守法長久）'
      }
    ]
  }
};

export const SpecialReportMediaPreparationView: React.FC<SpecialReportMediaPreparationViewProps> = ({
  topic,
  mediaType
}) => {
  // 記錄各圖片載入狀態
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  // 1. 解說影片
  if (mediaType === 'video' && TOPIC_VIDEOS[topic.id]) {
    const video = TOPIC_VIDEOS[topic.id];
    return (
      <div className="space-y-4 max-w-4xl mx-auto animate-fade-in">
        <div className="bg-white border-2 border-[#DDD5C7] rounded-2xl p-4 sm:p-6 shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#ECE6DB] gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">🎬</span>
              <h3 className="font-bold text-base sm:text-lg text-[#1F3864]">
                {video.title}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold text-rose-800 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200 flex items-center gap-1.5">
                <Play className="w-3 h-3 fill-rose-600 text-rose-600" />
                <span>YouTube 影音解說</span>
              </span>
              <a
                href={video.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#8C5A4B] hover:text-[#1F3864] bg-[#FAF7F2] hover:bg-[#EAE2D7] px-2.5 py-1 rounded-md border border-[#DDD5C7] transition-colors"
                title="於新視窗開啟 YouTube 觀看"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>在 YouTube 開啟</span>
              </a>
            </div>
          </div>

          {/* 16:9 響應式嵌入播放器 */}
          <div className="relative w-full rounded-xl overflow-hidden border-2 border-[#DDD5C7] shadow-sm bg-black aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0`}
              title={`${video.title} 解說影片`}
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* 影片重點提示與說明 */}
          <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DDD5C7] text-xs sm:text-sm text-[#5A4B43] space-y-2">
            <div className="font-bold text-[#1F3864] flex items-center gap-1.5 text-sm">
              <span>📌</span>
              <span>影片簡介與導讀重點</span>
            </div>
            <p className="leading-relaxed text-[#4A3E39]">
              {video.description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // 2. 漫畫懶人包
  if (mediaType === 'comic' && TOPIC_COMICS[topic.id]) {
    const comic = TOPIC_COMICS[topic.id];
    return (
      <div className="space-y-4 max-w-3xl mx-auto animate-fade-in">
        <div className="bg-white border-2 border-[#DDD5C7] rounded-2xl p-4 sm:p-6 shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#ECE6DB] gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">🎨</span>
              <h3 className="font-bold text-base sm:text-lg text-[#1F3864]">
                {comic.title}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                ⚡ 已啟用 WebP 極速載入
              </span>
              <span className="text-xs font-semibold text-[#7D7065] bg-[#FAF7F2] px-2 py-0.5 rounded-md border border-[#DDD5C7]">
                共 {comic.images.length} 張圖
              </span>
            </div>
          </div>

          <div className="space-y-5">
            {comic.images.map((img, idx) => {
              const isLoaded = loadedImages[idx];
              return (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-[#7D7065] px-1 font-medium">
                    <span>{img.title}</span>
                    <a
                      href={img.png}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#8C5A4B] hover:text-[#1F3864] hover:underline transition-colors"
                      title="於新視窗開啟原圖"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>查看原圖</span>
                    </a>
                  </div>

                  <div className="relative rounded-xl overflow-hidden border-2 border-[#DDD5C7] shadow-xs bg-[#FAF7F2] aspect-square">
                    {/* 載入中骨架屏 */}
                    {!isLoaded && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-100 text-stone-400 animate-pulse">
                        <span className="text-2xl mb-1">🖼️</span>
                        <span className="text-xs font-medium">圖片載入中...</span>
                      </div>
                    )}

                    <picture>
                      <source srcSet={img.webp} type="image/webp" />
                      <img
                        src={img.png}
                        alt={img.alt}
                        className={`w-full h-auto block transition-opacity duration-300 ${
                          isLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                        loading={idx === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                        onLoad={() =>
                          setLoadedImages((prev) => ({ ...prev, [idx]: true }))
                        }
                      />
                    </picture>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // 3. 尚未製作內容的其他主題或媒體類型：僅純粹標示籌備中，不放其他內容與按鈕
  const mediaLabel =
    mediaType === 'comic' ? '漫畫懶人包' : mediaType === 'video' ? '解說影片' : 'Podcast';
  const mediaEmoji =
    mediaType === 'comic' ? '🎨' : mediaType === 'video' ? '🎬' : '🎙️';

  return (
    <div className="p-12 sm:p-16 text-center space-y-2 bg-[#FAF7F2] rounded-2xl border-2 border-dashed border-[#DDD5C7] animate-fade-in">
      <div className="text-3xl sm:text-4xl">{mediaEmoji}</div>
      <h3 className="text-base sm:text-lg font-bold text-[#1F3864]">
        【{topic.title}】{mediaLabel} 籌備中
      </h3>
      <p className="text-xs sm:text-sm text-[#7D7065]">
        相關內容規劃製作中，敬請期待
      </p>
    </div>
  );
};
