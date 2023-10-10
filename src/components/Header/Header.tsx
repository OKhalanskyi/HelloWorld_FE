import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo/Logo.tsx';
import { getMainPath } from '@/shared/constants/getRoutes.ts';
import ThemeSwitcher from '@/components/ThemeSwitcher/ThemeSwitcher.tsx';

const Header: FC  = memo(() => {
  return (
    <header className="md:h-16 h-14 flex items-center justify-between">
      <Link to={getMainPath()}>
        <Logo variant="header"/>
      </Link>

      <ThemeSwitcher />
    </header>
  );
});

export default Header;