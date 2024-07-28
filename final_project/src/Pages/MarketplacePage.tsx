
export const revalidate=0; 

// Import necessary components and functions
import getProducts, { IProductParams } from '@/actions/getProducts';
import NullDataError from "../components/General/NullDataError";
import Container from "../components/General/Container";
import ProductsCard from '../components/Products/ProductCard';


// Define the interface for the HomeProps
interface MarketplaceProps {
  searchParams: IProductParams // Search parameters for fetching products
}

// Define the Home component as an asynchronous function
export default async function Marketplace({ searchParams }: MarketplaceProps) {
  // Fetch products based on the search parameters
  const products = await getProducts(searchParams)

  // If no products are found, display a message
  if (products.length === 0) {
    return <NullDataError title='Oops! No products found' />
  }

  // Render the home page layout
  return (
    <div className="p-8">
      {/* Container component to provide layout structure */}
      <Container>
        {/* Grid layout to display products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 mt-6">
          {/* Map through the products and render a ProductsCard component for each */}
          {products.map((product: any, index: number) => (
            <ProductsCard key={index} data={product} />
          ))}
        </div>
        {/* Additional grid section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 mt-6">
        </div>
      </Container>
    </div>
  );
}
