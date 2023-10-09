import { FC, useState } from 'react';
import { Button } from '@/shared/ui-kit/button/Button.tsx';
import Horizontal from '@/shared/assets/Horizontal.tsx';
import Vertical from '@/shared/assets/Vertical.tsx';
import * as classNames from 'classnames';
import { useAppSelector } from '@/shared/hooks/redux-hooks.ts';
import { selectTotalMovies } from '@/app/store/selectors/movieSelectors.ts';

const Toolbar: FC = () => {
  const totalMovies = useAppSelector(selectTotalMovies)

  const [layoutType, setLayoutType] = useState<'horizontal'| 'vertical'>('vertical')

  return (
    <div className="flex w-full justify-between dark:text-slate-200 text-slate-900">
      <p>
        Found &nbsp;
        <span className="text-amber-400">{totalMovies}</span>
        &nbsp; movies
      </p>

      <div className="flex gap-3 items-center dark:text-slate-200 text-slate-900">
        layout:

        <Button
          onClick={() => setLayoutType('vertical')}
          square
          round
          className={classNames('h-8 w-8', {
            'dark:bg-[#04060C] bg-slate-500': layoutType === 'vertical',
            'dark:bg-slate-900 bg-[#CFE3FC]': layoutType === 'horizontal'
          })}
        >
          <Vertical isActive={layoutType === 'vertical'}/>
        </Button>

        <Button
          onClick={() => setLayoutType('horizontal')}
          square
          round
          className={classNames('h-8 w-8', {
            'dark:bg-[#04060C] bg-slate-500': layoutType === 'horizontal',
            'dark:bg-slate-900 bg-[#CFE3FC]': layoutType === 'vertical'
          })}
        >
          <Horizontal isActive={layoutType === 'horizontal'}/>
        </Button>
      </div>
    </div>
  );
};

export default Toolbar;