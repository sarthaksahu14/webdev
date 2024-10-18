import React, { useState } from "react";
import { motion ,useMotionValueEvent , useScroll } from "framer-motion";

function Work () {

     const [images , setimages] = useState([
      {url:"https://selfmadewebdesigner.com/wp-content/uploads/2022/01/the-best-way-to-learn-web-development-in-2022-without-getting-stuck.jpg",top:"50%",left:"50%",isActive:false},
      {url:"https://cdn.sanity.io/images/tlr8oxjg/production/cbce8b3ffe9e0b82f5d710b56ed210546228c415-1232x690.png?w=3840&q=100&fit=clip&auto=format",top:"56%",left:"44%",isActive:false},
      {url:"https://t4.ftcdn.net/jpg/08/06/99/83/360_F_806998358_jnG7eVBKe90cy9y0EEh9dNqvnrgck1ys.jpg",top:"45%",left:"56%",isActive:false},
      {url:"https://cdn.vectorstock.com/i/500p/07/19/software-development-programming-coding-vector-29570719.jpg",top:"60%",left:"53%",isActive:false},
      {url:"https://png.pngtree.com/thumb_back/fh260/background/20231004/pngtree-a-conceptual-illustration-of-web-design-development-and-seo-optimization-in-image_13584944.png",top:"43%",left:"40%",isActive:false},
      {url:"https://assets.telegraphindia.com/telegraph/2022/May/1652783513_web-d.jpg",top:"75%",left:"45%",isActive:false},
    ]);
     
    const { scrollYProgress } = useScroll();

    scrollYProgress.on("change",(data) => {
      function imagesShow(arr) { 
        setimages(prev => (
          prev.map((item , index) =>(
            arr.indexOf(index) === -1 ? (
              {...item, isActive: false}
            )
            :{...item , isActive:true}
          ))
        ))
      }
      switch (Math.floor(data * 200)) {
    case 0:
    imagesShow([]);
    break;
    case 1:
    imagesShow([0]);
    break;
    case 2:
    imagesShow([0,1]);
    break;
    case 3:
    imagesShow([0,1,2]);
    break;
    case 4:  
    imagesShow([0,1,2,3]);
    break;
    case 5:
    imagesShow([0,1,2,3,4]);
    break;
    case 6:
      imagesShow([0,1,2,3,4,5]);
      break;
}
    })



    
    return (
        <div className="w-full mt-16 sm:mt-24 sm:mb-16 data-scroll data-scroll-speed-9">
              <div className="relative max-w-screen-xl mx-auto text-center">
                <h1 className="text-[40vw] sm:text-[30vw] leading-none font-semibold tracking-tighter text-white">web</h1>
                <div className="absolute top-0 w-full h-full"></div>
                {images.map((image,index) => image.isActive && (
                 <img style={{top:image.top , left: image.left}} className="w-24 h-24 sm:w-60 sm:h-48 rounded-lg absolute -translate-x-[50%] -translate-y-[50%]" src={image.url} alt="" />
                    
                ))}
              </div>
        </div>
    )
}

export default Work;