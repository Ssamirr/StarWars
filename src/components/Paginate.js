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
            pageRangeDisplayed={5}
            pageCount={9}
            previousLabel="←"
            renderOnZeroPageCount={null}
            containerClassName="pagination-ul"
        />
    );
}
export default Paginate