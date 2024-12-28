'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const router = usePathname();
  return router !== '/' ? (
    <footer className="pt-4 pb-1 mt-8 text-xs text-center text-gray-400">
      Website by
      <a
        className="no-underline ml-1 tracking-widest text-gray-500"
        href="https://github.com/benante"
      >
        Orlandi Tommaso
      </a>
    </footer>
  ) : (
    <footer className="p-4"></footer>
  );
};

export default Footer;
