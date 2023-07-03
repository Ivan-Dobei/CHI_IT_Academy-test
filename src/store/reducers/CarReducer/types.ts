import { ICar } from "../../../models/ICar";

export interface CarState {
    cars: ICar[];
    isLoading: boolean;
    error: string | null;
}

export enum CarsActionEnum {
    FETCH_CARS = 'FETCH_CARS',
    FETCH_CARS_SUCCESS = 'FETCH_CARS_SUCCESS',
    FETCH_CARS_ERROR = 'FETCH_CARS_ERROR',
    SET_CARS = 'SET_CARS',
}

interface FetchCarsAction {
    type: CarsActionEnum.FETCH_CARS;
}

interface FetchCarsSuccessAction {
    type: CarsActionEnum.FETCH_CARS_SUCCESS;
    payload: ICar[];
}

interface FetchCarsErrorAction {
    type: CarsActionEnum.FETCH_CARS_ERROR;
    payload: string;
}

interface  SetCarsAction {
    type: CarsActionEnum.SET_CARS;
    payload: ICar[];
}

export type ActionState = 
    FetchCarsAction |
    FetchCarsSuccessAction |
    FetchCarsErrorAction |
    SetCarsAction;