import React from "react";

function Footer () {
    return(
        <div className="w-full h-auto sm:h-[20vw] text-white font-mirza">
               <div className="max-w-screen-2xl mx-auto sm:flex items-center justify-center gap-32 p-5 sm:p-0">
                        <div className="basis-1/2">
                            <h1 className="hidden sm:block text-[18rem] font-semibold tracking-tight leading-none ml-20">web</h1>
                        </div>
                        <div className="basis-1/2 flex gap-4 sm:mt-20">
                        <div className="basis-1/3 ">
                            <h4 className="mb-4 text-zinc-500 capitalize">socials</h4>
                            {["Instagram","Twitter","Linkedin"].map((item,index) => <a className="block mt-2">{item}</a>)}
                        </div>
                        <div className="basis-1/3 ">
                            <h4 className="mb-10 text-zinc-500 capitalize"></h4>
                            {["Privacy Policy","Cookie Policy","Webflow Agency"].map((item,index) => <a className="block mt-2">{item}</a>)}
                        </div>
                        <div className="basis-1/2 flex flex-col items-end">
                                <p>© 2024 Web Development. All Rights Reserved. | Your go-to source for modern, responsive web design and development services. </p>
                                <img className="mt-4" src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp" />
                        </div>
                        </div>
               </div>
        </div>
    )   
}

export default Footer;