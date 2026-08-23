export const CATEGORIES = [
  {
    id: 'dehydrated-powders',
    name: 'Dehydrated Powders',
    shortDesc: 'Sun & low-temperature dehydrated vegetable powders offering long shelf life and natural flavor retention.',
    mainImage: '/products/tomato.jpg',
    products: ['Premium Tomato Powder', 'Dehydrated Onion Powder', 'Dehydrated Garlic Powder'],
    count: '15+ Varieties'
  },
  {
    id: 'superfoods',
    name: 'Superfoods',
    shortDesc: 'Nutrient-dense organic herbal powders harvested at peak maturity and cold-milled under strict export standards.',
    mainImage: '/products/moringa.jpg',
    products: ['Organic Moringa Powder', 'Curry Leaf Powder', 'Mint Leaf Powder'],
    count: '10+ Varieties'
  },
  {
    id: 'spices',
    name: 'Spices',
    shortDesc: 'Pure Indian whole and ground spices direct from certified spice belts, rich in aromatic essential oils.',
    mainImage: '/products/turmeric.jpg',
    products: ['Turmeric Powder (High Curcumin)', 'Red Chilli Powder', 'Cumin Seeds'],
    count: '20+ Varieties'
  },
  {
    id: 'vegetables',
    name: 'Dehydrated Vegetables',
    shortDesc: 'Dehydrated vegetable flakes and granules maintaining crop integrity, natural aroma, and zero moisture compromise.',
    mainImage: '/products/beetroot.jpg',
    products: ['Beetroot Flakes', 'Dehydrated Carrot', 'Dehydrated Capsicum'],
    count: '18+ Varieties'
  }
];

export const PRODUCTS = [
  {
    id: 'tomato-powder',
    slug: 'tomato-powder',
    name: 'Premium Tomato Powder',
    category: 'Dehydrated Powders',
    image: '/products/tomato.jpg',
    origin: 'Maharashtra, India',
    description: '100% natural spray-dried and dehydrated tomato powder. Features fast cold-water solubility (98.5%) and rich natural lycopene content ideal for instant soups, sauces, and seasonings.',
    specs: {
      'Solubility': '98.5% Dispersible',
      'Moisture': 'Max 4.5%',
      'pH Value': '4.0 - 4.5'
    }
  },
  {
    id: 'moringa-powder',
    slug: 'moringa-powder',
    name: 'Moringa',
    category: 'Superfoods',
    image: '/products/moringa.jpg',
    origin: 'Tamil Nadu, India',
    description: 'Nutrient-dense organic moringa leaf powder harvested at peak maturity and processed under ultra-hygienic cold-milling standards.',
    specs: {
      'Protein Content': '> 27%',
      'Mesh Size': '100 Mesh Fine',
      'Moisture': 'Max 6.0%'
    }
  },
  {
    id: 'turmeric-powder',
    slug: 'turmeric-powder',
    name: 'Turmeric',
    category: 'Spices',
    image: '/products/turmeric.jpg',
    origin: 'Erode, India',
    description: 'High-curcumin Indian turmeric powder ground using low-temperature cryogenic milling to preserve essential oils and bio-active curcumin.',
    specs: {
      'Curcumin Content': '5.2% to 5.8%',
      'Mesh Size': '80 - 100 Mesh'
    }
  },
  {
    id: 'beetroot-powder',
    slug: 'beetroot-powder',
    name: 'Beetroot',
    category: 'Vegetables',
    image: '/products/beetroot.jpg',
    origin: 'Rajasthan, India',
    description: 'Fresh cold-milled beetroot powder rich in natural nitrates and vibrant red betalain pigments. Excellent natural food colorant.',
    specs: {
      'Moisture': 'Max 5.0%',
      'Mesh Size': '80 Mesh'
    }
  },
  {
    id: 'onion-powder',
    slug: 'onion-powder',
    name: 'Onion',
    category: 'Dehydrated',
    image: '/products/onion.jpg',
    origin: 'Gujarat, India',
    description: 'Crisp, white dehydrated onion flakes and powder offering concentrated sweet onion flavor without peeling labor or weeping tears.',
    specs: {
      'Moisture': 'Max 5.0%',
      'Particle Size': '80 - 100 Mesh'
    }
  },
  {
    id: 'garlic-powder',
    slug: 'garlic-powder',
    name: 'Garlic',
    category: 'Dehydrated',
    image: '/products/garlic.jpg',
    origin: 'Madhya Pradesh, India',
    description: 'Pungent, aromatic dehydrated garlic prepared from sound mature garlic bulbs with high allicin retention (>1.2%).',
    specs: {
      'Allicin Content': '> 1.2%',
      'Moisture': 'Max 6.0%'
    }
  }
];

export const PROCESS_STEPS = [
  { step: '01', title: 'Sourcing', desc: 'Direct partnerships with select farmers ensuring raw material excellence at the root level.' },
  { step: '02', title: 'Processing', desc: 'Advanced dehydration and milling techniques preserving essential nutrients and rich flavors.' },
  { step: '03', title: 'Quality Check', desc: 'Rigorous multi-stage laboratory testing aligning with stringent international food safety standards.' },
  { step: '04', title: 'Global Shipping', desc: 'Secure, climate-controlled packaging and efficient logistics guaranteeing pristine arrival worldwide.' }
];
