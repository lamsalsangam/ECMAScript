import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import { products } from "../../utils/products";
import { truncateText } from "../../utils/truncateText";
import ProductCard from "@/components/products/ProductCard";

export default function Home() {
  return (
    <div className="p-8">
      <Container>
        <div>
          <HomeBanner />
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {products.map((product: any) => {
            // return <div key={product.id}>{truncateText(product.name)}</div>;
            return <ProductCard key={product.id} data={product} />;
          })}
        </div>
      </Container>
    </div>
  );
}
