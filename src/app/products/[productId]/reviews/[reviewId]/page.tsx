import {notFound} from 'next/navigation';

export default function ReviewId({
  params,
}: {
  params: { reviewId: string; productId: string };
}) {
    // if someone search for more than 100th review , this will show error
    if(parseInt(params.reviewId) > 100){
      notFound();
    }

  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
}
