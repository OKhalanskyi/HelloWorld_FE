import Router from '@/app/router/Router.tsx';
import Header from '@/components/Header/Header.tsx';
import Footer from '@/components/Footer/Footer.tsx';

function App() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div className="flex flex-col px-4 md:px-5 lg:px-10 grow">
        <Header />
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;
