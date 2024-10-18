import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
    var products = [
        { title: "Foundations", description: "Learn the core elements of web development: front-end, back-end, and full-stack. Discover how HTML, CSS, and JavaScript work together to create functional and visually appealing websites.", live: true, case: false },
        { title: "Essentials", description: "Understand the basics of HTML, CSS, and JavaScript, the essential trio for building any website. Explore their roles in structuring content, styling designs, and adding interactive elements.", live: true, case: false },
        { title: "Responsive", description: "Discover the importance of responsive web design in the mobile era. Learn how to create layouts that adjust seamlessly across devices, ensuring a smooth user experience regardless of screen size.", live: true, case: true },
        { title: "Frameworks", description: "Compare popular JavaScript frameworks like React, Angular, and Vue. Understand their strengths and use cases, enabling developers to choose the best option for building modern, scalable web applications.", live: true, case: false },
        { title: "Versioning", description: "Dive into Git and GitHub to manage code changes effectively. Learn how version control systems enable collaborative coding, bug tracking, and efficient project management in web development workflows.", live: true, case: false },
        { title: "APIs", description: "Explore the world of APIs and their role in connecting different software systems. Learn how RESTful APIs enable web applications to fetch and send data from external servers or services.", live: true, case: true },
        { title: "Backend", description: "Delve into backend development with Node.js and Express. Learn about server-side logic, handling requests, and building APIs that support the front-end of web applications for dynamic functionality.", live: true, case: false },
        { title: "Databases", description: "Understand the basics of managing data with SQL and NoSQL databases. Explore how databases store, organize, and retrieve data efficiently, forming the backbone of dynamic, data-driven web applications.", live: true, case: false },
        { title: "Optimization", description: "Master web performance optimization techniques like lazy loading, image compression, and reducing server requests. Enhance user experiences by ensuring fast load times and seamless interactions across your website.", live: true, case: false },
        { title: "Deployment", description: "Learn how to deploy web applications on platforms like Netlify, Vercel, and Heroku. Understand the steps to make your projects live, including continuous integration and environment management.", live: true, case: false },

    ]
    const [pos, setpos] = useState(0);

    const mover = (val) => {
        setpos(val * 23);
    }

    return (
        <div className="relative w-full h-screen mb-[50rem] sm:mb-[185rem] bg-black">
            {products.map((val, index) => <Product val={val} mover={mover} count={index} />)}
            <div className="absolute top-0 w-full h-full pointer-events-none">
                <motion.div initial={{ y: pos, x: "-50%" }} animate={{ y: pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .4 }} className="window w-[10rem] sm:w-[32rem] h-[23rem] absolute left-[45%] overflow-hidden">
                   <div> <motion.div initial={{ y: pos }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .4 }} className="w-full h-full absolute"></motion.div>
                    <video muted loop autoPlay className="w-full h-auto py-10 hidden sm:block" src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/cula-169.webm" type="video.mp4" ></video>
                    </div>
                    <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration: .4 }} className="w-full h-full absolute">  </motion.div>
                    <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration: .4 }} className="w-full h-full absolute">  </motion.div>
                    <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration: .4 }} className="w-full h-full absolute">  </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Products;