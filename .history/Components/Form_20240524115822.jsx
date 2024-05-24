import React from "react";

import { useState } from "react";


export default ({
setCreateShipmentModel,
createShipmentModel,
createShipment,
}) => {
const [shipment, setShipment] = useState({
receiver: "",
pickupTime: "",
distance: "",
price: "",  
});

const createItem = async () => {
  try {
  await createShipment (shipment);
  } catch (error) {
  console.log("Wrong creating item");
  }
  };
  return createShipmentModel ? (
  <div className="fixed inset-0 2-10 overflow-y-auto">
    <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => setCreateShipmentModel(false)}>
      
    </div>
<div className="flex items-center min-h-screen px-4 py-8">
<div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-mdshadow-lg"> I
<div className="flex justify-end"></div>

<button
className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
onClick={() =>setCreateShipmentModel(false)}
<svg
xmlns="http://www.w3.org/2000/svg"
className="w-5 h-5 mx-auto"
viewBox="0 0 20 20"
fill="currentColor" 
>

<path fillRule="evenodd"
d="M4.293 4.293a1 1 0 011.414 0L10 8.58614.293-4.293a1 1 0 111.414 1.
414L11.414 1014.293 4.293a1 1 0 01-1.414 1.414L10 11.4141-4.293 4.
293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
clipRule="evenodd"
/>
</svg>
</button>
</div>




const Form = () => {
  return <div>Form</div>;
};

export default Form;
