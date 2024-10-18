import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";

function Button ({title ="Get Started"}){
    return (
        <div className="min-w-32 px-3 py-2 bg-zinc-100 text-black rounded-full hidden sm:flex items-center justify-between ">
                 <span className="text-md font-flux font-semibold">{title}</span>
                 <BsArrowReturnRight className="text-lg"/> 
        </div>
    )
}

export default Button;