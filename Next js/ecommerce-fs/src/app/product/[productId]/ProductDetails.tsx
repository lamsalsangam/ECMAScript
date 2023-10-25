"use client";

interface ProductDetailsProps {
  product: any;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
      <div>Images</div>
      <div>Details</div>
    </div>
  );
}
