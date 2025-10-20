
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import type { Product } from '@/lib/products';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CONTACT_PHONE_NUMBER } from '@/lib/constants';
import { Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === product.imageId);

  const handleOrder = () => {
    const message = encodeURIComponent(`Hi, I want to order ${product.name} from Maa Organics.`);
    window.open(`https://wa.me/${CONTACT_PHONE_NUMBER}?text=${message}`, '_blank');
  };

  const rating = (product.id.charCodeAt(0) % 2) + 4; // pseudo-random rating 4 or 5
  const reviewCount = (product.id.charCodeAt(product.id.length-1) % 200) + 50;


  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg w-full">
      <div className="flex items-center">
        <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 relative bg-card">
          <div className="aspect-square relative h-full">
            {image ? (
              <Image
                src={image.imageUrl}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 25vw, 33vw"
                className="object-cover"
                data-ai-hint={image.imageHint}
              />
            ) : (
              <div className="w-full h-full bg-secondary flex items-center justify-center">
                <span className="text-muted-foreground text-xs text-center">No Image</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex flex-col p-3 flex-grow">
          <CardContent className="p-0 flex-grow flex flex-col justify-between">
            <div>
              <h2 className="font-headline text-base md:text-lg font-semibold leading-tight">{product.name}</h2>
              <p className="mt-1 text-xs md:text-sm text-muted-foreground hidden sm:block">{product.description}</p>
              <div className="flex items-center mt-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground ml-2">({reviewCount})</p>
              </div>
              <p className="font-semibold text-base md:text-lg mt-2">{product.price}</p>
            </div>
            
            <Button onClick={handleOrder} className="w-full mt-2 bg-accent hover:bg-accent/90 text-accent-foreground text-xs md:text-sm h-8 md:h-9">
              Order Now
            </Button>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}

