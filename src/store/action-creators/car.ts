import axios from "axios"
import { AppDispatch } from "..";
import { CarsActionEnum } from "../reducers/CarReducer/types"

export const fetchCars = () => {
   return async (dispatch: AppDispatch) => {
      try{
         dispatch({ type: CarsActionEnum.FETCH_CARS });
         const response = await axios.get('https://myfakeapi.com/api/cars/');
         dispatch({type: CarsActionEnum.FETCH_CARS_SUCCESS, payload: response.data.cars})
      
      } catch (e) {
         dispatch({type: CarsActionEnum.FETCH_CARS_ERROR, payload: 'Error'});
      }
   }
}