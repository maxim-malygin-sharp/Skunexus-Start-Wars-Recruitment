import { useDispatch, useSelector } from "react-redux";
import {
  getTotalCount,
  getRowsPerPage,
  setCurrentPage,
} from "../../store/planetsReducer/planetsReducer";

import "./Pagination.css";

const Pagination = ({ currentPage }) => {
  const dispatch = useDispatch();
  const totalCount = useSelector(getTotalCount);
  const rowsPerPage = useSelector(getRowsPerPage);

  const firstPage = () => dispatch(setCurrentPage(1));
  const nextPage = () => dispatch(setCurrentPage(currentPage + 1));
  const prevPage = () => dispatch(setCurrentPage(currentPage - 1));
  const lastPage = () =>
    dispatch(setCurrentPage(Math.ceil(totalCount / rowsPerPage)));
  const isDisabledLeft = currentPage === 1;
  const isDisabledRight = (currentPage + 1) * rowsPerPage > totalCount;
  return (
    <>
      <button
        className="pagination-btn"
        disabled={isDisabledLeft}
        onClick={firstPage}
      >
        &lt;&lt;
      </button>
      <button
        className="pagination-btn"
        disabled={isDisabledLeft}
        onClick={prevPage}
      >
        &lt;
      </button>
      <button
        className="pagination-btn"
        disabled={isDisabledRight}
        onClick={nextPage}
      >
        &gt;
      </button>
      <button
        className="pagination-btn"
        disabled={isDisabledRight}
        onClick={lastPage}
      >
        &gt;&gt;
      </button>
    </>
  );
};

export default Pagination;
