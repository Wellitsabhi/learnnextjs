import { Metadata } from "next";

type Props={
  params:{
    productId: string;
  }
}
export const generateMetadata = ({params}: Props): Metadata => {
  return {
    title: `Product ${params.productId}` 
  }
}


export default function ProductDetails({
  params,
}: {
  params: { productId: string }; // params is OBJECT with key 'productId' AND TYPE 'string'
}) {
  return <h1>Details of Product {params.productId}</h1>;
}
