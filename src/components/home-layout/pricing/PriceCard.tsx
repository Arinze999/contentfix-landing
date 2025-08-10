import Button from '@/components/buttons/Button';
import Image from 'next/image';
import React from 'react';

const PriceCard = ({
  src1,
  src2,
  id,
  title,
  price,
  perks,
  sticker,
  reason,
}: {
  src1: string;
  src2: string;
  id: number;
  title: string;
  price: string;
  perks: string[];
  sticker?: string;
  reason: string;
}) => {
  return (
    <div
      className={`w-full max-w-[400px] md:h-[680px] border-[2px] rounded-3xl p-4 md:p-6 flex flex-col gap-4 relative overflow-hidden ${
        id === 3
          ? 'bg-[#F97316]/5'
          : id === 2
          ? 'bg-[#A855F7]/5'
          : 'bg-[#3B82F6]/5'
      } ${
        id === 3
          ? 'border-[#F97316]/10'
          : id === 2
          ? 'border-[#A855F7]/10'
          : 'border-[#3B82F6]/10'
      }`}
    >
      {sticker && (
        <div
          className={`absolute top-0 right-0 px-6 text-sm py-1 rounded-bl-3xl gradientBgBtn${
            id === 3 ? '3' : id === 1 ? '2' : ''
          }`}
        >
          {sticker}
        </div>
      )}
      <Image src={src1} alt="" height={48} width={48} />
      <h4>{title}</h4>
      <p className="text-white/50">{reason}</p>
      <p>
        <span className="md:text-3xl text-xl font-bold">{price}</span>{' '}
        <span className="text-white/50"> / month</span>
      </p>

      <div className="mt-8">
        <p className="mb-4">WHAT'S INCLUDED:</p>
        <ul className="flex flex-col gap-4">
          {perks.map((p, index) => (
            <li key={index} className="flex gap-3">
              <div>
                <Image src={src2} alt="img" height={20} width={20} />
              </div>
              <p className="text-white/50 text-sm">{p}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <Button
          disabled
          text="Get Stared"
          className={`gradientBgBtn${
            id === 3 ? '3' : id === 1 ? '2' : ''
          } w-full h-12`}
        />
      </div>
    </div>
  );
};

export default PriceCard;
