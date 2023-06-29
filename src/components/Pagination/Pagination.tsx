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

    for(let i = 0; i <= totalPages; i++) {
       if(i <= totalPages) {
            pageNumbers.push(i);
            console.log(i);
            
       }
    }

    const firstInLine = currentPage - 7;
    const lastInLine = currentPage + 7;

    if (firstInLine <= 0) {
        pageNumbers = pageNumbers.slice(1, 16);
    } else if(lastInLine >= totalPages) {
        pageNumbers = pageNumbers.slice(totalPages - 14, totalPages + 1);
    } else {
        pageNumbers = pageNumbers.slice(currentPage - 7, currentPage + 8);
    }

  return (
    <ul className='pagination'>
        {pageNumbers.map(pageNumber => 
            <li key={pageNumber} className='paginationItem'>
                <button onClick={() => paginate(pageNumber)}>
                    {pageNumber}
                </button>
            </li>    
        )}
    </ul>
  )
}

export default Pagination
