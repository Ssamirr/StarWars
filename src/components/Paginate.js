import { useContext } from "react";
import ReactPaginate from "react-paginate";
import { mainContext } from "../context/MainContext";

function Paginate() {
    const { setItemOffset } = useContext(mainContext);

    const handlePageClick = (event) => {
        setItemOffset(event.selected + 1);
    };

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="→"
            onPageChange={handlePageClick}
            pageCount={9}
            previousLabel="←"
            renderOnZeroPageCount={null}
            containerClassName="pagination-ul"
            activeClassName="active-ul-a"
            disabledClassName="disabled-li"
            marginPagesDisplayed={2}
        />
    );
}
export default Paginate