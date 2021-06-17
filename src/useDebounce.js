import React ,{useState} from "react"

export default function useDebounce(){
    const [searchTimeout, setSearchTimeout]= useState("")

    function debounce(func,wait=500){
        clearTimeout(searchTimeout);
        const timeout = setTimeout(()=>{
            func();
        },wait)
        setSearchTimeout(timeout)
    }
    return debounce;
}