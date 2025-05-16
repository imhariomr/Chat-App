"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "./Loader";

interface ButtonProps{
    label:string;
    color: "primary"|"secondary";
    size: "sm" | "md" | "lg";
    icon ?: any;
    iconSize ?: "sm" | "md" | "lg";
    className ?: string;
    disabled?:any;
    loader?:boolean
}

const colorVariant = {
    "primary" : "text-white bg-blue-400",
    "secondary" : "text-white bg-gray-600"
}

const sizeVariant = {
    "sm" : "px-4 py-1",
    "md" : "px-9 py-2",
    "lg" : "w-full py-2"
}

const iconSizeVariant = {
    "sm" : "w-4 h-4",
    "md" : "w-4 h-5",
    "lg" : "w-6 h-4"
}

const loadersizeVariant:any = {
    "sm" : [12,2],
    "md" : [25,3],
    "lg" : [35,4]
}

const defaultClass = "rounded-md border-none flex items-center justify-center gap-2";

export default function Button({label,color,size,icon,iconSize,className,disabled,loader}:ButtonProps){
    const [height,width] = loadersizeVariant['sm'];
    return(
        <button className={`${colorVariant[color]} ${sizeVariant[size]} ${defaultClass} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`} disabled={disabled}>
            {loader && (
                <span className="flex items-center">
                    <Loader height={height} width={width} />
                </span>
            )}

            {icon && <FontAwesomeIcon icon={icon} className={`${iconSizeVariant[iconSize ?? 'sm']}`} />}
            {label}
        </button>
    )
}