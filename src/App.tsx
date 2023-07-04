import { useEffect, useState } from 'react';
import { useActions } from './hooks/useActions';
import { useAppSelector } from './hooks/useAppSelector';
import Modal from './components/Modal/Modal';
import CreateForm from './components/CreateForm/CreateForm';
import DeleteForm from './components/DeleteForm/DeleteForm';
import EditForm from './components/EditForm/EditForm';
import CarTable from './components/CarTable/CarTable';

function App() {

  const {isLoading, error} = useAppSelector(state => state.car);

  const [isCreateFormOpen, setIsCreateFormOpen] = useState(false);
  const [isDeleteFormOpen, setIsDeleteFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [itemId, setItemId] = useState(0);

  const {fetchCars} = useActions();

  
  const onCloseModal = () => {
    setIsCreateFormOpen(false);
    setIsDeleteFormOpen(false);
    setIsEditFormOpen(false);
  }

  useEffect(() => {
    fetchCars();  
  }, [])

  if(isLoading) {
    return <h2 className='loading'>Loading...</h2>
  }

  if(error) {
    return <h2 className='error'>{error}</h2>
  }

  return (
    <div className="App">
      
      <CarTable
        setIsCreateFormOpen={setIsCreateFormOpen}
        setIsDeleteFormOpen={setIsDeleteFormOpen}
        setIsEditFormOpen={setIsEditFormOpen}
        setItemId={setItemId}
      />
      <Modal 
        isOpen={isCreateFormOpen} 
        onClose={onCloseModal}
        title="Create form"
        >
          <CreateForm 
            isOpen={isCreateFormOpen} 
            onClose={onCloseModal}
            
          />
      </Modal>
      <Modal 
        isOpen={isDeleteFormOpen} 
        onClose={onCloseModal}
        title='Delete car'
        >
          <DeleteForm 
            onCancelForm={onCloseModal}
            itemId={itemId}
            />
      </Modal>
      <Modal 
        isOpen={isEditFormOpen} 
        onClose={onCloseModal}
        title="Edit Form"
        >
          <EditForm 
            carId={itemId}
            isOpen={isEditFormOpen}
            onClose={onCloseModal}
          /> 
      </Modal>
    </div>
  );
}

export default App;
