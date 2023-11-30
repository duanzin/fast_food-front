export type categoryArrayType = {
  category: string;
  image: string;
};

export type FoodOption = {
  category: string;
  options: {
    name: string;
    image: string;
    price: number;
    description: string;
  }[];
};

