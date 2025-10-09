export type ProductCard = {
  id: number;
  image: string;
  name: string;
  price: {
    new: number;
    old: number;
  };
  info: string;
  availability: {
    moscow: number;
    orenburg: number;
    saintPetersburg: number;
  };
  type?: [string];
  rating: number;
  goodsOfDay: boolean;
};

export type AccordionProps = {
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  question: string;
  answer1: string;
  answer2?: string;
};

export type CheckProductProps = {
  id: number;
  name: string;
  type: [string];
  count: number;
};

export type HeaderLocationProps = {
  city: string;
  isOpenLocation: boolean;
  onLocationClose: () => void;
  onCityChange: (city: string) => void;
};

export type HeaderProps = {
  isOpen: boolean;
  onClose: () => void;
};

export type HeaderBasketProps = {
  isOpenBasket: boolean;
  onBasketClose: () => void;
};

// Catalog
export type CatalogRender = {
  products: ProductCard[];
  productCount: number;
  currentPage: number;
};
