import React from 'react';
import CompanyLogo from '../CompanyLogo';

const Footer = () => {
  return (
    <div className="flex-col md:py-[4rem] py-[2rem] gradientBg2-1 text-white flex-center relative">
      <div className="default-padding py-4 w-full flex flex-col md:flex-row justify-between relative">
        {' '}
        <div className="col-start gap-3">
          <CompanyLogo />
          <p className="mb-4 text-[12px] max-w-[300px] text-white/40">
            Transform your long-form videos into viral short clips with
            AI-powered precision. Save hours every week with intelligent content
            creation.
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
        </p>
        <p className="text-sm text-white/40 flex-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#4ADE80]"></span>All Systems
          Operational.
        </p>
      </div>
    </div>
  );
};

export default Footer;
