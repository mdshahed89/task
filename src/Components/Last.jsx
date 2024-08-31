import React from "react";

function Last() {
  return (
    <div className=" max-w-[1200px] mx-auto flex md:flex-row flex-col gap-3 mt-32 px-2 ">
      <div className=" flex-1 rounded-lg p-1 bg-gradient-to-r from-[#FEAE6F] to-purple-700 ">
        <div className=" bg-[#2a1249] h-full px-[6%] py-[10%] ">
        <h4 className=" text-base font-semibold text-[#999999] ">Contact us</h4>
        <h3 className=" text-[1.6rem] font-semibold leading-tight mb-5 ">Get In Touch</h3>
        <p className=" text-[#999999] font-semibold  ">
          If you have any query, feel free to contact us through email address,
          telegram or fill the form and don't forget to read the <span className=" font-bold text-[#fff] ">privacy policy</span>
        </p>
        </div>
      </div>
      <div className=" flex-1 flex flex-col gap-3  ">
        <div className=" flex-1 flex gap-3 ">
          <div className=" flex-1  rounded-lg p-1 bg-gradient-to-r from-[#FEAE6F] to-purple-700 ">
           <div className=" bg-[#2a1249] md:py-0 py-7 h-full flex flex-col justify-center px-4 ">
           <h4 className=" text-xl text-[#c7c7c7] ">Telegram</h4>
           <p className=" text-[#999999] ">Click here</p>
           </div>
          </div>
          <div className=" flex-1 rounded-lg p-1 bg-gradient-to-r from-[#FEAE6F] to-purple-700 ">
            <div className=" bg-[#2a1249] h-full flex flex-col justify-center px-4 ">
            <h4 className=" text-xl text-[#c7c7c7] ">Email Us</h4>
            <p className=" text-[#999999] ">mdshahed@gmail.com</p>
            </div>
          </div>
        </div>
        <div className=" flex-1 rounded-lg p-1 bg-gradient-to-b from-[#FEAE6F] to-purple-700 ">
            <div className=" bg-[#2a1249] md:py-0 py-8 h-full flex justify-center items-center text-[1.4rem] font-semibold text-[#cecece] ">Fill The Form</div>
        </div>
      </div>
    </div>
  );
}

export default Last;
