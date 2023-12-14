import React from "react";

const Footer = ({ currentPage, onPageChange }) => {
  const prevPage = () => {
    onPageChange(currentPage - 1);
  };

  const nextPage = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <footer className="footer">
      <button
        onClick={prevPage}
        className="previous-btn"
        disabled={currentPage === 1}
      >
        &laquo; Previous
      </button>
      <p>Page {currentPage}</p>

      <button onClick={nextPage} className="next-btn">
        Next &raquo;
      </button>
    </footer>
  );
};

export default Footer;
