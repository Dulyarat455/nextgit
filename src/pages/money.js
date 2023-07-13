
import React,{useState} from "react";
import Nabar from "../../component/Navbar";
import DropdownSelect from "../../component/Dropdown";


export default function Money() {
  const [selectedIn, setSelectedIn] = useState(0);
  const [selectedOut, setSelectedOut] = useState(0);
  const [resultMoney, setResultMoney] = useState(0);
  const [inputMoney,setInputMoney] = useState(0);
  const[wran,setWarn] = useState(false)


  const options = [
    { value: 0 , label: 'Choose' },
    { value: 34.64 , label: 'USD-ดอลลาร์สหรัฐ-สหรัฐอเมริกา' },
    { value: 43.8888, label: 'GBP-ปอนด์สเตอร์ลิง-สหราชอาณาจักร'},
    { value: 1, label: 'THB-บาท-ไทย'},
    { value: 38.4015, label: 'EUR-ยูโร-ยูโรโซน' },
    { value: 0.249398, label: 'JPY-เยน-ญี่ปุ่น' },
    { value: 4.4860, label: 'HKD-ดอลลาร์ฮ่องกง-ฮ่องกง' },
    { value: 7.6130, label: 'MYR-ริงกิต-มาเลเซีย' },
    { value: 26.2356, label: 'SGD-ดอลลาร์สิงคโปร์-สิงคโปร์' },
    { value: 26.3312, label: 'BND-ดอลลาร์บรูไน-บรูไนดารุสซาลาม' },
    { value: 0.6378, label: 'PHP-เปโซฟิลิปปินส์-ฟิลิปปินส์' },
    { value: 0.002424, label: 'IDR-รูเปียอินโดนีเซีย-อินโดนีเซีย' },
    { value: 0.4531, label: 'INR-รูปีอินเดีย-อินเดีย' },
    { value: 39.2251, label: 'CHF-ฟรังก์-สวิตเซอร์แลนด์' },
    { value: 24.1385, label: 'AUD-ดอลลาร์ออสเตรเลีย-ออสเตรเลีย' },
    { value: 21.8915, label: 'NZD-ดอลลาร์นิวซีแลนด์-นิวซีแลนด์' },
    { value: 26.5959, label: 'CAD-ดอลลาร์แคนาดา-แคนาดา' },
    { value: 3.2855, label: 'SEK-โครนา-สวีเดน' },
    { value: 5.1553, label: 'DKK-โครน-เดนมาร์ก' },
    { value: 3.3069, label: 'NOK-โครน-นอร์เวย์' },
    { value: 4.9227, label: 'CNY-เรนมินบิ-จีน' },
    { value: 2.0403, label: 'MXN-เปโซเม็กซิโก-เม็กซิโก' },
    { value: 1.9139, label: 'ZAR-แรนด์-แอฟริกาใต้' },
    { value: 0.0272, label: 'KRW-วอน-เกาหลีใต้'},
    { value: 1.1334, label: 'TWD-ดอลลาร์ไต้หวัน-ไต้หวัน' },
    { value: 113.8037, label: 'KWD-ดีนาร์คูเวต-คูเวต' },
    { value: 9.3160, label: 'SAR-เรียลซาอุดีอาระเบีย-ซาอุดีอาระเบีย' },
    { value: 9.5132, label: 'AED-ดีแรห์น-สหรัฐอาหรับเอมิเรตส์' },
    { value: 0.0166, label: 'MMK-จัด-พม่า' },
    { value: 0.3228, label: 'BDT-ตากา-บังกลาเทศ' },
    { value: 1.6098, label: 'CZK-คราวน์-สาธารณรัฐเช็ก' },
    { value: 0.008476, label: 'KHR-เรียลกัมพูชา-กัมพูชา' },
    { value: 0.001903, label: 'LAK-กีบ-ลาว' },
    { value: 0.4176, label: 'RUB-รูเบิล-รัสเซีย' },
    { value: 0.001485, label: 'VND-ดอง-เวียดนาม' },
    { value: 1.1308, label: 'EGP-ปอนด์-อียิปต์' },

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
      if((selectedIn !== 0 && selectedOut !== 0) && inputMoney){
       setWarn(true)
        setResultMoney((inputMoney)*selectedIn/selectedOut)
      }
      else if(selectedIn !== 0 && selectedOut !== 0){
        setWarn(true)
        setResultMoney(selectedIn/selectedOut)
      }
      else{
        setWarn(false)
        setResultMoney(0)
      }
      console.log("resultMoney = ",resultMoney)
     
      
      
      
    };
    console.log(inputMoney)

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
      <input type="number" className="border-2 border-black-500 rounded" onChange={(e)=>(setInputMoney(parseFloat(e.target.value)))}/>

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
      {resultMoney !== 0 && (<h1 className="text-blue-400 py-4">result : {resultMoney}</h1>)}
      {wran === false && (<h1 className="text-red-400 py-4">Please select all options.</h1>)}
      
     
    
      </div>
      <br/>
      

      {/* <div class="flex justify-center">
      {resultMoney !== 0 && (<h1 className="text-blue-400 py-4">result : {resultMoney}</h1>)}
       
      </div> */}
      
</div>



)


}
