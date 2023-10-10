import {
  FC, ButtonHTMLAttributes, memo, ReactNode,
} from 'react';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  square?: boolean,
  disabled?: boolean,
  children?: ReactNode,
  round?: boolean
  size?: "sm" | "md" | "lg"
}
export const Button: FC<ButtonProps> = memo((props: ButtonProps) => {
  const {
    className,
    children,
    square,
    disabled,
    round,
    size = "md",
    ...otherProps
  } = props;

  const mods: Record<string, string | boolean | undefined> = {
    "md:w-8 md:h-8 w-6 h-6": square && size === "md",
    "w-6 h-6": square && size === "sm",
    "md:rounded-xl rounded-lg": round
  };

  return (
    <button
      type="button"
      className={classNames('flex items-center justify-center', mods, [className])}
      disabled={disabled}
      {...otherProps}
    >
      { children }
    </button>
  );
});