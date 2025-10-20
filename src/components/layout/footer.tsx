import Link from 'next/link';
import { Sprout, Instagram, Facebook } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';
import { WhatsappIcon } from '@/components/icons/whatsapp-icon';

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Sprout className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">Maa Organics</span>
          </Link>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Maa Organics. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <Link href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <WhatsappIcon className="h-6 w-6" />
              <span className="sr-only">WhatsApp</span>
            </Link>
            <Link href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
