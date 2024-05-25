import React from "react";
import { Fot1, Fot2 } from "../Components/index";
import { fromJSON } from "postcss";


export default ()=>{
  // const footerNavs =[
  //   {
  //     href:"javasvript:void(0)",
  //     name:"Terms",
  //   },
  //   {
  //     href:"javasvript:void(0)",
  //     name:"Privacy",
  //   },
  //   {
  //     href:"javasvript:void(0)",
  //     name:"Licence",
  //   },
  //   {
  //     href:"javasvript:void(0)",
  //     name:"About us",
  //   },
  // ];
  return(
    <footer className="pt-10">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 nd:px-8">
        <div className="justify-between sm:flex">
          <div className="space-y-6">
            <img src="logo.png" className="w-32"/>
          <p className="max-w-md">
            {/* devloped by Pull Stackers. */}
          </p>
          {/* <ul className="flex flex-wrap gap-4 text-sm sm:text-base">
            {footerNavs.map((item,idx)=>(
              <li className="text-gray-800 hover:text-blue-500 duration-150">
                <a key={idx} href={item.href}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul> */}
          </div>
            <div className="mt-6">
              <p className="text-gray-700 font-semibold"></p>
              <div className=" flex items-center gap-3 sm:block">
                <a href="javasvript:void(0)">
                
                </a>
                <a href="javasvript:void(0)" className="mt-0 block sm:mt-3">
                
                </a>
               </div>
              </div>
        </div>
        <div className="mt-10 py-10 border-t md:text-center">
          <p>@ 2024 Team Pull Stackers. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};
