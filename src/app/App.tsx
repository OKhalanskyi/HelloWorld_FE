import Router from '@/app/router/Router.tsx';
import { useTheme } from '@/app/theme/useTheme.ts';

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="text-3xl font-bold underline dark:bg-black">
      <button onClick={toggleTheme}>
        {theme}
      </button>
      <Router />
    </div>
  );
}

export default App;
