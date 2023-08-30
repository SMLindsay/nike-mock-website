import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";


const PopularProducts = () => {
  return (
    <section
    id="products"
    className="max-container max-sm:mt-12">
      {/* TITLE & DESCRIPTION */}
      <div className="flex flex-col justify-start gap-5"> 
        <h2 className="text-4xl font-palanquin font-bold dark:text-white">Our <span className="text-coral-red">Popular</span> Products</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design and value.</p>
      </div>
      {/* POPULAR PRODUCT CARDS */}
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 dark:text-white">
        {/* MAPPING OVER PRODUCT ARRAY TO CREATE POPULAR PRODUCT CARD COMPONENTS */}
        {products.map ((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts