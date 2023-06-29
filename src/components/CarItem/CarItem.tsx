import { ICar } from '../../models/ICar'
import '../../styles/index.css'

interface CarItemProps {
    item: ICar;
}

const CarItem = ({ item }: CarItemProps) => {

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

  return (
    <li className='carItem'>
      <p>{id}</p>
      <p>{car}</p>
      <p>{car_model}</p>
      <p>{car_vin}</p>
      <p>{car_color}</p>
      <p>{car_model_year}</p>
      <p>{price}</p>
      <p>{availability}</p>
    </li>
  )
}

export default CarItem
