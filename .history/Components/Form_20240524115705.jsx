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




const Form = () => {
  return <div>Form</div>;
};

export default Form;
