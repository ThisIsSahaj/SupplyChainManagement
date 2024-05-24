import { useState } from "react";
export default ({ getModel, setGetModel, getShipment }) => {
const [index, setIndex] = useState(0);
const [singleShipmentData, setSingleShipmentData] = useState();
const getshipmentData = async () => {
const getData = await getShipment (index);
setSingleShipmentData (getData);
console.log(getData);
};
console.log(singlesnipmentuata);
const converTime (time) => {
const newTime = new Date(time);
....const dataTime = new Intl.DateTimeFormat("en-US", {
year: "numeric",
month: "2-digit",
day: "2-digit",
}).format(newTime);

return dataTime;
};

return getModel ? (
  <div className="fixed inset-0 z-10 overflow-y-auto">
  <div
  className="fixed inset-0 w-full h-full bg-black opacity-40"
  onClick={() =>setGetModel(false)}
  ></div>
  <div className="flex items-center min-h-screen px-4 py-8" >
  <div className="flex items-center min-h-screen px-4 py-8">
<div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md
shadow-lg">
<div className="flex justify-end">
<button
className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
onClick={() => setGetModel(false)} >

<svg
xmlns="http://www.w3.org/2000/svg"
className="w-5 h-5 mx-auto"
viewBox="0 0 20 20"
fill="currentColor"
>
<path
fillRule="evenodd"
d="M4.293 4.293a1 1 0 011.414 0L10 8.58614.293-4.293al 1 0 111.414 1.
414L11.414 1014.293 4.293a1 10 01-1.414 1.414L10 11.4141-4.293 4.
293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
clipRule="evenodd" />

</svg>
</button>
</div>

<div className="max-w-sm mx-auto py-3 space-y-3 text-center">
<h4 className="text-lg font-medium text-gray-800">
Product Tracting Details
</h4>
<form onSubmit={(e) = e.preventDefault()}>
<div className="relative mt-3">
<input
type="number"
placeholder="Id"
className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent
outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
onChange={(e) => setIndex(e.target.value)}
/>


