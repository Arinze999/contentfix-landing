import { InfoAltDuotone } from '@/components/icons/InfoAlt';
import { StarsC } from '@/components/icons/Stars';
import React from 'react';
import PriceCard from './PriceCard';
import Image from 'next/image';

const plans = [
  {
    id: 1,
    title: 'Free',
    reason: 'Perfect for trying out ContentFix and testing the waters.',
    price: '₦0',
    src1: '/img/price1.png',
    src2: '/img/l1.png',
    perks: [
      'unlimited generations',
      '4 formats',
      '3 tones',
      '10 history saves',
      '1 brand voice',
    ],
    sticker: '',
  },
  {
    id: 2,
    title: 'Pro',
    reason: 'For serious creators who want professional results.',
    price: '₦500',
    src1: '/img/price2.png',
    src2: '/img/l2.png',
    perks: [
      'unlimited generations',
      '8 formats',
      '8 tones',
      '60 history saves',
      '3 brand voices',
      '3 team seats',
    ],
    sticker: 'most popular',
  },
  {
    id: 3,
    title: 'Legend',
    reason:
      'For elite creators who demand unlimited power and exclusive access.',
    price: '₦1200',
    src1: '/img/price3.png',
    src2: '/img/l3.png',
    perks: [
      'unlimited generations',
      '12 formats',
      '12 tones',
      'Unlimited history saves',
      '10 brand voices',
      '10 team seats',
      'Priority support',
    ],
    sticker: '',
  },
];

const Pricing = () => {
  return (
    <div className="flex md:py-[5rem] pb-[7rem] md:pb-[10rem] py-[3rem] gradientBg2-1 flex-center relative">
      <div className="default-margin w-full col-center relative">
        <p
          className="border-white/20 border-[2px] rounded-3xl py-2 px-4 flex gap-3 bg-gradient-to-r from-[#9333EA]/20 to-[#DB2777]/20
            [--tw-gradient-from-position:0%] [--tw-gradient-to-position:100%] opacity-80"
        >
          <StarsC />
          Pricing
          <StarsC />
        </p>
        <h3 className="general-title">
          <span>Simple,</span> <br />
          <span className="gradient1">Transparent Pricing</span>
        </h3>
        <p className="general-subtitle text-white/70">
          Choose the perfect plan for your post content needs. Scale up anytime,
          no hidden fees ever.
        </p>
        <p className="border-white/20 border-[2px] rounded-xl py-2 px-4 flex flex-col md:flex-row items-center gap-3 bg-white/5 opacity-80">
          <span className="text-lightBlue flex-center gap-3">
            <InfoAltDuotone /> 100% Free (At The Moment)
          </span>
          for your post for available socials
        </p>
        <div className="w-full h-fit flex flex-wrap justify-center gap-10 mt-10">
          {plans.map((plan, index) => (
            <PriceCard key={index} {...plan} />
          ))}
        </div>

        <div className="border-white/20 border-[2px] rounded-xl py-2 px-4 flex gap-3 bg-white/5 mt-6">
          <div>
            <Image src={'/img/free.png'} alt="free" width={48} height={48} />
          </div>
          <div>
            <p className="text-white/50">
              ContentFix is 100% Free Right Now, Enjoy! it's full access
            </p>
            <p className="text-sm">Pricing not yet effective</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
