"use client"
interface inputProps{
    placeholder: string;
    type: string;
    size?: "sm"|"md"|"lg"
    className?: string;
    onChange?:(e:any)=>void;
}

const sizeVariant = {
    "sm" : "w-48",
    "md" : "w-64",
    "lg" : "w-full",
}
const defaultClass = "border mt-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 px-4 py-2";
export default function Input({type,placeholder,size,className,onChange, ...rest}:inputProps){
    return(
        <div>
            <input type={type} placeholder={placeholder} onChange={onChange} {...rest} className={`${className} ${defaultClass} ${sizeVariant[size ?? "lg"]}`}/>
        </div>
    )
}