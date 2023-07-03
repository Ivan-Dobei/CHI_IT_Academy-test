import { ICar } from '../../models/ICar'
import CarItem from '../CarItem/CarItem';

interface CarListProps {
    cars: ICar[];
    setIsDeleteFormOpen: (isOpen: boolean) => void;
    setIsEditFormOpen: (isOpen: boolean) => void;
    setItemId:(id: number) => void;
}

const CarList = (props: CarListProps) => {

  const {
    cars, 
    setIsDeleteFormOpen, 
    setIsEditFormOpen,
    setItemId,
  } = props;

  return (
    <ul>
      {cars.map((car, index) => 
        <CarItem 
          setItemId={setItemId}
          setIsDeleteFormOpen={setIsDeleteFormOpen}
          setIsEditFormOpen={setIsEditFormOpen}
          number={index + 1}
          item={car} 
          key={car.id}
        />  
      )}
    </ul>
  )
}

export default CarList
