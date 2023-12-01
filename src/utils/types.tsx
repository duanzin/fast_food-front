export interface categoryArrayType {
  category: string;
  image: string;
}

export interface FoodOptionItem {
  name: string;
  image: string;
  price: number;
  description: string;
}

export interface FoodOption {
  category: string;
  options: FoodOptionItem[];
}

export interface SelectedProduct extends FoodOptionItem {
  quantity: number;
}
