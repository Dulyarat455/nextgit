

import Nabar from "../../component/Navbar";
import DropdownSelect from "../../component/Dropdown";
import React,{useState} from "react";

export default function Physics() {
  const [selectedIn, setSelectedIn] = useState(0);
  const [selectedOut, setSelectedOut] = useState(0);
  const [resultTemp, setResultTemp] = useState(0);
  const [inputTemp,setInputTemp] = useState(0);
  const[wran,setWarn] = useState(false)
  const[warnOp, setWarnOp] = useState(true)
  const[warnInput, setWarnInput] = useState(true)


  const options = [
    { value: 0 , label: 'choose unit' },
    { value: 1 , label: 'normal(SI)' },
    { value: 1000000000000, label: 'tera' },
    { value: 1000000000, label: 'giga' },
    { value: 1000000 , label: 'mega' },
    { value: 1000 , label: 'kilo' },
    { value: 100 , label: 'hecto' },
    { value: 10 , label: 'deca' },
    { value: 0.1 , label: 'deci' },
    { value: 0.01 , label: 'centi' },
    { value: 0.001 , label: 'milli' },
    { value: 0.000001, label: 'micro' },
    { value: 0.000000001 , label: 'nano' },
    { value: 0.000000000001 , label: 'pico' },
    
    
    

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
      if((selectedIn !== 0 && selectedOut !== 0) && inputTemp){
        setWarn(true)
        setWarnOp(true)
         setWarnInput(true)
        if(selectedIn === selectedOut){
         setResultTemp(inputTemp)
   
        }
        else{
          setResultTemp(inputTemp*parseFloat(selectedIn)/parseFloat(selectedOut))

        }
     }
     else if((selectedIn === 0 && selectedOut === 0) && (!inputTemp)){
      console.log("case 1")
      setWarn(false)
      setWarnInput(true)
      setWarnOp(true)
      setResultTemp(0)
    }
    else if((selectedIn === 0 && selectedOut === 0)||(selectedIn  && selectedOut === 0)||(selectedIn === 0 && selectedOut) ){
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
     
  }



return(
<div>
<Nabar/>

<br/>
    <div className="flex justify-center">
  <div className="bg-blue-500 w-21 px-1 py-1 border-2 border-black-500 rounded flex items-center">
    <h1 className="text-white ml-1">Physics</h1>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 35 20" strokeWidth="2.0" stroke="currentColor" className="w-8 h-8 ml-1">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  </div>
</div>
<br/>
<div class="flex justify-center">
        <h1 className="text-blue-400 mr-1">Input : </h1>
      <input  type="number" className="border-2 border-black-500 rounded" onChange={(e)=>(setInputTemp(parseFloat(e.target.value)))}/>
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







</div>





)


}