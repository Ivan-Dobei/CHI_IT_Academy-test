import { useEffect, useState } from 'react';
import { useActions } from './hooks/useActions';
import { useAppSelector } from './hooks/useAppSelector';
import CarList from './components/CarList/CarList';
import Pagination from './components/Pagination/Pagination';

function App() {

  const {fetchCars} = useActions();
  const {cars, isLoading} = useAppSelector(state => state.car);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [carPerPage] = useState(10);
  const lastIndex = currentPageNumber * carPerPage;
  const firsIndex = lastIndex - carPerPage;
  const currentCars = cars.slice(firsIndex, lastIndex);

  useEffect(() => {
    fetchCars();
  }, [])

  if(isLoading) {
    return <h2>Loading...</h2>
  }

  const paginate = (pageNumber: number) => {
    setCurrentPageNumber(pageNumber);
  }

  return (
    <div className="App">
      <CarList cars={currentCars}/>
      <Pagination 
        totalItems={cars.length} 
        itemsPerPage={carPerPage}
        paginate={paginate}
        currentPage={currentPageNumber}
      />
    </div>
  );
}

export default App;
