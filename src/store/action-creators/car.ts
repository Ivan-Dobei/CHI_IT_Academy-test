import axios from "axios"
import { AppDispatch } from "..";
import { ICar } from "../../models/ICar";
import { CarsActionEnum } from "../reducers/CarReducer/types"

export const fetchCars = () => {
   return async (dispatch: AppDispatch) => {
      try {
         const json = localStorage.getItem('cars');
         if (json && json !== '') {
            const cars = JSON.parse(json);
            dispatch({type: CarsActionEnum.FETCH_CARS_SUCCESS, payload: cars});
         } else {
            dispatch({ type: CarsActionEnum.FETCH_CARS });
            const response = await axios.get('https://myfakeapi.com/api/cars/');
            dispatch({type: CarsActionEnum.FETCH_CARS_SUCCESS, payload: response.data.cars});
            localStorage.setItem('cars', JSON.stringify(response.data.cars));
         }
      
      } catch (e) {
         dispatch({type: CarsActionEnum.FETCH_CARS_ERROR, payload: 'Error'});
      }
   }
}

export const deleteCarById = (id: number) => {
   return async (dispatch: AppDispatch) => {
      const json = localStorage.getItem('cars');
      if (json != null) {
         const cars = JSON.parse(json) as ICar[];
         const newCars = cars.filter(car => car.id !== id);
         dispatch({type: CarsActionEnum.SET_CARS, payload: newCars});
         localStorage.setItem('cars', JSON.stringify(newCars));
      }
   }
}