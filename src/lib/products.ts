
export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Dry Fruits' | 'Dals & Pulses' | 'Masale' | 'General Items';
  imageId: string;
};

export const products: Product[] = [
  {
    id: 'df-01',
    name: 'Almonds',
    description: 'Premium quality California almonds.',
    price: '₹250 / 250g',
    category: 'Dry Fruits',
    imageId: 'almonds',
  },
  {
    id: 'df-02',
    name: 'Cashews',
    description: 'Whole, creamy W320 cashews.',
    price: '₹280 / 250g',
    category: 'Dry Fruits',
    imageId: 'cashews',
  },
  {
    id: 'df-03',
    name: 'Raisins',
    description: 'Sweet and juicy seedless raisins.',
    price: '₹120 / 250g',
    category: 'Dry Fruits',
    imageId: 'raisins',
  },
  {
    id: 'dp-01',
    name: 'Toor Dal',
    description: 'Unpolished split pigeon peas.',
    price: '₹80 / 500g',
    category: 'Dals & Pulses',
    imageId: 'toor-dal',
  },
  {
    id: 'dp-02',
    name: 'Moong Dal',
    description: 'Split and skinned green gram.',
    price: '₹90 / 500g',
    category: 'Dals & Pulses',
    imageId: 'moong-dal',
  },
  {
    id: 'dp-03',
    name: 'Chana Dal',
    description: 'Split chickpeas, rich in protein.',
    price: '₹75 / 500g',
    category: 'Dals & Pulses',
    imageId: 'chana-dal',
  },
  {
    id: 'ma-01',
    name: 'Turmeric Powder',
    description: 'Aromatic and authentic Haldi powder.',
    price: '₹60 / 200g',
    category: 'Masale',
    imageId: 'turmeric',
  },
  {
    id: 'ma-02',
    name: 'Chili Powder',
    description: 'Spicy and vibrant red chili powder.',
    price: '₹70 / 200g',
    category: 'Masale',
    imageId: 'chili-powder',
  },
  {
    id: 'ma-03',
    name: 'Garam Masala',
    description: 'A blend of aromatic whole spices.',
    price: '₹95 / 100g',
    category: 'Masale',
    imageId: 'garam-masala',
  },
  {
    id: 'gi-01',
    name: 'Organic Honey',
    description: 'Raw and unprocessed Himalayan honey.',
    price: '₹350 / 500g',
    category: 'General Items',
    imageId: 'organic-honey',
  },
  {
    id: 'gi-02',
    name: 'Jaggery Powder',
    description: 'Natural and unrefined sugarcane jaggery.',
    price: '₹110 / 500g',
    category: 'General Items',
    imageId: 'jaggery',
  },
  {
    id: 'gi-03',
    name: 'Desi Ghee',
    description: 'Pure cow ghee made traditionally.',
    price: '₹400 / 500ml',
    category: 'General Items',
    imageId: 'ghee',
  },
];
