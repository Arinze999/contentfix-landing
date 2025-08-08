import Image from 'next/image';
import React from 'react';
import { RoundStarBorder } from '../icons/Star';

const TestimonialCard = ({
  src1,
  src2,
  speech,
  name,
  occupation,
}: {
  src1: string;
  src2: string;
  speech: string;
  name: string;
  occupation: string;
}) => {
  return (
    <div className="w-full max-w-[370px] md:h-[387px] col-start justify-between rounded-2xl bg-white/5 p-5 border-white/10 border-[2px]">
      <Image src={src1} alt="img" height={50} width={50} />
      <div className="flex gap-2 text-black">
        <RoundStarBorder />
        <RoundStarBorder />
        <RoundStarBorder />
        <RoundStarBorder />
        <RoundStarBorder />
      </div>
      <p className="text-white/60">{speech}</p>
      <div className="flex gap-4">
        <Image src={src2} alt="img" height={50} width={50} />
        <div>
          <p>{name}</p>
          <p className="text-white/60 text-sm">{occupation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
