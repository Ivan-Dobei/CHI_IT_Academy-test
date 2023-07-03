import cls from './Select.module.scss';
import { IOption } from '../../models/IOption';

interface SelectProps {
    title: string;
    options: IOption[];
}

const Select = (props: SelectProps) => {

    const {
        title,
        options,
    } = props;

  return (
    <div className={cls.container}>
        <h3 className={cls.title}>{title}</h3>
        <ul className={cls.list}>
            {options.map(option =>
                <li key={option.value}> 
                    <button onClick={option.action}>{option.name}</button>
                </li>        
            )}
        </ul>
    </div>
  )
}

export default Select
