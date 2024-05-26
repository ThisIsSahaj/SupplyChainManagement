import React from "react";

export default ()=>{
  return(
    <footer className="pt-10">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 nd:px-8">
        <div className="justify-between sm:flex">
          <div className="space-y-6">
            <img src="logo.png" width={200}
          height={50} />
         
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
          <p>All rights reserved | Pull Stackers | 2024</p>
        </div>
      </div>
    </footer>
  );
};
