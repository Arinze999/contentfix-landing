import Image from 'next/image';
import Link from 'next/link';

const CompanyLogo = ({
  textClass,
  close,
}: {
  textClass?: string;
  close?: () => void;
}) => {
  return (
    <Link href={'/'}>
      <h3
        className={`font-[900] text-myPurple text-[24px] lg:text-[30px] flex items-end gap-0 relative  ${textClass}`}
        onClick={close}
      >
        <Image
          src={'/img/contentfixlogo.png'}
          alt="logo"
          height={50}
          width={50}
        />{' '}
        <span className="hidden md:flex">ContentFix</span>
      </h3>
    </Link>
  );
};

export default CompanyLogo;
