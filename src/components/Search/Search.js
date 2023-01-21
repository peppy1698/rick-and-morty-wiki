import React from 'react';
import './Search.css';

const Search = ({ setPageNumber, setSearch }) => {
  return (
    <form className='d-flex flex-sm-row flex-column align-items-center justify-content-center mb-5 gap-4'>
      <input
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder='Search for Characters.....'
        type='text'
        className='input'
      />
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className='btn btn-primary fs-6'
      >
        Search
      </button>
    </form>
  );
};

export default Search;
