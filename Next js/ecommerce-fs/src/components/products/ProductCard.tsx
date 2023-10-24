"use client";

import Image from "next/image";
import { truncateText } from "../../../utils/truncateText";
import { formatPrice } from "../../../utils/formatPrice";
import { Rating } from "@mui/material";

interface ProductCardProps {
  data: any;
}

export default function ProductCard({ data }: ProductCardProps) {
  const productRating =
    // here the acc "accumulator" is initialized to be 0 at the beginning.
    // data.reviews.reduce((acc, item) => item.rating + acc, 0) / data.reviews.length;
    data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    data.reviews.length;

  return (
    <div className="col-span-1 cursor-pointer rounded-sm border-[1.2px] border-slate-200 bg-slate-50 p-2 text-center text-sm transition hover:scale-105">
      <div className="flex w-full flex-col items-center gap-1">
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            fill
            src={data.images[0].image}
            alt={data.name}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="mt-4">{truncateText(data.name)}</div>
        <div>
          {/* Used Material UI */}
          <Rating value={productRating} readOnly />
        </div>
        <div>{data.reviews.length} reviews</div>
        <div className="font-semibold">{formatPrice(data.price)}</div>
      </div>
    </div>
  );
}
