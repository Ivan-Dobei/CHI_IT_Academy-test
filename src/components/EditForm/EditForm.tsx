import {ChangeEvent, useState} from 'react';
import cls from './EditForm.module.scss';
import { ICar } from '../../models/ICar';

interface EditFormProps {
    isDisabled: boolean;
    editCar: ICar;
}

const EditForm = (props: EditFormProps) => {

  const {
    isDisabled, 
    editCar, 
  } = props;

  console.log(editCar.car_color);

  const [carCompany, setCarCompany] = useState(editCar.car);
  const [carModel, setCarModel] = useState(editCar.car_model);
  const [carVin, setCarVin] = useState(editCar.car_vin);
  const [carYear, setCarYear] = useState(editCar.car_model_year);
  const [carColor, setCarColor] = useState(editCar.car_color);
  const [carPrice, setCarPrice] = useState(editCar.price);
  const [carAvailability, setcarAvailability] = useState(editCar.availability);

  console.log(carColor);
  

  const onChanceCarCompany = (e: ChangeEvent<HTMLInputElement>) => {
    setCarCompany(e.target.value);
  }

  const onChanceCarModel = (e: ChangeEvent<HTMLInputElement>) => {
    setCarModel(e.target.value);
  }

  const onChanceCarVin = (e: ChangeEvent<HTMLInputElement>) => {
    setCarVin(e.target.value);
  }

  const onChanceCarYear = (e: ChangeEvent<HTMLInputElement>) => {
    const year = parseInt(e.target.value);
    setCarYear(year);
  }

  const onChanceCarColor = (e: ChangeEvent<HTMLInputElement>) => {
    setCarColor(e.target.value);
  }

  const onChanceCarPrice = (e: ChangeEvent<HTMLInputElement>) => {
    const price = parseInt(e.target.value);
    setCarPrice(price);
  }

  const onChanceCarAvailability = (e: ChangeEvent<HTMLInputElement>) => {
    const availability = e.target.value == "true";
    setcarAvailability(availability);
  }

  return (
    <form className={cls.form}>
      <label className={cls.formItem}>
        <span className={cls.itemText}>Enter car company:</span>
        <input 
          type="text" 
          value={carCompany}
          onChange={onChanceCarCompany}
          className={cls.input}
          disabled={isDisabled}
        />
      </label>
      <label className={cls.formItem}>
        <span className={cls.itemText}>Enter car model:</span>
        <input 
          type="text" 
          value={carModel}
          onChange={onChanceCarModel}
          className={cls.input}
          disabled={isDisabled}
        />
      </label>
      <label className={cls.formItem}>
        <span className={cls.itemText}>Enter VIN:</span>
        <input 
          type="text" 
          value={carVin}
          onChange={onChanceCarVin}
          className={cls.input}
          disabled={isDisabled}
        />
      </label>
      <label className={cls.formItem}>
        <span className={cls.itemText}>Enter car color:</span>
        <input 
          type="text" 
          value={carYear}
          onChange={onChanceCarYear}
          className={cls.input}
          disabled={isDisabled}
        />
      </label>
      <label className={cls.formItem}>
        <span className={cls.itemText}>Enter car model year:</span>
        <input 
          type="text" 
          value={carColor}
          onChange={onChanceCarColor}
          className={cls.input} 
        />
      </label>
      <label className={cls.formItem}>
        <span className={cls.itemText}>Enter car price:</span>
        <input 
          type="text"
          value={carPrice}
          onChange={onChanceCarPrice}
          className={cls.input}
        />
      </label>
      <label className={cls.formItem}>
        <span className={cls.itemText}>Enter car availability:</span>
        <input 
          type="checkbox" 
          checked={carAvailability}
          onChange={onChanceCarAvailability}
          className={cls.input}  
        />
      </label>
    </form>
  )
}

export default EditForm
