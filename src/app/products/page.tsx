import { products } from '@/lib/products';
import { ProductCard } from '@/components/product-card';
import { Nut, Bean, CookingPot, ShoppingBasket } from 'lucide-react';
import type { ReactNode } from 'react';

type Category = 'Dry Fruits' | 'Dals & Pulses' | 'Masale' | 'General Items';

const categoryIcons: Record<Category, ReactNode> = {
  'Dry Fruits': <Nut className="h-8 w-8 text-primary" />,
  'Dals & Pulses': <Bean className="h-8 w-8 text-primary" />,
  'Masale': <CookingPot className="h-8 w-8 text-primary" />,
  'General Items': <ShoppingBasket className="h-8 w-8 text-primary" />,
};

export default function ProductsPage() {
  const groupedProducts = products.reduce((acc, product) => {
    (acc[product.category] = acc[product.category] || []).push(product);
    return acc;
  }, {} as Record<Category, typeof products>);

  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline">Our Products</h1>
        <p className="mt-2 text-muted-foreground">Explore our wide range of natural and organic items.</p>
      </div>

      {Object.entries(groupedProducts).map(([category, productsInCategory]) => (
        <section key={category} id={category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')} className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            {categoryIcons[category as Category]}
            <h2 className="text-3xl font-bold font-headline">{category}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {productsInCategory.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
