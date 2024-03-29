"use client";

import { CartProductType } from "@/app/product/[productId]/ProductDetails";

interface SetQtyProps {
  cartCounter?: boolean;
  cartProduct: CartProductType;
  handleQtyIncrease: () => void;
  handleQtyDecrease: () => void;
}

const btnStyles = "border-[1.2px] border-slate-300 px-2 rounded";

export default function SetQuantity({
  cartCounter,
  cartProduct,
  handleQtyIncrease,
  handleQtyDecrease,
}: SetQtyProps) {
  return (
    <div className="flex items-center gap-8">
      {cartCounter ? null : <div className="font-semibold">QUANTITY:</div>}
      <div className="flex items-center gap-4 text-base">
        <button className={btnStyles} onClick={handleQtyDecrease}>
          -
        </button>
        <div>{cartProduct.quantity}</div>
        <button className={btnStyles} onClick={handleQtyIncrease}>
          +
        </button>
      </div>
    </div>
  );
}
