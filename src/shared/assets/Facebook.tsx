import { FC, memo } from 'react';

const Facebook: FC = memo(() => {
  return (
    <svg className="h-6 fill-slate-600 dark:fill-slate-200"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19.5 0h-15A4.501 4.501 0 0 0 0 4.5v15C0 21.984 2.016 24 4.5 24h8.313v-9.297H9.687v-3.625h3.126V8.406c0-3.094 1.906-4.781 4.671-4.781 1.313 0 2.453.094 2.782.14V7l-1.907.016c-1.515 0-1.797.703-1.797 1.75v2.312h3.579l-.47 3.625h-3.108V24H19.5c2.484 0 4.5-2.016 4.5-4.5v-15C24 2.016 21.984 0 19.5 0Z" />
    </svg>
  );
});

export default Facebook;