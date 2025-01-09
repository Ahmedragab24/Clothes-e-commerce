import { products } from "@/constants";
import Product from "./components/ProductCard";

const ProductsSection = () => {
  return (
    <section className="section" id="products">
      <div className="container flex flex-col gap-4">
        <h2 className="sectionTitle">Hot Deal, Big Save</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
