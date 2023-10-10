import { useContext } from 'react';
import { Theme, ThemeContext } from './ThemeContext.ts';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/constants/localStorage.ts';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    window.document.documentElement.classList.remove(theme);
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
};