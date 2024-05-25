
export default ({ setCreateShipmentModel, allShipmentsdata})=>{
  const converTime = (time) => {
    const newTime = new Date(time);
    const dateTime = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
  }).format(newTime);
  return dateTime;
};
console.log(allShipmentsdata);
return( 
<div className=" max-w-screen-xl mx-auto px\ md:px-8">
  <div className=" items-start justify-between md:flex">
    <div className=" max-w-lg">
      <h3 className=" text-greay-800 text-xl font-bold sm:text-2xl">
        Create Treacking
      </h3>
<p className="mt-2 text-gray-600">
  Create a new tracking number for your shipment
</p>
    </div>
    <div className="mt-3 md:mt-0">
      <p
      onClick={()=>setCreateShipmentModel(true)}
      href="javascript:void(0)"
      className="inline-block px-4 py-2 text-white duration-150 frnt-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 md:text-sm rounded-lg
      md:inline-flex">
        Add Tracking
        </p>
    </div>
  </div>
  <div className="mt-12 shadow-sm rounded-lg overflow-x-auto">
    <table className=" w-full table-auto text-sm text-left">
      <thead className=" bg-gray-50 text-gray-600 font-medium border-b">
        <tr>
          <th className="px-6 py-3">Sender</th>
          <th className="px-6 py-3">Receiver</th>
          <th className="px-6 py-3">PickupTime</th>
          <th className="px-6 py-3">Distance</th>
          <th className="px-6 py-3">Price</th>
          <th className="px-6 py-3">Delivery Time</th>
          <th className="px-6 py-3">Paid</th>
          <th className="px-6 py-3">Status</th>
        </tr>
      </thead>
      <tbody className=" text-gray-600 divide-y">
      {allShipmentsdata?.map((shipment, idx)=>(
        <tr key={idx} >
          <td className="px-6 py-3 whitespace-nowrap">
            {shipment.sender.slice(0, 15)}...
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
          {shipment.receiver.slice(0, 15)}...
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
          {converTime (shipment.pickupTime)}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
          {converTime(shipment.pickupTime)}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
          {shipment.distance}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
           {shipment.price}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
          {shipment.deliveryTime}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
          {shipment.isPaid ? "Completed" : "Not Complete"}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
          {shipment.status == 0
            ? "Pending"
            : shipment.status == 1
            ? "IN_TRANSIT"
            : "Delivered"}
          </td>
        </tr>
      ))}
     </tbody>
    </table>
  </div>
</div>

);

};