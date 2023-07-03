import { ChangeEvent, useEffect, useState } from 'react';
import { useActions } from './hooks/useActions';
import { useAppSelector } from './hooks/useAppSelector';
import CarList from './components/CarList/CarList';
import Pagination from './components/Pagination/Pagination';
import Modal from './components/Modal/Modal';
import CreateForm from './components/CreateForm/CreateForm';
import DeleteForm from './components/DeleteForm/DeleteForm';
import EditForm from './components/EditForm/EditForm';
import { findCarById } from './utils/FindCarById';

function App() {

  const {cars, isLoading} = useAppSelector(state => state.car);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [carPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCreateFormOpen, setIsCreateFormOpen] = useState(false);
  const [isDeleteFormOpen, setIsDeleteFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [itemId, setItemId] = useState(0);
  const [editCar, setEditCar] = useState(findCarById(itemId));

  const lastIndex = currentPageNumber * carPerPage;
  const firsIndex = lastIndex - carPerPage;
  const SearchedCars = cars.filter(car => car.car.toLowerCase().includes(searchQuery.toLowerCase()));
  const currentCars = SearchedCars.slice(firsIndex, lastIndex);

  const {fetchCars} = useActions();

  const paginate = (pageNumber: number) => {
    setCurrentPageNumber(pageNumber);
  }

  const onChangeSearchQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPageNumber(1);
  }
  
  const onCloseModal = () => {
    setIsCreateFormOpen(false);
    setIsDeleteFormOpen(false);
    setIsEditFormOpen(false);
  }

  const onOpenCreateForm = () => {
    setIsCreateFormOpen(true);
  }

  useEffect(() => {
    fetchCars();  
  }, [])

  useEffect(() => {
    setEditCar(findCarById(itemId));
    console.log(itemId);
    
  }, [itemId]);

  if(isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <div className="App">
      <input 
        type="text"
        placeholder='Search...'
        value={searchQuery}
        onChange={onChangeSearchQuery}
       />
      <button onClick={onOpenCreateForm}>Create</button> 
      <CarList 
        cars={currentCars} 
        setIsDeleteFormOpen={setIsDeleteFormOpen}
        setIsEditFormOpen={setIsEditFormOpen}
        setItemId={setItemId}
      />

      <Pagination 
        totalItems={SearchedCars.length} 
        itemsPerPage={carPerPage}
        paginate={paginate}
        currentPage={currentPageNumber}
      />

      <Modal 
        isOpen={isCreateFormOpen} 
        onClose={onCloseModal}
        >
          <CreateForm/>
      </Modal>
      <Modal 
        isOpen={isDeleteFormOpen} 
        onClose={onCloseModal}
        >
          <DeleteForm 
            onCancelForm={onCloseModal}
            itemId={itemId}
            />
      </Modal>
      <Modal 
        isOpen={isEditFormOpen} 
        onClose={onCloseModal}
        >
          {editCar 
            ?
            <EditForm 
              isDisabled={false} 
              editCar={editCar}
            /> 
            :
            <h2>Car is not found</h2>}
      </Modal>
    </div>
  );
}

export default App;
