import { ChangeEvent, FC, InputHTMLAttributes, memo, useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = memo((props) => {
  const {
    className,
    value,
    onChange,
    placeholder,
    type = 'text',
    autoFocus,
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      inputRef.current?.focus();
    }
  }, [autoFocus]);

  const onBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const onFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <input
      ref={inputRef}
      value={value}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      className={classNames('h-14 md:h-[60px] lg:h-16 rounded-xl dark:bg-slate-900 outline-0 bg-search bg-no-repeat pl-16 dark:text-slate-100 text-slate-900 bg-[#CFE3FC]', {
        "border dark:border-sky-200 border-sky-800": isFocused
      }, [className])}
      style={{backgroundPosition: '24px'}}
      onFocus={onFocus}
      onBlur={onBlur}
      {...otherProps}
    />
  );
});

export default Input;
