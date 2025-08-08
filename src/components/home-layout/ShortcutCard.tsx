import Image from 'next/image';
import React from 'react';

const ShortcutCard = ({
  src,
  title,
  text,
}: {
  src: string;
  title: string;
  text: string;
}) => {
  return (
    <div className="rounded-2xl w-full max-w-[380px] h-[300px] col-start">
      <div className="h-1/2 border-white/10 bg-white/5 border-2 rounded-2xl p-4 flex flex-col justify-between">
        <Image src={src} alt="src" height={50} width={50} />
        <p className="font-bold text-lg">{title}</p>
      </div>
      <p className="text-sm text-white/50">{text}</p>
    </div>
  );
};

export default ShortcutCard;
