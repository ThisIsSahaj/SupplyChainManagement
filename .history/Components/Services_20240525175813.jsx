import React from "react";
import Image from "next/image";
import images from "../Images/index"

export default ({
  setOpenProfile,
  setCompleteModal,
  setGetModel,
  setStartModal

}) => {
  const team = [
    {
      avatar: images.compShipment,
    },
    {
      avatar: images.getShipment,
    },
    {
      avatar: images.startShipment,
    },
    {
      avatar: images.userProfile,
    },
    {
      avatar: images.shipCount,
    },
    {
      avatar: images.send,
    },
  ];

  const openModalBox = (text) => {
    if (text === 0) {
      setCompleteModal(true);
    } else if (text === 1) {
      setGetModel(true);
    } else if (text === 2) {
      setStartModal(true);
    } else if (text === 3) {
      setOpenProfile(true);
    }
  };
  return (
    <section className=" py-0 pb-14">
      <div className=" max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {team.map((item, i) => {
              console.log(item,i);
              return <li key={i}>
                <div onClick={() => openModalBox(i)}
                  className=" w-full h-60 sm:h-52 md:h-56">
                  <Image
                    src={item.avatar}
                    className="w-full h-full object-cover object-center shadow-md rounded-xl"
                    alt=""
                  />
                </div>
              </li>
            })}
          </ul>
        </div>
      </div>
    </section>
  );

}


