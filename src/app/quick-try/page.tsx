import QuickTry from '@/components/quick-try/QuickTry';
import React from 'react';
import { SendPromptProvider } from '@/context/SendPromptContext';
import ResultScreen from '@/components/quick-try/ResultScreen';

const page = () => {
  return (
    <SendPromptProvider>
      <div className="flex gradientBg2 text-white flex-center relative">
        <div className="default-margin w-full h-screen col-start relative overflow-auto overflow-x-hidden pb-100 md:pb-100 no-scrollbar">
          <ResultScreen />
          <QuickTry />
        </div>
      </div>
    </SendPromptProvider>
  );
};

export default page;
