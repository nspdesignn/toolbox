import React, { useState } from 'react';
import { HomePage } from './components/HomePage';
import { ModuleDetailPage } from './components/ModuleDetailPage';
import { SmartAssistantModal } from './components/SmartAssistantModal';
import { ModuleId } from './types';

export default function App() {
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);

  const handleSelectModule = (id: string) => {
    setSelectedModuleId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setSelectedModuleId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D2623] font-sans selection:bg-[#8C5A4B] selection:text-white flex flex-col">
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-7">
        {!selectedModuleId ? (
          <HomePage onSelectModule={handleSelectModule} />
        ) : (
          <ModuleDetailPage moduleId={selectedModuleId} onBack={handleBackToHome} />
        )}
      </main>

      {/* 常駐智能小幫手：直接連至 NotebookLM 專題題庫進行問答 */}
      <SmartAssistantModal
        onNavigateModule={(moduleId: ModuleId) => handleSelectModule(moduleId)}
      />
    </div>
  );
}
