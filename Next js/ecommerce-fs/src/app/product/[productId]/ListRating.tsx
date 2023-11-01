"use client";

import Avatar from "@/components/Avatar";
import Heading from "@/components/Heading";
import { Rating } from "@mui/material";
import moment from "moment";

interface ListRatingProps {
  product: any;
}

export default function ListRating({ product }: ListRatingProps) {
  return (
    <div>
      <Heading title="Product Review" />
      <div className="mt-2 text-sm">
        {product.reviews &&
          product.reviews.map((review: any) => {
            return (
              <div key={review.id} className="max-w-[300px]">
                <div className="flex items-center gap-2">
                  <Avatar src={review.user.image} />
                  <div className="font-semibold">{review.user.name}</div>
                  <div className="font-light">
                    {moment(review.createdDate).fromNow()}
                  </div>
                </div>
                <div className="mt-2">
                  <Rating value={review.rating} readOnly />
                  <div className="ml-2">{review.comment}</div>
                  <hr className="mb-4 mt-4" />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
