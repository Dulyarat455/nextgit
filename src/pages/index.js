
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
   
{/* <h2 class="text-4xl font-extrabold dark:text-white">Payments tool for companies</h2>
<p class="my-4 text-lg text-gray-500">Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.</p>
<p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
<a href="#" class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline">
Read more
<svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</a> */}

<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to my website</h1>
      <p className="text-lg">Enjoy your stay!</p>
    </div>

 

   
    


  </div>
  
  
  
  )
}
