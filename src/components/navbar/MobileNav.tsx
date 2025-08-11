import React from 'react';
import Link from 'next/link';
import Button from '../buttons/Button';
import { QUICK_TRY } from '@/routes/routes';

type MobileNavProps = {
  isOpen: boolean;
  close: () => void;
};

const navItems: Array<{ title: string; link: string }> = [
  { title: 'Home', link: '/' },
  { title: 'Quick try', link: `/${QUICK_TRY}` },
  // { title: 'Testimonials', link: '/' },
  // { title: 'Pricing', link: '/' },
];

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, close }) => {
  const handleToggle = () => {
    close();
  };

  // build dynamic items: replace "Sign in" with "Log out" when user is present
  // const mobileNavItems = navItems.map((item) => {
  //   if (item.title === 'Sign in') {
  //     return {
  //       title: 'Log out',
  //       onClick: async () => {
  //         close();
  //       },
  //     } as {
  //       title: string;
  //       onClick: () => Promise<void>;
  //     };
  //   }
  //   return item;
  // });

  return (
    <div
      className={`fixed bg-dark top-7 left-0 h-fit w-full pb-[1rem] shadow z-[-10] transition-transform duration-200 flex flex-col gap-[2rem] md:hidden ${
        isOpen ? 'translate-y-[14%]' : '-translate-y-[200%]'
      }`}
    >
      <ul className="flex flex-col w-full text-xl mt-[2rem] gap-[1rem]">
        {navItems.map((item, index) => (
          <li key={index}>
            <div
              className="flex justify-between items-center px-4 cursor-pointer w-fit"
              onClick={() => handleToggle()}
            >
              <Link href={item.link}>
                <span className="text-[14px] hover:text-myPurple">
                  {item.title}
                </span>
              </Link>
            </div>
          </li>
        ))}
        <li className="flex justify-between items-center px-4 cursor-pointer w-fit">
          <Button
            text="Get Started"
            className="gradientBgBtn w-[124px] h-[40px] text-sm justify-center items-center"
          />
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
