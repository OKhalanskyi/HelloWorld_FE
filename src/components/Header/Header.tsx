import { FC } from 'react';
import { Link } from 'react-router-dom';
import HeaderLogo from '@/components/HeaderLogo/HeaderLogo';
import { getMainPath } from '@/shared/constants/getRoutes.ts';
import { useTheme } from '@/app/theme/useTheme.ts';

const Header: FC  = () => {
  const { toggleTheme } = useTheme();

  return (
    <header className="md:h-16 h-14 flex items-center justify-between">
      <Link to={getMainPath()}>
        <HeaderLogo />
      </Link>

      <button onClick={toggleTheme}>
        toggler
      </button>
    </header>
  );
};

export default Header;