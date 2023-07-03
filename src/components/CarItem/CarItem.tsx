import { ICar } from '../../models/ICar'
import '../../styles/index.scss'
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
    <li className='carItem'>
      <p>{number}</p>
      <p>{car}</p>
      <p>{car_model}</p>
      <p>{car_vin}</p>
      <p>{car_color}</p>
      <p>{car_model_year}</p>
      <p>{price}</p>
      <p>{availability}</p>
      <Select title='Actions' options={options}/>
    </li>
    
  )
}

export default CarItem
