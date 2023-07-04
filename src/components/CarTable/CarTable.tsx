import { ChangeEvent, useState } from 'react'
import { useAppSelector } from '../../hooks/useAppSelector';
import CarList from '../CarList/CarList';
import Pagination from '../Pagination/Pagination';
import cls from './CarTable.module.scss';

interface CarTableProps {
    setIsEditFormOpen: (isOpen: boolean) => void;
    setIsDeleteFormOpen: (isOpen: boolean) => void;
    setIsCreateFormOpen: (isOpen: boolean) => void;
    setItemId: (id: number) => void;
}

const CarTable = (props: CarTableProps) => {

    const {
        setIsCreateFormOpen,
        setIsDeleteFormOpen, 
        setIsEditFormOpen,
        setItemId
    } = props;

    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const [carPerPage] = useState(10);
    const [searchQuery, setSearchQuery] = useState('');

    const {cars} = useAppSelector(state => state.car);

    const lastIndex = currentPageNumber * carPerPage;
    const firsIndex = lastIndex - carPerPage;
    const SearchedCars = cars.filter(car => car.car.toLowerCase().includes(searchQuery.toLowerCase()));
    const currentCars = SearchedCars.slice(firsIndex, lastIndex);

    const paginate = (pageNumber: number) => {
        setCurrentPageNumber(pageNumber);
    }
    
    const onChangeSearchQuery = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setCurrentPageNumber(1);
    }
      
    const onOpenCreateForm = () => {
        setIsCreateFormOpen(true);
    }

    return (
        <div className={cls.table}>
            <header className={cls.header}>
                <div className={cls.contentTop}>
                    <input 
                        type="text"
                        placeholder='Search...'
                        value={searchQuery}
                        onChange={onChangeSearchQuery}
                        className={cls.input}
                    />
                    <button className={cls.btn} onClick={onOpenCreateForm}>Create</button> 
                </div>
                <div className={cls.contentBottom}>
                    <p className={cls.text}>№</p>
                    <p className={cls.text}>Company</p>
                    <p className={cls.text}>Model</p>
                    <p className={cls.text}>VIN</p>
                    <p className={cls.text}>Color</p>
                    <p className={cls.text}>Year</p>
                    <p className={cls.text}>Price</p>
                    <p className={cls.text}>Available</p>
                </div>
            </header>
            {currentCars.length != 0 ?
                <CarList 
                    cars={currentCars} 
                    setIsDeleteFormOpen={setIsDeleteFormOpen}
                    setIsEditFormOpen={setIsEditFormOpen}
                    setItemId={setItemId}
                    lastIndex={lastIndex}
                />
                :
                <h2 className={cls.notFoundTitle}>Car not found</h2>
            }

            <footer>
                <Pagination 
                    totalItems={SearchedCars.length} 
                    itemsPerPage={carPerPage}
                    paginate={paginate}
                    currentPage={currentPageNumber}
                />
            </footer>
        </div>
    )
}

export default CarTable
