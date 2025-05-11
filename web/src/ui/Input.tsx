interface inputProps{
    placeholder: string;
    type: string;
    size?: "sm"|"md"|"lg"
    className?: string;
}

const sizeVariant = {
    "sm" : "w-48",
    "md" : "w-64",
    "lg" : "w-full",
}
const defaultClass = "border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full px-4 py-2";
export default function Input({type,placeholder,size,className}:inputProps){
    return(
        <div>
            <input type={type} placeholder={placeholder} className={`${className} ${defaultClass} ${sizeVariant[size ?? "lg"]}`}/>
        </div>
    )
}