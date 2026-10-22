import React from 'react';
import { SpecialReportTopic } from './SpecialReportDetailPage';

interface SpecialReportMediaPreparationViewProps {
  topic: SpecialReportTopic;
  mediaType: 'comic' | 'video' | 'podcast';
}

export const SpecialReportMediaPreparationView: React.FC<SpecialReportMediaPreparationViewProps> = ({
  topic,
  mediaType
}) => {
  // 窯業用地之漫畫懶人包（A-1, B-1, C-1 共 3 張圖）
  if (topic.id === 'ceramic-land' && mediaType === 'comic') {
    const comicImages = [
      { src: '/assets/aistudio/A-1_2f6b7aec.png', alt: '窯業用地漫畫懶人包 A-1' },
      { src: '/assets/aistudio/B-1_a0ccaca6.png', alt: '窯業用地漫畫懶人包 B-1' },
      { src: '/assets/aistudio/C-1_69ad3aca.png', alt: '窯業用地漫畫懶人包 C-1' }
    ];

    return (
      <div className="space-y-4 max-w-3xl mx-auto animate-fade-in">
        <div className="bg-white border-2 border-[#DDD5C7] rounded-2xl p-4 sm:p-6 shadow-xs space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-[#ECE6DB]">
            <div className="flex items-center gap-2">
              <span className="text-xl">🎨</span>
              <h3 className="font-bold text-base sm:text-lg text-[#1F3864]">
                窯業用地・漫畫懶人包
              </h3>
            </div>
            <span className="text-xs font-semibold text-[#7D7065] bg-[#FAF7F2] px-2.5 py-1 rounded-md border border-[#DDD5C7]">
              共 3 張圖
            </span>
          </div>

          <div className="space-y-4">
            {comicImages.map((img, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden border-2 border-[#DDD5C7] shadow-xs bg-[#FAF7F2]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto block"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
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
