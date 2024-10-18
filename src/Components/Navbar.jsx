import React from "react";
import Button from "./Button";

function Navbar() {
    return (
        <>
            <div className="max-w-7xl mx-auto py-5 flex items-center justify-between border-b-[1px] border-zinc-600 ">
                <div className="nleft flex items-center justify-center"> 
                <img className="w-[2rem] h-[2rem] object-cover ml-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSImsFlAKK42_XcZJWvPi39RlH4xmh_KVj9tg&s" />
                <div className="links flex gap-14 ml-20 font-mirza">
                    {["Home", "Work", "About"].map((elem, index) => (
                        <a className="text-lg text-white flex items-center justify-center gap-1" href="#">
                            {index === 1 && (<span style={{boxShadow:"0 0 .75em #00FF19"}} className="inline-block w-1 h-1 rounded-full bg-green-500"></span>)}{elem}</a>
                    ))}
                </div>
                </div>
                <div className="hidden sm:block">
                <Button />
                </div>
               
            </div>
        </>
    )   
}

export default Navbar;
