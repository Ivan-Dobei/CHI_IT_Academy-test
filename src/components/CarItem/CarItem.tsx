import { ICar } from '../../models/ICar'
import '../../styles/index.scss'
import { classNames } from '../../utils/ClassNames/ClassNames';
import Select from '../Select/Select';
import cls from './CarItem.module.scss';

interface CarItemProps {
    item: ICar;
    number: number;
    setIsDeleteFormOpen: (isOpen: boolean) => void;
    setIsEditFormOpen: (isOpen: boolean) => void;
    setItemId: (id: number) => void;
}

const CarItem = (props: CarItemProps) => {

  const {
    item,
    number,
    setIsDeleteFormOpen,
    setIsEditFormOpen,
    setItemId,
  } = props;

  const { 
    id, 
    availability, 
    price,
    car,
    car_color,
    car_model,
    car_model_year,
    car_vin, 
  } = item;

  const openDeleteForm = () => {
    setIsDeleteFormOpen(true);
    setItemId(id);
  }

  const openEditForm = () => {
    setIsEditFormOpen(true);
    setItemId(id);
  }

  const options = [
    {value: 'edit', name: 'edit', action: openEditForm},
    {value: 'delete', name: 'delete', action: openDeleteForm},
  ];

  return (
    <li className={cls.item}>
      <div 
        className={classNames(cls.column, {}, [])}
        >
          <p className={cls.hiddenText}>№</p>
          <p>{number}</p>
        </div>
      <div
        className={classNames(cls.column, {}, [])} 
        >
          <p className={cls.hiddenText}>Company:</p>
          <p>{car}</p>
        </div>
      <div 
        className={classNames(cls.column, {}, [])} 
        >
          <p className={cls.hiddenText}>Model:</p>
          <p>{car_model}</p>
        </div>
      <div 
        className={classNames(cls.column, {}, [])} 
        >
          <p className={cls.hiddenText}>VIN:</p>
          <p>{car_vin}</p>
        </div>
      <div 
        className={classNames(cls.column, {}, [])}
        >
          <p className={cls.hiddenText}>Color:</p>
          {car_color}
        </div>
      <div 
        className={classNames(cls.column, {}, [])} 
        >
          <p className={cls.hiddenText}>Year:</p>
          <p>{car_model_year}</p>
        </div>
      <div 
        className={classNames(cls.column, {}, [])} 
        >
          <p className={cls.hiddenText}>Price:</p>
          <p>{price}</p>
        </div>
      <div 
        className={classNames(cls.column, {}, [])}
        >
          <p className={cls.hiddenText}>Available:</p>
          <p>{availability ? 'yes' : 'no'}</p>
          </div>
      <Select className={cls.column} title='Actions' options={options}/>
    </li>
    
  )
}

export default CarItem
