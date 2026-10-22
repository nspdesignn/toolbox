import React, { useState } from 'react';
import { ExternalLink, ZoomIn } from 'lucide-react';
import { SpecialReportTopic } from './SpecialReportDetailPage';

interface SpecialReportMediaPreparationViewProps {
  topic: SpecialReportTopic;
  mediaType: 'comic' | 'video' | 'podcast';
}

export const SpecialReportMediaPreparationView: React.FC<SpecialReportMediaPreparationViewProps> = ({
  topic,
  mediaType
}) => {
  // 記錄各圖片載入狀態
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  // 窯業用地之漫畫懶人包（A-1, B-1, C-1 共 3 張圖，已提供高畫質 WebP 極速輕量化格式）
  if (topic.id === 'ceramic-land' && mediaType === 'comic') {
    const comicImages = [
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
    ];

    return (
      <div className="space-y-4 max-w-3xl mx-auto animate-fade-in">
        <div className="bg-white border-2 border-[#DDD5C7] rounded-2xl p-4 sm:p-6 shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#ECE6DB] gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">🎨</span>
              <h3 className="font-bold text-base sm:text-lg text-[#1F3864]">
                窯業用地・漫畫懶人包
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                ⚡ 已啟用 WebP 極速載入（體積縮減 95%）
              </span>
              <span className="text-xs font-semibold text-[#7D7065] bg-[#FAF7F2] px-2 py-0.5 rounded-md border border-[#DDD5C7]">
                共 3 張圖
              </span>
            </div>
          </div>

          <div className="space-y-5">
            {comicImages.map((img, idx) => {
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

  // 尚未製作內容的其他主題或媒體類型：僅純粹標示籌備中，不放其他內容與按鈕
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
