import cls from './Pagination.module.scss';

interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    paginate: (pageNumber: number) => void;  
}

const Pagination = (props: PaginationProps) => {

    const {
        itemsPerPage, 
        totalItems, 
        currentPage, 
        paginate,
    } = props;

    let pageNumbers = [];
    const totalPages = totalItems / itemsPerPage;
    const firstInLine = currentPage - 4;
    const lastInLine = currentPage + 5;

    for(let i = 0; i <= totalPages; i++) {
       if(i <= totalPages) {
            pageNumbers.push(i);
       }
    }

    if (firstInLine <= 0) {
        pageNumbers = pageNumbers.slice(1, 11);
    } else if(lastInLine >= totalPages) {
        pageNumbers = pageNumbers.slice(totalPages - 9, totalPages + 1);
    } else {
        pageNumbers = pageNumbers.slice(currentPage - 4, currentPage + 6);
    }

  return (
    <ul className={cls.pagination}>
        {pageNumbers.map(pageNumber => 
            <li key={pageNumber} className={cls.paginationItem}>
                <button className={cls.btn} onClick={() => paginate(pageNumber)}>
                    {pageNumber}
                </button>
            </li>    
        )}
    </ul>
  )
}

export default Pagination
