import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { products } from '@/lib/products';
import { ProductCard } from '@/components/product-card';
import { Sprout, Star, Truck } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-1');
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      <section className="relative w-full h-[60vh] md:h-[80vh] bg-background">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Fresh organic produce on a rustic table"
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto h-full flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-headline drop-shadow-lg">
            Purity, Quality, and Trust in Every Bite
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl drop-shadow-md">
            Maa Organics brings you the finest natural and organic products, straight from nature to your kitchen.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/products">Explore Our Products</Link>
          </Button>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold font-headline">Why Choose Maa Organics?</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              We are committed to providing you with the best. Here's what makes us special.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-primary/10 p-4 rounded-full">
                <Sprout className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-semibold font-headline">100% Natural</h3>
              <p className="mt-2 text-muted-foreground">
                All our products are sourced from nature, free from artificial additives and preservatives.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-primary/10 p-4 rounded-full">
                <Star className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-semibold font-headline">Premium Quality</h3>
              <p className="mt-2 text-muted-foreground">
                We handpick the finest ingredients to ensure you get the best quality in every product.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-primary/10 p-4 rounded-full">
                <Truck className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-semibold font-headline">Delivered with Care</h3>
              <p className="mt-2 text-muted-foreground">
                Your health is our priority. We ensure safe and hygienic delivery to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-card">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold font-headline">Featured Products</h2>
            <p className="mt-2 text-muted-foreground">A glimpse of what we offer.</p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="bg-transparent">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
