
import React from "react";

import DropdownSelect from '../../component/Dropdown'
import Nabar from '../../component/Navbar';
// import { TrashIcon } from '@heroicons/react/solid';
// import { PencilIcon } from '@heroicons/react/outline';




const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

  const handleSelectChange = (selectedValue) => {
    console.log('Selected value:', selectedValue);
    // Perform any other logic based on the selected value
  };

export default function Home() {
  let x
  return (
    <div>
      

   <Nabar/>
   <br/>
   

 

   <div className="flex flex-col items-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to my website</h1>
      <p className="text-lg">Enjoy your stay!</p>
    </div>
    


  </div>
  
  
  
  )
}
