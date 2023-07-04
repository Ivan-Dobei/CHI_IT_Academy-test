import cls from './Select.module.scss';
import { IOption } from '../../models/IOption';
import { classNames } from '../../utils/ClassNames/ClassNames';

interface SelectProps {
    title: string;
    options: IOption[];
    className?: string;
}

const Select = (props: SelectProps) => {

    const {
        title,
        options,
        className,
    } = props;

  return (
    <div className={classNames(cls.container, {}, [className])}>
        <h3 className={cls.title}>{title}</h3>
        <ul className={cls.dropDown}>
            {options.map(option =>
                <li className={cls.item} key={option.value}> 
                    <button
                        className={cls.btn} 
                        onClick={option.action}
                        >
                            {option.name}
                        </button>
                </li>        
            )}
        </ul>
    </div>
  )
}

export default Select
