import Container from "@/components/Container";
import ProductDetails from "./ProductDetails";
import { product } from "../../../../utils/product";
import ListRating from "./ListRating";

interface IParams {
  productId?: string;
}

export default function Product({ params }: { params: IParams }) {
  console.log(params);
  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="mt-20 flex flex-col gap-4">
          <div>Add Rating</div>
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
}
