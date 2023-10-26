"use client";

import { Rating } from "@mui/material";

interface ProductDetailsProps {
  product: any;
}

const Horizontal = () => {
  return <hr className="my-2 w-[30%]" />;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  const productRating =
    // here the acc "accumulator" is initialized to be 0 at the beginning.
    // data.reviews.reduce((acc, item) => item.rating + acc, 0) / data.reviews.length;
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
      <div>Images</div>
      <div>
        <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
        <div className="flex items-center gap-1 text-sm text-slate-500">
          <Rating value={productRating} readOnly />
          <div>{product.reviews.length} reviews</div>
        </div>
        <Horizontal />
        <div className="text-justify">{product.description}</div>
        <Horizontal />
        <div>
          <span className="font-semibold">CATEGORY:</span>
          {product.category}
        </div>
        <div>
          <span className="font-semibold">BRAND:</span>
          {product.brand}
        </div>
        <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>
          {product.inStock ? "In Stock" : "Out of stock"}
        </div>
        <Horizontal />
        <div>color</div>
        <Horizontal />
        <div>quantity</div>
        <Horizontal />
        <div>add to cart</div>
      </div>
    </div>
  );
}
