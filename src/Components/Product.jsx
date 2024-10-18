import React from "react";
import Button from "./Button";

function Product({val,mover,count}) {

    return (
        <div className="w-full sm:py-16 text-white hover:bg-blue-800">
            <div onMouseEnter={()=>{mover(count)}} className="max-w-screen-2xl mx-auto flex items-center justify-between py-5 sm:py-10 ">
                <h1 className="text-sm ml-6 sm:ml-0 sm:text-6xl capitalize font-semibold">{val.title}</h1>
                <div className="details w-1/3">
                    <p className="font-flux text-xs sm:text-lg mr-5 sm:mr-0 sm:mb-10">{val.description}</p>
                 <div className="flex items-center gap-10">
                    {val.live && <Button  />}
                    {val.case && <Button title="Case Study" />}
                    </div>
                </div>
                 </div>
        </div>
    )
}

export default Product;