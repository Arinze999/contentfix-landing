'use client';

import { useEffect, useState } from 'react';
// import CompanyLogo from '../components/CompanyLogo';
// import HamburgerIcon2 from '../components/HamburgerIcon2';
// import MobileNav from '../components/MobileNav';
// import Button from '../components/Button';
import Nav from '@/components/navbar/Nav';
import MobileNav from '@/components/navbar/MobileNav';
import CompanyLogo from '@/components/CompanyLogo';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1152) {
        setNavOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="bg-dark text-white fixed w-full top-0 z-10 py-2 md:py-0">
      <div className="default-margin md:min-h-[5rem] flex justify-between items-center relative">
        <CompanyLogo
          close={() => {
            setNavOpen(false);
          }}
        />
        <Nav />
        <div className="md:hidden flex flex-col text-white">
          <div className="gap-2 flex justify-end py-2">
            {!navOpen ? (
              <div onClick={toggleNav}>open</div>
            ) : (
              <div onClick={toggleNav}>close</div>
            )}
          </div>
        </div>
        <MobileNav
          isOpen={navOpen}
          close={() => {
            setNavOpen(false);
          }}
        />
      </div>
    </header>
  );
};

export default Header;
