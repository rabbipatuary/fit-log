import Image from "next/image";
import footer from "@/assets/logo.png"
import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 flex items-center justify-between">
        <div className="flex items-center">
            <Image src={footer} alt="footer"></Image>
            <h1>FITLOG</h1>
        </div>
        <p className="text-[#464b55]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      
    </footer>
  );
};

export default Footer;
