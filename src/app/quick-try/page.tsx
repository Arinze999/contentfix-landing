import QuickTry from '@/components/quick-try/QuickTry';
import React from 'react';
import { SendPromptProvider } from '@/context/SendPromptContext';
import ResultScreen from '@/components/quick-try/ResultScreen';

const page = () => {
  return (
    <SendPromptProvider>
      <div className="flex gradientBg2 text-white flex-center relative">
        <div className="default-margin w-full min-h-screen col-start relative overflow-auto overflow-x-hidden mb-100 md:mb-100 no-scrollbar">
          <ResultScreen />
        </div>
        <div>
          <QuickTry />
        </div>
      </div>
    </SendPromptProvider>
  );
};

export default page;
