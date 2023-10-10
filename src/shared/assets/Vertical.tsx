import { FC, memo } from 'react';
import * as classNames from 'classnames';

const Vertical: FC<{isActive: boolean}> = memo(({ isActive }) => {
  return (
    <svg className={classNames('h-4 w-4 hover:fill-amber-400', {
      'fill-amber-400': isActive,
      'fill-slate-600': !isActive
    })} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
      <path d="M2 0a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm0 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H2Zm6-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V2Zm0 8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2Z" />
    </svg>

  );
});

export default Vertical;