import { ICar } from '../../models/ICar'
import CarItem from '../CarItem/CarItem';
import cls from './CarList.module.scss';

interface CarListProps {
    cars: ICar[];
    setIsDeleteFormOpen: (isOpen: boolean) => void;
    setIsEditFormOpen: (isOpen: boolean) => void;
    setItemId:(id: number) => void;
    lastIndex: number;
}

const CarList = (props: CarListProps) => {

  const {
    cars, 
    setIsDeleteFormOpen, 
    setIsEditFormOpen,
    setItemId,
    lastIndex,
  } = props;

  const mainIndex = lastIndex - 9;

  return (
    <ul className={cls.list}>
      {cars.map((car, index) => 
        <CarItem 
          setItemId={setItemId}
          setIsDeleteFormOpen={setIsDeleteFormOpen}
          setIsEditFormOpen={setIsEditFormOpen}
          number={index + mainIndex}
          item={car} 
          key={car.id}
        />  
      )}
    </ul>
  )
}

export default CarList
