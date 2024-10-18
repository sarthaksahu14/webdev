import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

function Card({width,start,para,title,heading,blog}) {
    return (
        <div className={`bg-zinc-600 p-5 rounded-xl text-stone-200  hover:text-black hover:bg-blue-700 sm:hover:px-10 font-flux ${width}`}>
            <div>
                <div className="w-full flex items-center justify-between font-flux ">
                    <h3 className="text-xs sm:text-lg">{heading}</h3>
                    <FaLongArrowAltRight />
                </div>
                <h1 className="text-xl sm:text-5xl font-medium mt-5 sm:mt-10 mb-20">{blog}</h1>
            </div>
            <div className="down w-full mt-24 sm:mt-48">
                {start === true && (
                    <>
                          <h1 className="text-6xl sm:text-9xl font-semibold tracking-tighter leading-none">{title}</h1>
                          <button className="rounded-full py-1 px-4 border-[1px] border-zinc-50 mt-4">Contact</button>
                    </>
                )}
          {
            para && (
                <p className=" text-lg text-zinc ml-2 mt-1 sm:mt-60">Our team of expert developers and designers work closely with clients to bring their vision to life, ensuring a seamless blend of functionality and aesthetics. </p>
            )
          }
               
            </div>
        </div>
    )
}


export default Card;

