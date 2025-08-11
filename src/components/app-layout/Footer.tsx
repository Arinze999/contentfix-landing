'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import CompanyLogo from '../CompanyLogo';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const path = usePathname();
  const hide = path?.startsWith('/quick-try');

  if (hide) {
    return;
  }

  return (
    <div className="flex-col md:py-[4rem] py-[2rem] gradientBg2-1 text-white flex-center relative">
      <div className="default-padding py-4 w-full flex flex-col md:flex-row justify-between relative">
        <div className="col-start gap-3">
          <CompanyLogo />
          <p className="mb-4 text-[12px] max-w-[300px] text-white/40">
            Transform rough ideas into platform-ready text with AI-powered
            precision. Save hours each week with intelligent drafting and
            formatting.
          </p>
        </div>
        {/*  */}
        <div>
          <p className="mb-4 md:text-[20px]">Product</p>
          <ul>
            <li>
              <p className="mb-4 text-[12px] md:text-sm max-w-[200px] text-white/40">
                Features
              </p>
            </li>
            <li>
              <p className="mb-4 text-[12px] md:text-sm max-w-[200px] text-white/40">
                Pricing
              </p>
            </li>
            <li>
              <p className="mb-4 text-[12px] md:text-sm max-w-[200px] text-white/40">
                Showcase
              </p>
            </li>
          </ul>
        </div>
        {/*  */}
        <div>
          <p className="mb-4 md:text-[20px]">Company</p>
          <ul>
            <li>
              <p className="mb-4 text-[12px] md:text-sm max-w-[200px] text-white/40">
                About
              </p>
            </li>
            <li>
              <p className="mb-4 text-[12px] md:text-sm max-w-[200px] text-white/40">
                Blog
              </p>
            </li>
            <li>
              <p className="mb-4 text-[12px] md:text-sm max-w-[200px] text-white/40">
                Careers
              </p>
            </li>
            <li>
              <p className="mb-4 text-[12px] md:text-sm max-w-[200px] text-white/40">
                Contact
              </p>
            </li>
          </ul>
        </div>
        {/*  */}
        <div>
          <p className="mb-4 md:text-[20px]">Legal</p>
          <ul>
            <li>
              <p className="mb-4 text-[12px] md:text-sm max-w-[200px] text-white/40">
                Privacy Policy
              </p>
            </li>
            <li>
              <p className="mb-4 text-[12px] md:text-sm max-w-[200px] text-white/40">
                Terms Of Use
              </p>
            </li>
            <li>
              <p className="mb-4 text-[12px] md:text-sm max-w-[200px] text-white/40">
                FAQ
              </p>
            </li>
            <li>
              <p className="mb-4 text-[12px] md:text-sm max-w-[200px] text-white/40">
                Cookie Policy
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="default-padding border-t-white/10 border-t-[2px] flex flex-col md:flex-row justify-between gap-10 py-4">
        <p className="text-sm text-white/40">
          2025 ContentFix, All Rights reserved.
        </p>
        <p className="text-sm text-white/40">
          Made with love by <b>Arinze.Dev</b>
          <br />
          <span className="flex-center gap-4 mt-3">
            <Link
              href={
                'https://instagram.com/a_r_in_z_e?utm_source=qr&igshid=ZGUzMzM3NWJiOQ%3D%3D'
              }
              target="_blank"
            >
              <Image
                src={'/img/insta.png'}
                alt="insta"
                width={30}
                height={30}
              />
            </Link>
            <Link
              href={
                'https://www.linkedin.com/in/uzoma-akanaga-87542017a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
              }
              target="_blank"
            >
              <Image
                src={'/img/link.png'}
                alt="linkedin"
                width={25}
                height={25}
              />
            </Link>
          </span>
        </p>
        <p className="text-sm text-white/40 flex items-start justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#4ADE80] mt-1.5"></span>All
          Systems Operational.
        </p>
      </div>
    </div>
  );
};

export default Footer;
