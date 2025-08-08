import React from 'react';
import ShortcutCard from './ShortcutCard';
import { StarsC } from '../icons/Stars';

const shortcuts = [
  {
    src: '/img/s1.png',
    title: 'AI Text Refinement',
    text: 'Our AI refines your raw text into polished posts, correcting grammar, optimizing structure, and enhancing clarity across any social platform in seconds.',
  },
  {
    src: '/img/s2.png',
    title: 'Multi-Format Conversion',
    text: 'Instantly convert your ideas into tweets, LinkedIn articles, Instagram captions, or Threads updates—each formatted and optimized for its platform.',
  },
  {
    src: '/img/s3.png',
    title: 'Tone Customization',
    text: 'Select from professional, casual, or branded tones—ContentFix tunes your message’s style and voice to match your audience and goals effortlessly.',
  },
  {
    src: '/img/s4.png',
    title: 'Brand Voice Presets',
    text: 'Create and save brand-voice presets with your unique vocabulary, style guidelines, and formatting rules for consistent, on-brand communications.',
  },
  {
    src: '/img/s5.png',
    title: 'Bulk Content Editing',
    text: 'Process multiple drafts at once and generate batches of ready-to-post content in seconds, eliminating repetitive editing and boosting productivity.',
  },
  {
    src: '/img/s6.png',
    title: 'Schedule & Publish',
    text: 'Schedule, export, or copy your polished posts directly for LinkedIn, Twitter, Instagram, and Threads, streamlining your entire posting workflow.',
  },
];

const Shortcut = () => {
  return (
    <div className="flex md:py-[5rem] py-[3rem] gradientBg2 flex-center">
      <div className="default-margin w-full col-center relative">
        <p className="border-white/20 border-[2px] rounded-3xl py-2 px-4 flex gap-3 gradientBg opacity-80">
          <StarsC />
          Key Features
        </p>
        <h3 className="general-title">
          <span className="gradient1">Your Shortcut to</span> <br />
          <span>Polished Text</span>
        </h3>
        <p className="general-subtitle">
          ClipFoundry provides a powerful suite of AI-driven tools to streamline
          your content workflow, and maximize your reach across all social media
          platforms.
        </p>
        <div className="w-full h-fit flex flex-wrap justify-center gap-8 mt-4">
          {shortcuts.map((cut, index) => (
            <ShortcutCard key={index} {...cut} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shortcut;
