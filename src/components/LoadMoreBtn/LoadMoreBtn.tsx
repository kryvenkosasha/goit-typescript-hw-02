import React from "react";

interface LoadMoreBtnProps {
  onSearchPage: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onSearchPage }) => {
  return (
    <button className="search-button" onClick={onSearchPage} type="submit">
      Load more
    </button>
  );
};

export default LoadMoreBtn;
