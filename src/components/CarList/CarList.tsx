import { useAppSelector } from '../../hooks/useAppSelector';
import { ICar } from '../../models/ICar'
import CarItem from '../CarItem/CarItem';

interface CarListProps {
    cars: ICar[];
}

const CarList = ({cars}: CarListProps) => {

  return (
    <ul>
      {cars.map(car => 
        <CarItem item={car} key={car.id}/>  
      )}
    </ul>
  )
}

export default CarList
