import React from "react";
import Card from "./Card";

function Cards () {
    return (
        <div className="w-full p-16">
                    <div className="sm:flex gap-2 sm:max-w-screen-2xl mx-auto py-20">
                        <Card width={"basis-1/3 mb-5 sm:mb-0"} start={false} para={true} title={""} heading={"Blog"} blog={"News & Insights"}/>
                        <Card width={"basis-2/3"} start={true} para={false} title={"Start the project"}  heading={"GET IN TOUCH"} blog={"Let's go to it together."}/>
                    </div>
        </div>
    )
}


export default Cards;


