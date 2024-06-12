import {FC, ReactElement} from "react";
import Image from "next/image";

export interface CustomPhanthomProps{
    img:string | JSX.Element | ReactElement | any ,
    titlePhantom:string,
    description:string
}

export const CustomPhantom:FC<CustomPhanthomProps>= ({img,description,titlePhantom})=> {
    return <div className="bg-gray-800 rounded-lg overflow-hidden">
        <Image
            src={img}
            alt="Fantasma Demoníaco"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
        />
        <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{titlePhantom}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    </div>
}