import { ICar } from "../../models/ICar";

export const findCarById = (id: number) => {
    const json = localStorage.getItem('cars');
       if (json != null) {
         const cars = JSON.parse(json) as ICar[];
         const car = cars.find(car => car.id === id);
         return car;
       }
 }