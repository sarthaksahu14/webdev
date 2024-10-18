import React from "react";
import Stripe from "./Stripe";

function Stripes () {
    var data = [
      {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bafc1c77261cbab231_63aedb322c152d2deae759ec_mural.svg"},
      {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b9b2d3d56a1d071efe_63aedb0e917c0cce57418785_haufe.svg"},
      {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88fc_660191edcdb42d79ba8c23aa_Logo.svg"},
      {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b997d53302df1b9075_63aeda082c152d7b32e74c9d_remind.svg"},
      {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d486ac04cccf98e13fff_bcgp.svg"},
      {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359ba3497cf06ff9e8f79_63aedb713ba6d19b75099311_basf.svg"},
      
    ]
    return (
        <div className="flex items-center mt-10 mb-[5rem] sm:mb-[16rem]">
           {data.map((elem,index) =>{
            return <Stripe val={elem}/>
           })}  
        </div>
    )
}

export default Stripes;