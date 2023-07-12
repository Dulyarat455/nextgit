import Image from 'next/image'
import { Inter } from 'next/font/google'

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
    {/* <DropdownSelect options={options} onChange={handleSelectChange} /> */}
    {/* <TrashIcon className="w-6 h-6 text-gray-800 dark:text-white" /> */}
    


  </div>
  
  
  
  )
}
