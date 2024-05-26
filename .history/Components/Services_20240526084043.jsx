import React from "react";
import Image from "next/image";
import images from "../Images/index"

export default ({
  setOpenProfile,
  setCompleteModal,
  setGetModel,
  setStartModal

})=>{
  const team =[
    {
      avatar:images.compShipment,
    },
    {
      avatar:images.getShipment,
    },
    {
      avatar:images.startShipment,
    },
    {
      avatar:images.userProfile,
    },
    // {
    //   avatar:images.shipCount,
    // },
    // {
    //   avatar:images.send,
    // },
  ];

  const openModalBox = (text)=>{
    if (text ===1){
      console.log('complete modal clicked');
      setCompleteModal(true);
    }else if(text ===2){
      setGetModel(true);
    }else if(text ===3){
      setStartModal(true);
    }else if(text ===4){
      setOpenProfile(true);
    }
  };  
  return (
    <section className=" py-0 pb-0">
      <div id="bg" className=" max-w-screen-xl mx-auto px-4 md:px-8 border-4 border-green-500 rounded-xl mb-5 py-3">
        <div className="mt-0">
          <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {team.map((item, i) => (
              <li key={i}>
                <div  onClick={() => openModalBox(i+1)}
                className="  w-full h-60 sm:h-52 md:h-56">
                  <Image
                    src={item.avatar}
                    className="w-full h-full object-cover object-center shadow-md rounded-xl border-4  hover:border-white cursor-pointer"
                    alt=""
                    />
                    
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );

}


