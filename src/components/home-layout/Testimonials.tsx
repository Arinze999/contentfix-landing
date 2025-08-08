import React from 'react';
import { StarsC } from '../icons/Stars';
import TestimonialCard from './TestimonialCard';

const testimonies = [
  {
    src1: '/img/f1.png',
    src2: '/img/fc1.png',
    speech:
      '“ContentFix turned my rough ideas into 12 polished posts. My engagement jumped by 120% in two days!”',
    name: 'Oluchi Okafor',
    occupation: 'Content Strategist',
  },
  {
    src1: '/img/f2.png',
    src2: '/img/fc2.png',
    speech:
      '“ContentFix generated my LinkedIn and Twitter posts in seconds. My follower count grew by 200% in one week!”',
    name: 'Chinedu Adebayo',
    occupation: 'Digital Marketer',
  },
  {
    src1: '/img/f3.png',
    src2: '/img/fc3.png',
    speech:
      '“I used ContentFix to refine my blog excerpts for Instagram and Threads. My click-throughs increased by 90% overnight!”',
    name: 'Aisha Bello',
    occupation: 'Social Media Manager',
  },
];

const Testimonials = () => {
  return (
    <div className="flex md:py-[5rem] py-[3rem] gradientBg flex-center relative">
      {/* bubbles */}

      <div className="absolute top-30 left-0">
        <div className="relative w-35 h-35">
          <div
            className="absolute inset-8 rounded-full
           bg-[rgba(190,46,147,0.2)] 
           filter blur"
          ></div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0">
        <div className="relative w-40 h-40">
          <div
            className="absolute inset-8 rounded-full
           bg-[rgba(5,194,115,0.2)]
           filter blur"
          ></div>
        </div>
      </div>

      <div className="absolute top-0 right-0">
        <div className="relative w-40 h-40">
          <div
            className="absolute inset-8 rounded-full
           bg-[rgba(11,74,190,0.2)]
           filter blur"
          ></div>
        </div>
      </div>

      <div className="absolute md:bottom-0 bottom-140 md:left-0">
        <div className="relative w-38 h-38">
          <div
            className="absolute inset-8 rounded-full
           bg-[rgba(149,11,241,0.2)]
           filter blur"
          ></div>
        </div>
      </div>

      {/*  */}

      <div className="default-margin w-full col-center relative">
        <p className="border-white/20 border-[2px] rounded-3xl py-2 px-4 flex gap-3 bg-white/20 opacity-80">
          <StarsC />
          What Our Users Say
          <StarsC />
        </p>
        <h3 className="general-title">
          <span>Loved by</span> <br />
          <span className="gradient1">Creators Worldwide</span>
        </h3>
        <p className="general-subtitle text-white/70">
          Don't just take our word for it, Here's what our users say about
          contentfix.
        </p>
        <div className="w-full h-fit flex flex-wrap justify-center gap-8 mt-4">
          {testimonies.map((test, index) => (
            <TestimonialCard key={index} {...test} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
