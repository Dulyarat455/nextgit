import { useState } from 'react';

const DropdownSelect = ({ options, onChange }) => {
 

    return (
      <select onChange={onChange} className='border-2 border-green-500 rounded'>
        {options.map((option, index) => (
          <option key={index} value={option.value} >
            {option.label}
          </option>
        ))}
      </select>
    );
  };
  


export default DropdownSelect;
