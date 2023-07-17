
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
   <div className="flex justify-center container mx-auto py-8">
        <h1 className="text-3xl font-semibold mb-4">Welcome to the Changing</h1>
       
        
      </div>

      <div className="flex justify-center container mx-auto py-8">
      <p className="text-lg">This is the content of the home page.</p>
       
        
      </div>
      
   {/* <div> <p>55555</p></div> */}

 

   {/* <div className="flex items-center">
   <h1 className="flex items-center justify-center w-full px-4 py-2 bg-blue-500 text-white text-4xl font-bold rounded-lg shadow-lg">
  Changing
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-8 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>
</h1>

</div>

<br/>
<div class="flex items-start justify-center h-screen">
          <div class="inline-flex rounded-md shadow-sm" role="group">
            <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
              Profile
            </button>
            <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
              Settings
            </button>
            <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
              Messages
            </button>
          </div>

         
    </div> */}
    {/* <DropdownSelect options={options} onChange={handleSelectChange} /> */}
    {/* <TrashIcon className="w-6 h-6 text-gray-800 dark:text-white" /> */}
    


  </div>
  
  
  
  )
}
