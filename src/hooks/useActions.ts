import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import * as CarActionCreators from '../store/action-creators/car';

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(CarActionCreators, dispatch);
}