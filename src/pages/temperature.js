import React,{useState} from "react";
import Nabar from "../../component/Navbar";
import DropdownSelect from "../../component/Dropdown";

export default function Temperature() {

  const [selectedIn, setSelectedIn] = useState(0);
  const [selectedOut, setSelectedOut] = useState(0);
  const [resultTemp, setResultTemp] = useState(0);
  const [inputTemp,setInputTemp] = useState(0);
  const[wran,setWarn] = useState(false)
  const[warnOp, setWarnOp] = useState(true)
  const[warnInput, setWarnInput] = useState(true)


  const options = [
    { value: 0 , label:  ' °?' },
    { value: 1 , label:  ' °C' },
    { value: 2 , label: '°F' },
    { value: 3 , label: '°R' },
    { value: 4 , label: '°k' },
    
    

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
    console.log("inputTemp = ",inputTemp)
    if((selectedIn !== 0 && selectedOut !== 0) && inputTemp){
     setWarn(true)
     setWarnOp(true)
      setWarnInput(true)
     if(selectedIn === selectedOut){
      setResultTemp(inputTemp)

     }
     else if(selectedIn === 1 && selectedOut === 2){

      setResultTemp((inputTemp*9/5)+32)
     }
     else if(selectedIn === 2 && selectedOut === 1){
      setResultTemp((inputTemp-32)*9/5)
     }
     else if(selectedIn === 1 && selectedOut === 3){
      setResultTemp((inputTemp*4/5))
     }
     else if(selectedIn === 3 && selectedOut === 1){
      setResultTemp((inputTemp*5/4))
     }
     else if(selectedIn === 1 && selectedOut === 4){
      setResultTemp((inputTemp+273))
     }
     else if(selectedIn === 4 && selectedOut === 1){
      setResultTemp((inputTemp-273))
     }
     else if(selectedIn === 2 && selectedOut === 3){
      setResultTemp((inputTemp-32)/9*4)
     }
     else if(selectedIn === 3 && selectedOut === 2){
      setResultTemp((inputTemp*9/4)+32)
     }
     else if(selectedIn === 2 && selectedOut === 4){
      setResultTemp(((inputTemp-32)/9*5)+273)
     }
     else if(selectedIn === 4 && selectedOut === 2){
      setResultTemp(((inputTemp-273)/5*9)+32)
     }
     else if(selectedIn === 3 && selectedOut === 4){
      setResultTemp((inputTemp/4*5)+273)
     }
     else if(selectedIn === 4 && selectedOut === 3){
      setResultTemp((inputTemp-273)/5*4)
     }


    }
    
   
    else if((selectedIn === 0 && selectedOut === 0) && (!inputTemp)){
      console.log("case 1")
      setWarn(false)
      setWarnInput(true)
      setWarnOp(true)
      setResultTemp(0)
    }
    else if((selectedIn === 0 && selectedOut === 0)||(selectedIn  && selectedOut === 0)||(selectedIn === 0 && selectedOut)){
      console.log("case 2")
      setWarnOp(false)
      setWarn(true)
      setWarnInput(true)
      setResultTemp(0)
    }
    else {
      console.log("case 3")
      setWarnOp(true)
      setWarn(true)
      setWarnInput(false)
      setResultTemp(0)
    }


    console.log("resultTemp = ",resultTemp)
    
   
    
    
    
  };


return(

<div>

<Nabar/>
<br/>
<div class="flex justify-center">
  <div class="bg-blue-500 w-21 px-1 py-1 border-2 border-black-500 rounded flex items-center">
    <h1 class="text-white ml-1">Temperature</h1>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 35 20" strokeWidth="2.0" stroke="currentColor" class="w-8 h-8 ml-1">
      <path stroke-linecap="round" strokeLinejoin="round" d="M1 7h5m4 0h5m4 0h5M3 12h6m4 0h6m-16 4h5m4 0h5m4 0h5" />
    </svg>
  </div>


</div>

<br/>
      <div class="flex justify-center">
        <h1 className="text-blue-400 mr-1">Input : </h1>
      <input type="number" className="border-2 border-black-500 rounded" onChange={(e)=>(setInputTemp(parseFloat(e.target.value)))}/>

      </div>
      
      <br/>

      <div class="flex justify-center">
      <DropdownSelect options={options} onChange={handleSelectChangeIn} />
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6 ml-2 mr-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
      <DropdownSelect options={options} onChange={handleSelectChangeOut} />

      </div>
      <br/>
      <div class="flex justify-center">
        
      <button  type='button' className='bg-blue-500 text-white  border-2 m-2 p-2 border-black-500 rounded-lg'onClick={()=>Calculate()} >Change</button>
      {resultTemp !== 0 && (<h1 className="text-blue-400 py-4">result : {resultTemp}</h1>)}
      {wran === false && (<h1 className="text-red-400 py-4">Please select all options and add data in tag input.</h1>)}
      {warnInput === false && (<h1 className="text-red-400 py-4">Please  add data in tag input.</h1>)}
      {warnOp === false && (<h1 className="text-red-400 py-4">Please  select all options.</h1>)}
     
    
      </div>
      <br/>
      




</div>


)


}