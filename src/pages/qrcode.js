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
        <h1 className="text-sm font-medium">QR Code Generator</h1>
      <input  className="border-2 border-black-500 rounded ml-2" type="text" value={inputData} onChange={handleInputChange} />
    
      
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