import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_PHONE_NUMBER, SOCIAL_LINKS } from '@/lib/constants';
import { WhatsappIcon } from '@/components/icons/whatsapp-icon';

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 md:py-20 flex items-center justify-center">
      <Card className="w-full max-w-lg shadow-lg">
        <CardHeader className="text-center p-6">
          <CardTitle className="text-3xl font-bold font-headline">Get in Touch</CardTitle>
          <CardDescription>We'd love to hear from you. Here's how you can reach us.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 p-6">
          <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white" size="lg">
            <Link href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
              <WhatsappIcon className="mr-2 h-5 w-5 fill-white" /> Contact via WhatsApp
            </Link>
          </Button>
          <Button asChild className="w-full" size="lg" variant="outline">
            <Link href={`tel:${CONTACT_PHONE_NUMBER}`}>
              <Phone className="mr-2 h-5 w-5" /> Call Us: +{CONTACT_PHONE_NUMBER}
            </Link>
          </Button>
          <Button asChild className="w-full" size="lg" variant="outline">
            <Link href={`mailto:${CONTACT_EMAIL}`}>
              <Mail className="mr-2 h-5 w-5" /> Email Us: {CONTACT_EMAIL}
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
