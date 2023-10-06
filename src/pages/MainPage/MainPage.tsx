import { FC } from 'react';
import SearchForm from '@/components/SearchForm/SearchForm.tsx';

const MainPage: FC = () => {
  return (
    <div className="flex flex-col grow justify-center items-center">
      <SearchForm />
    </div>
  );
};

export default MainPage;