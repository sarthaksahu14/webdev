import React from "react";

function Stripe ({val}) {
    return (
        <div className="sm:w-[16.66%] px-3 py-3 border-t-2 border-r-2 border-b-2 border-zinc-600"> 
           <img className="w-[8em] h-5 sm:h-[3rem] sm:ml-16" src={val.url} alt="" />
        </div>
    )
}

export default Stripe;