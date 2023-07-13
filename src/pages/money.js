
import React,{useState} from "react";
import Nabar from "../../component/Navbar";
import DropdownSelect from "../../component/Dropdown";


export default function Money() {
  const [selectedIn, setSelectedIn] = useState(0);
  const [selectedOut, setSelectedOut] = useState(0);
  const [resultMoney, setResultMoney] = useState(0);
  const [inputMoney,setInputMoney] = useState(0);


  const options = [
    { value: 34.64 , label: 'USD-ดอลลาร์สหรัฐ-สหรัฐอเมริกา' },
    { value: 43.8888, label: 'GBP-ปอนด์สเตอร์ลิง-สหราชอาณาจักร'},
    { value: 1, label: 'THB-บาท-ไทย' },
  ];
  
    const handleSelectChangeIn = (event) => {
      console.log('Selected value:', event.target.value);
      setSelectedIn(parseFloat(event.target.value))
      
    };
    const handleSelectChangeOut = (event) => {
      console.log('Selected value:', event.target.value);
      setSelectedOut(parseFloat(event.target.value))
      
    };
    const Calculate  = () => {
      console.log("selectedIn = ",selectedIn)
      console.log("selectedOut = ",selectedOut)
      if(selectedIn !== 0 && selectedOut !== 0){

        setResultMoney(selectedIn/selectedOut)
      }
      console.log("resultMoney = ",resultMoney)
      
    };


return(

<div>
          <Nabar/>
          <br/>
          <div class="flex justify-center">
        <div class="bg-blue-500 w-21 px-1 py-1 border-2 border-black-500 rounded flex items-center">
          <h1 class="text-white ml-1">Money</h1>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 35 20" stroke-width="2.0" stroke="currentColor" class="w-8 h-8 ml-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        

      </div>
      <br/>
      <div class="flex justify-center">
        <h1 className="text-blue-400 mr-1">Input : </h1>
      <input type="number" className="border-2 border-black-500 rounded"/>

      </div>
      <br/>

      <div class="flex justify-center">
      <DropdownSelect options={options} onChange={handleSelectChangeIn} />
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-2 mr-2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
      <DropdownSelect options={options} onChange={handleSelectChangeOut} />

      </div>
      <br/>
      <div class="flex justify-center">
        
      <button  type='button' className='bg-blue-500 text-white  border-2 m-2 p-2 border-black-500 rounded-lg'onClick={()=>Calculate()} >Change</button>
      </div>
      <br/>

      <div class="flex justify-center">
        
        {resultMoney !== 0 && (<h1 className="text-blue-400">result : {resultMoney}</h1>)
}      
      </div>
</div>



)


}
