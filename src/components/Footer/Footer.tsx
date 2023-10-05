import Logo from '@/components/Logo/Logo.tsx';
import { FC, memo } from 'react';
import SocialMediaBar from '@/components/SocialMediaBar/SocialMediaBar.tsx';

const Footer: FC = memo(() => {
  return (
    <footer className="flex items-center flex-col lg:flex-row bg-[#CFE3FC] dark:bg-[#04060C] lg:h-16 px-4 md:px-5 lg:px-10 h-[140px] py-5 lg:py-0 gap-4 lg:gap-0">
      <Logo variant="footer"/>

      <span className="hidden lg:block w-0.5 h-6 bg-sky-900 dark:bg-sky-200 mx-3"></span>

      <p className="dark:text-slate-200 text-slate-900">© Copyright 2023 HelloWorld PC. All Rights Reserved</p>

      <SocialMediaBar />
    </footer>
  );
});

export default Footer;