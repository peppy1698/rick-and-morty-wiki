import React from 'react';
import Gender from './Category/Gender';
import Species from './Category/Species';
import Status from './Category/Status';

const Filters = ({ setStatus, setGender, setSpecies, setPageNumber }) => {
  let clear = () => {
    setStatus('');
    setGender('');
    setSpecies('');
    setPageNumber('');
    window.location.reload(false);
  };
  return (
    <div className='col-lg-3 col-12 mb-5'>
      <div className='text-center fw-bold fs-4 mb-3 '>Filter</div>
      <div
        onClick={clear}
        style={{ cursor: 'pointer' }}
        className='text-center  text-primary text-decoration-underline'
      >
        Clear Filters
      </div>

      <div className='accordion my-3' id='accordionExample'>
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
        <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
        <Gender setPageNumber={setPageNumber} setGender={setGender} />
      </div>
    </div>
  );
};

export default Filters;
