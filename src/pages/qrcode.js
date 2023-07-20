import React,{useEffect,useState} from "react"
import { GenerateQRCode } from "../../utils/generateQr";
import Nabar from "../../component/Navbar";

export default function Qrcode() {
    const [qrCodeData, setQRCodeData] = useState('');
    const [inputData, setInputData] = useState('');




    const handleInputChange = (event) => {
        setInputData(event.target.value);
      };
    
      const handleGenerateQRCode = async () => {
        const qrCodeDataUrl = await GenerateQRCode(inputData);
        setQRCodeData(qrCodeDataUrl);
      };

return(
    <div>
        <Nabar/>
        <br/>
        <div class="flex justify-center">
  <div class="bg-blue-500 w-21 px-1 py-1 border-2 border-black-500 rounded flex items-center">
    <h1 class="text-white ml-1">QR code</h1>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 35 20" strokeWidth="2.0" stroke="currentColor" class="w-8 h-8 ml-1">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
    </svg>
  </div>



</div>
<br/>
        <div class="flex justify-center">
        <h1 className="text-sm font-medium">QR Code Generator :</h1>
      <input placeholder=" URL Link" className="border-2 border-black-500 rounded ml-2" type="text" value={inputData} onChange={handleInputChange} />
    
      
        </div>
        <br/>
        <div class="flex justify-center">
                 <button  className='bg-blue-500 text-white  border-2 m-2 p-2 border-black-500 rounded-lg' onClick={handleGenerateQRCode}>Generate QR Code</button>
      
       </div>
       <div class="flex justify-center">

                {qrCodeData && (
                    <div>
                    <img src={qrCodeData} alt="QR Code" />
                    <br/>
                    <a className='bg-blue-500 text-white  border-2 m-2 p-2 border-black-500 rounded-lg' href={qrCodeData} download="qrcode.png">
                        Download QR Code
                    </a>
                    </div>
                )}

       </div>
    </div>


);

}