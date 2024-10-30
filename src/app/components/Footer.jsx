'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const router = usePathname();
  return (
    router !== '/' && (
      <footer className="pt-4 pr-4 mt-auto text-right">
        <a
          className="no-underline text-xs text-gray-400"
          href="https://github.com/benante"
        >
          By Orlandi Tommaso
        </a>
      </footer>
    )
  );
};

export default Footer;
