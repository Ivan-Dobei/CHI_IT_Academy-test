import { ReactNode } from 'react';
import { classNames } from '../../utils/ClassNames/ClassNames';
import cls from './Button.module.scss'

interface ButtonProps {
    className?: string;
    children: ReactNode;
}

const Button = (props: ButtonProps) => {

    const {
        children,
        className, 
        ...otherProps
    } = props;

  return (
    <button {...otherProps} className={classNames(cls.btn, {}, [className])}>
      {children}
    </button>
  )
}

export default Button
