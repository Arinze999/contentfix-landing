'use client';

import React, { useState } from 'react';
import Question from './Question';
import Button from '@/components/buttons/Button';
import { useRouter } from 'next/navigation';
import { QUICK_TRY } from '@/routes/routes';

// For use with <FAQ items={questions} />
export const questions = [
  {
    id: 1,
    question: 'How does ContentFix work?',
    answer:
      'Paste your idea, pick a platform and tone, then hit “Polish.” We rewrite, clean grammar, and format it for instant posting.',
  },
  {
    id: 2,
    question: 'Which platforms are supported?',
    answer:
      'LinkedIn, Twitter (X), Instagram, Threads, and “official use” formats like emails or memos.',
  },
  {
    id: 3,
    question: 'Can it match my brand voice?',
    answer:
      'Yes. Save brand-voice presets so every post follows your style, wording, and formatting rules.',
  },
  {
    id: 4,
    question: 'Is there a free option?',
    answer:
      'Yes. Try a one-off guest conversion for free. Sign up to unlock more conversions and features.',
  },
  {
    id: 5,
    question: 'Can I tweak the output?',
    answer:
      'Absolutely. Edit inline, regenerate with new tones or formats, and copy/export when ready.',
  },
];

const Faqs = () => {
  const router = useRouter();
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="flex md:py-[5rem] pb-[7rem] md:pb-[10rem] py-[3rem] gradientBg3 flex-center relative">
      {/* bubbles */}

      <div className="absolute top-30 md:left-80">
        <div className="relative w-30 h-30 md:w-70 md:h-70">
          <div
            className="absolute inset-8 rounded-full
           bg-[rgba(132,46,190,0.1)] 
           filter blur"
          ></div>
        </div>
      </div>

      <div className="absolute top-80 md:right-100">
        <div className="relative w-30 h-30 md:w-70 md:h-70">
          <div
            className="absolute inset-8 rounded-full
           bg-[rgba(11,74,190,0.1)]
           filter blur"
          ></div>
        </div>
      </div>

      <div className="absolute md:bottom-0 bottom-140 md:left-100">
        <div className="relative w-30 h-30 md:w-70 md:h-70">
          <div
            className="absolute inset-8 rounded-full
           bg-[rgba(61,11,241,0.04)]
           filter blur"
          ></div>
        </div>
      </div>

      {/*  */}

      <div className="default-margin w-full col-center relative">
        <h3 className="general-title">
          <span className="gradient8">Frequently Asked Questions</span>
        </h3>
        <p className="general-subtitle text-[#DBEAFE]/80">
          Everything you need to know about generating viral text based content
          with AI.
        </p>
        <div className="w-full max-w-[800px] h-fit flex flex-wrap justify-center gap-8 mt-4">
          {questions.map(({ id, question, answer }) => (
            <Question
              key={id}
              question={question}
              answer={answer}
              open={openId === id}
              onToggle={() => setOpenId(openId === id ? null : id)}
            />
          ))}
        </div>
        <div className="border-white/20 border-[2px] rounded-xl py-2 px-4 col-center gap-3 bg-white/5 mt-6">
          <p className="text-base">Ready to generate content that count!?</p>
          <p className="text-sm text-white/50">
            Join contentfix to get started
          </p>
          <div className="flex-center gap-4">
            <Button
              text="Sign Up now"
              className="bg-white/10 border-white/50 border-[2px] text-sm py-2 px-4"
            />
            or
            <Button
              text="Try it out, quickly"
              className="text-sm py-2 px-4"
              onClick={() => router.push(`/${QUICK_TRY}`)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
