import React from "react";
import { SiGithub, SiX } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
      <div className="max-w-5xl mx-auto py-6 px-4 flex flex-col items-center gap-4 sm:flex-row sm:justify-between text-sm text-zinc-500 dark:text-zinc-400">
        {/* Copyright */}
        <p>&copy; {currentYear} Ryo Hidaka. All Rights Reserved.</p>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/ryohidaka0408"// あなたのGitHubユーザー名に書き換えてください
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
          >
            <SiGithub size={20} />
          </a>
          <a
            href="https://twitter.com/@RyoHidaka6"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (formerly Twitter)"
            className="hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
          >
            <SiX size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;