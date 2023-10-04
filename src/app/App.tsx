import Router from '@/app/router/Router.tsx';
import Header from '@/components/Header/Header.tsx';

function App() {
  return (
    <div className="px-4 md:px-5 lg:px-10">
      <Header />
      <Router />
    </div>
  );
}

export default App;
