'use client';

import { useEffect, useRef, MouseEvent } from 'react';
import Link from 'next/link';
import Button from '../buttons/Button';

const Nav = () => {
  const navRef = useRef<HTMLDivElement>(null);

  // sign‐out handler
  const handleLogout = async (e: MouseEvent) => {
    e.preventDefault();
  };

  // build your items
  const navItems: Array<{ title: string; link: string }> = [
    { title: 'Home', link: '/' },
    { title: 'Features', link: '/' },
    { title: 'Testimonials', link: '/' },
    { title: 'Pricing', link: '/' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        // …your existing logic…
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={navRef} className="hidden md:flex">
      <ul className="flex gap-2 text-xl">
        {navItems.map((item, idx) => (
          <li key={idx} className="relative" onClick={handleLogout}>
            {
              <Link href={item.link}>
                <div className="flex items-center px-4 py-2 cursor-pointer">
                  <span className="text-sm hover:text-myPurple">
                    {item.title}
                  </span>
                </div>
              </Link>
            }
          </li>
        ))}
        <li>
          <Button
            text="Get Started"
            className="gradientBgBtn w-[124px] h-[40px] text-sm justify-center items-center"
          />
        </li>
      </ul>
    </div>
  );
};

export default Nav;
