import { motion } from "framer-motion";
import React from "react";

function Maruee ({imagesurls}){
    
    return (
        <div className="flex gap-10 w-full">
             <motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{duration:10,repeat:Infinity,ease:"linear"}} >    <img className="w-[30rem] h-full" src={imagesurls.url} alt="" /> </motion.div>  
             {/* <motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{duration:10,repeat:Infinity,ease:"linear"}} >    <img className="w-[30rem] h-full" src={imagesurls.url} alt="" /> </motion.div>     */}
           
              </div>
    )
}

export default Maruee;  