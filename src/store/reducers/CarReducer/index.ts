import { ActionState, CarsActionEnum, CarState } from "./types"

const initialState: CarState = {
    cars: [],
    isLoading: false,
    error: null,
}

export const CarReducer = (state = initialState, action: ActionState): CarState => {
    switch(action.type) {

        case CarsActionEnum.FETCH_CARS:
            return {...state, isLoading: true};

        case CarsActionEnum.FETCH_CARS_SUCCESS:
            return {...state, isLoading: false, cars: action.payload};

        case CarsActionEnum.FETCH_CARS_ERROR:
            return {...state, isLoading: false, error: action.payload};

        default:
            return state;
    }
}