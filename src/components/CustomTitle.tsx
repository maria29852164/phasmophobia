import {FC, ReactElement} from "react";

export interface CustomTitleProps {
    title: string | ReactElement
    styles?:string
}

export const CustomTitle:FC<CustomTitleProps>=({title,styles=''})=>{
    return (
        <h1 className={`text-3xl border-2 border-blue-900 block px-2 py-3 rounded-full text-center text-white ${styles}`}>{title}</h1>

    )
}