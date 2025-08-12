'use client';

import React from 'react';
import { useSendPromptContext } from '@/context/SendPromptContext';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const ResultScreen = () => {
  const { loading, result } = useSendPromptContext();

  return (
    <div className="min-h-[10rem] border-2 border-white/10 bg-white/5 text-sm p-3 rounded-lg md:mt-[7rem] mt-[5rem]">
      {/* enhanced text will be displayed here; this area now scrolls */}
      {loading ? (
        '...'
      ) : (
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            // collapse the default <p> margin
            p: ({ ...props }) => <p className="m-0" {...props} />,
          }}
        >
          {result?.content}
        </ReactMarkdown>
      )}
    </div>
  );
};

export default ResultScreen;
