import { useTheme } from '@/app/theme/useTheme.ts';
import { Button } from '@/shared/ui-kit/button/Button.tsx';
import { Theme } from '@/app/theme/ThemeContext.ts';
import Sun from '@/shared/assets/Sun.tsx';
import Moon from '@/shared/assets/Moon.tsx';
import { memo } from 'react';

const ThemeSwitcher = memo(() => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      square
      round
      className="bg-sky-200 dark:bg-slate-900 hover:bg-amber-400 hover:dark:dark:bg-[#04060C]"
    >
      {
        theme === Theme.LIGHT ? (
          <Sun />
        ) : (
          <Moon />
        )
      }
    </Button>
  );
});

export default ThemeSwitcher;