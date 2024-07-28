"use client"
import {useRouter} from 'next/navigation';


export default function OrderProduct() {
    const router = useRouter();
    const handleClick=()=>{
        setTimeout(()=>{},2000);
        console.log("Placing order");
        // router.push("/");
        router.back();

    }

    return(
        <>
        <h1>Order Product</h1>
        <button onClick={handleClick}>Place order</button>
        </>
    )
}