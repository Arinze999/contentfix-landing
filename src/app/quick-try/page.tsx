import QuickTry from '@/components/quick-try/QuickTry';
import React from 'react';

const page = () => {
  return (
    <div className="flex gradientBg2 text-white flex-center relative">
      <div className="default-margin w-full h-screen col-start relative overflow-auto overflow-x-hidden pb-100 md:pb-100 no-scrollbar">
        <div className="min-h-[10rem] border-2 border-white/10 bg-white/5 text-sm p-3 rounded-lg md:mt-[7rem] mt-[5rem]">
          {/* enhanced text will be displayed here; this area now scrolls */}
          {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque animi
          minus, optio accusantium, aperiam quo aspernatur ex nam at doloremque
          facilis. Dolorum totam placeat perspiciatis, quia necessitatibus
          voluptatum pariatur. Doloribus? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Eaque animi minus, optio accusantium,
          aperiam quo aspernatur ex nam at doloremque facilis. Dolorum totam
          placeat perspiciatis, quia necessitatibus voluptatum pariatur.
          Doloribus? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eaque animi minus, optio accusantium, aperiam quo aspernatur ex nam at
          doloremque facilis. Dolorum totam placeat perspiciatis, quia
          necessitatibus voluptatum pariatur. Doloribus? Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Eaque animi minus, optio
          accusantium, aperiam quo aspernatur ex nam at doloremque facilis.
          Dolorum totam placeat perspiciatis, quia necessitatibus voluptatum
          pariatur. Doloribus? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Eaque animi minus, optio accusantium, aperiam quo
          aspernatur ex nam at doloremque facilis. Dolorum totam placeat
          perspiciatis, quia necessitatibus voluptatum pariatur. Doloribus?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque animi
          minus, optio accusantium, aperiam quo aspernatur ex nam at doloremque
          facilis. Dolorum totam placeat perspiciatis, quia necessitatibus
          voluptatum pariatur. Doloribus? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Eaque animi minus, optio accusantium,
          aperiam quo aspernatur ex nam at doloremque facilis. Dolorum totam
          placeat perspiciatis, quia necessitatibus voluptatum pariatur.
          Doloribus? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eaque animi minus, optio accusantium, aperiam quo aspernatur ex nam at
          doloremque facilis. Dolorum totam placeat perspiciatis, quia
          necessitatibus voluptatum pariatur. Doloribus? Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Eaque animi minus, optio
          accusantium, aperiam quo aspernatur ex nam at doloremque facilis.
          Dolorum totam placeat perspiciatis, quia necessitatibus voluptatum
          pariatur. Doloribus? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Eaque animi minus, optio accusantium, aperiam quo
          aspernatur ex nam at doloremque facilis. Dolorum totam placeat
          perspiciatis, quia necessitatibus voluptatum pariatur. Doloribus?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque animi
          minus, optio accusantium, aperiam quo aspernatur ex nam at doloremque
          facilis. Dolorum totam placeat perspiciatis, quia necessitatibus
          voluptatum pariatur. Doloribus? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Eaque animi minus, optio accusantium,
          aperiam quo aspernatur ex nam at doloremque facilis. Dolorum totam
          placeat perspiciatis, quia necessitatibus voluptatum pariatur.
          Doloribus? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eaque animi minus, optio accusantium, aperiam quo aspernatur ex nam at
          doloremque facilis. Dolorum totam placeat perspiciatis, quia
          necessitatibus voluptatum pariatur. Doloribus? Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Eaque animi minus, optio
          accusantium, aperiam quo aspernatur ex nam at doloremque facilis.
          Dolorum totam placeat perspiciatis, quia necessitatibus voluptatum
          pariatur. Doloribus? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Eaque animi minus, optio accusantium, aperiam quo
          aspernatur ex nam at doloremque facilis. Dolorum totam placeat
          perspiciatis, quia necessitatibus voluptatum pariatur. Doloribus?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque animi
          minus, optio accusantium, aperiam quo aspernatur ex nam at doloremque
          facilis. Dolorum totam placeat perspiciatis, quia necessitatibus
          voluptatum pariatur. Doloribus? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Eaque animi minus, optio accusantium,
          aperiam quo aspernatur ex nam at doloremque facilis. Dolorum totam
          placeat perspiciatis, quia necessitatibus voluptatum pariatur.
          Doloribus? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eaque animi minus, optio accusantium, aperiam quo aspernatur ex nam at
          doloremque facilis. Dolorum totam placeat perspiciatis, quia
          necessitatibus voluptatum pariatur. Doloribus? Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Eaque animi minus, optio
          accusantium, aperiam quo aspernatur ex nam at doloremque facilis.
          Dolorum totam placeat perspiciatis, quia necessitatibus voluptatum
          pariatur. Doloribus? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Eaque animi minus, optio accusantium, aperiam quo
          aspernatur ex nam at doloremque facilis. Dolorum totam placeat
          perspiciatis, quia necessitatibus voluptatum pariatur. Doloribus?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque animi
          minus, optio accusantium, aperiam quo aspernatur ex nam at doloremque
          facilis. Dolorum totam placeat perspiciatis, quia necessitatibus
          voluptatum pariatur. Doloribus? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Eaque animi minus, optio accusantium,
          aperiam quo aspernatur ex nam at doloremque facilis. Dolorum totam
          placeat perspiciatis, quia necessitatibus voluptatum pariatur.
          Doloribus? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eaque animi minus, optio accusantium, aperiam quo aspernatur ex nam at
          doloremque facilis. Dolorum totam placeat perspiciatis, quia
          necessitatibus voluptatum pariatur. Doloribus? Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Eaque animi minus, optio
          accusantium, aperiam quo aspernatur ex nam at doloremque facilis.
          Dolorum totam placeat perspiciatis, quia necessitatibus voluptatum
          pariatur. Doloribus?\ Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Eaque animi minus, optio accusantium, aperiam quo
          aspernatur ex nam at doloremque facilis. Dolorum totam placeat
          perspiciatis, quia necessitatibus voluptatum pariatur. Doloribus?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque animi
          minus, optio accusantium, aperiam quo aspernatur ex nam at doloremque
          facilis. Dolorum totam placeat perspiciatis, quia necessitatibus
          voluptatum pariatur. Doloribus? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Eaque animi minus, optio accusantium,
          aperiam quo aspernatur ex nam at doloremque facilis. Dolorum totam
          placeat perspiciatis, quia necessitatibus voluptatum pariatur.
          Doloribus? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eaque animi minus, optio accusantium, aperiam quo aspernatur ex nam at
          doloremque facilis. Dolorum totam placeat perspiciatis, quia
          necessitatibus voluptatum pariatur. Doloribus? Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Eaque animi minus, optio
          accusantium, aperiam quo aspernatur ex nam at doloremque facilis.
          Dolorum totam placeat perspiciatis, quia necessitatibus voluptatum
          pariatur. Doloribus? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Eaque animi minus, optio accusantium, aperiam quo
          aspernatur ex nam at doloremque facilis. Dolorum totam placeat
          perspiciatis, quia necessitatibus voluptatum pariatur. Doloribus?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque animi
          minus, optio accusantium, aperiam quo aspernatur ex nam at doloremque
          facilis. Dolorum totam placeat perspiciatis, quia necessitatibus
          voluptatum pariatur. Doloribus? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Eaque animi minus, optio accusantium,
          aperiam quo aspernatur ex nam at doloremque facilis. Dolorum totam
          placeat perspiciatis, quia necessitatibus voluptatum pariatur.
          Doloribus? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eaque animi minus, optio accusantium, aperiam quo aspernatur ex nam at
          doloremque facilis. Dolorum totam placeat perspiciatis, quia
          necessitatibus voluptatum pariatur. Doloribus? Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Eaque animi minus, optio
          accusantium, aperiam quo aspernatur ex nam at doloremque facilis.
          Dolorum totam placeat perspiciatis, quia necessitatibus voluptatum
          pariatur. Doloribus? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Eaque animi minus, optio accusantium, aperiam quo
          aspernatur ex nam at doloremque facilis. Dolorum totam placeat
          perspiciatis, quia necessitatibus voluptatum pariatur. Doloribus?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque animi
          minus, optio accusantium, aperiam quo aspernatur ex nam at doloremque
          facilis. Dolorum totam placeat perspiciatis, quia necessitatibus
          voluptatum pariatur. Doloribus? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Eaque animi minus, optio accusantium,
          aperiam quo aspernatur ex nam at doloremque facilis. Dolorum totam
          placeat perspiciatis, quia necessitatibus voluptatum pariatur.
          Doloribus? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eaque animi minus, optio accusantium, aperiam quo aspernatur ex nam at
          doloremque facilis. Dolorum totam placeat perspiciatis, quia
          necessitatibus voluptatum pariatur. Doloribus? Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Eaque animi minus, optio
          accusantium, aperiam quo aspernatur ex nam at doloremque facilis.
          Dolorum totam placeat perspiciatis, quia necessitatibus voluptatum
          pariatur. Doloribus? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Eaque animi minus, optio accusantium, aperiam quo
          aspernatur ex nam at doloremque facilis. Dolorum totam placeat
          perspiciatis, quia necessitatibus voluptatum pariatur. Doloribus?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque animi
          minus, optio accusantium, aperiam quo aspernatur ex nam at doloremque
          facilis. Dolorum totam placeat perspiciatis, quia necessitatibus
          voluptatum pariatur. Doloribus? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Eaque animi minus, optio accusantium,
          aperiam quo aspernatur ex nam at doloremque facilis. Dolorum totam
          placeat perspiciatis, quia necessitatibus voluptatum pariatur.
          Doloribus? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eaque animi minus, optio accusantium, aperiam quo aspernatur ex nam at
          doloremque facilis. Dolorum totam placeat perspiciatis, quia
          necessitatibus voluptatum pariatur. Doloribus? Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Eaque animi minus, optio
          accusantium, aperiam quo aspernatur ex nam at doloremque facilis.
          Dolorum totam placeat perspiciatis, quia necessitatibus voluptatum
          pariatur. Doloribus? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Eaque animi minus, optio accusantium, aperiam quo
          aspernatur ex nam at doloremque facilis. Dolorum totam placeat
          perspiciatis, quia necessitatibus voluptatum pariatur. Doloribus?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque animi
          minus, optio accusantium, aperiam quo aspernatur ex nam at doloremque
          facilis. Dolorum totam placeat perspiciatis, quia necessitatibus
          voluptatum pariatur. Doloribus? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Eaque animi minus, optio accusantium,
          aperiam quo aspernatur ex nam at doloremque facilis. Dolorum totam
          placeat perspiciatis, quia necessitatibus voluptatum pariatur.
          Doloribus? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eaque animi minus, optio accusantium, aperiam quo aspernatur ex nam at
          doloremque facilis. Dolorum totam placeat perspiciatis, quia
          necessitatibus voluptatum pariatur. Doloribus? Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Eaque animi minus, optio
          accusantium, aperiam quo aspernatur ex nam at doloremque facilis.
          Dolorum totam placeat perspiciatis, quia necessitatibus voluptatum
          pariatur. Doloribus?\ Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Eaque animi minus, optio accusantium, aperiam quo
          aspernatur ex nam at doloremque facilis. Dolorum totam placeat
          perspiciatis, quia necessitatibus voluptatum pariatur. Doloribus?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque animi
          minus, optio accusantium, aperiam quo aspernatur ex nam at doloremque
          facilis. Dolorum totam placeat perspiciatis, quia necessitatibus
          voluptatum pariatur. Doloribus? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Eaque animi minus, optio accusantium,
          aperiam quo aspernatur ex nam at doloremque facilis. Dolorum totam
          placeat perspiciatis, quia necessitatibus voluptatum pariatur.
          Doloribus? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eaque animi minus, optio accusantium, aperiam quo aspernatur ex nam at
          doloremque facilis. Dolorum totam placeat perspiciatis, quia
          necessitatibus voluptatum pariatur. Doloribus? Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Eaque animi minus, optio
          accusantium, aperiam quo aspernatur ex nam at doloremque facilis.
          Dolorum totam placeat perspiciatis, quia necessitatibus voluptatum
          pariatur. Doloribus? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Eaque animi minus, optio accusantium, aperiam quo
          aspernatur ex nam at doloremque facilis. Dolorum totam placeat
          perspiciatis, quia necessitatibus voluptatum pariatur. Doloribus?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque animi
          minus, optio accusantium, aperiam quo aspernatur ex nam at doloremque
          facilis. Dolorum totam placeat perspiciatis, quia necessitatibus
          voluptatum pariatur. Doloribus? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Eaque animi minus, optio accusantium,
          aperiam quo aspernatur ex nam at doloremque facilis. Dolorum totam
          placeat perspiciatis, quia necessitatibus voluptatum pariatur.
          Doloribus? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eaque animi minus, optio accusantium, aperiam quo aspernatur ex nam at
          doloremque facilis. Dolorum totam placeat perspiciatis, quia
          necessitatibus voluptatum pariatur. Doloribus? Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Eaque animi minus, optio
          accusantium, aperiam quo aspernatur ex nam at doloremque facilis.
          Dolorum totam placeat perspiciatis, quia necessitatibus voluptatum
          pariatur. Doloribus? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Eaque animi minus, optio accusantium, aperiam quo
          aspernatur ex nam at doloremque facilis. Dolorum totam placeat
          perspiciatis, quia necessitatibus voluptatum pariatur. Doloribus?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque animi
          minus, optio accusantium, aperiam quo aspernatur ex nam at doloremque
          facilis. Dolorum totam placeat perspiciatis, quia necessitatibus
          voluptatum pariatur. Doloribus? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Eaque animi minus, optio accusantium,
          aperiam quo aspernatur ex nam at doloremque facilis. Dolorum totam
          placeat perspiciatis, quia necessitatibus voluptatum pariatur.
          Doloribus? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eaque animi minus, optio accusantium, aperiam quo aspernatur ex nam at
          doloremque facilis. Dolorum totam placeat perspiciatis, quia
          necessitatibus voluptatum pariatur. Doloribus? Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Eaque animi minus, optio
          accusantium, aperiam quo aspernatur ex nam at doloremque facilis.
          Dolorum totam placeat perspiciatis, quia necessitatibus voluptatum
          pariatur. Doloribus? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Eaque animi minus, optio accusantium, aperiam quo
          aspernatur ex nam at doloremque facilis. Dolorum totam placeat
          perspiciatis, quia necessitatibus voluptatum pariatur. Doloribus?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque animi
          minus, optio accusantium, aperiam quo aspernatur ex nam at doloremque
          facilis. Dolorum totam placeat perspiciatis, quia necessitatibus
          voluptatum pariatur. Doloribus? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Eaque animi minus, optio accusantium,
          aperiam quo aspernatur ex nam at doloremque facilis. Dolorum totam
          placeat perspiciatis, quia necessitatibus voluptatum pariatur.
          Doloribus? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eaque animi minus, optio accusantium, aperiam quo aspernatur ex nam at
          doloremque facilis. Dolorum totam placeat perspiciatis, quia
          necessitatibus voluptatum pariatur. Doloribus? Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Eaque animi minus, optio
          accusantium, aperiam quo aspernatur ex nam at doloremque facilis.
          Dolorum totam placeat perspiciatis, quia necessitatibus voluptatum
          pariatur. Doloribus? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Eaque animi minus, optio accusantium, aperiam quo
          aspernatur ex nam at doloremque facilis. Dolorum totam placeat
          perspiciatis, quia necessitatibus voluptatum pariatur. Doloribus?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque animi
          minus, optio accusantium, aperiam quo aspernatur ex nam at doloremque
          facilis. Dolorum totam placeat perspiciatis, quia necessitatibus
          voluptatum pariatur. Doloribus? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Eaque animi minus, optio accusantium,
          aperiam quo aspernatur ex nam at doloremque facilis. Dolorum totam
          placeat perspiciatis, quia necessitatibus voluptatum pariatur.
          Doloribus? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eaque animi minus, optio accusantium, aperiam quo aspernatur ex nam at
          doloremque facilis. Dolorum totam placeat perspiciatis, quia
          necessitatibus voluptatum pariatur. Doloribus? Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Eaque animi minus, optio
          accusantium, aperiam quo aspernatur ex nam at doloremque facilis.
          Dolorum totam placeat perspiciatis, quia necessitatibus voluptatum
          pariatur. Doloribus?\ Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Eaque animi minus, optio accusantium, aperiam quo
          aspernatur ex nam at doloremque facilis. Dolorum totam placeat
          perspiciatis, quia necessitatibus voluptatum pariatur. Doloribus? */}
        </div>
        <QuickTry />
      </div>
    </div>
  );
};

export default page;
