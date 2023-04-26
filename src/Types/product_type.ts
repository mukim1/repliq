export interface Products {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  from: number;
  to: number;
  data: Product[];
}

export interface Product {
  id: string;
  product_id: string;
  brand_id: string;
  img: string;
  name: string;
  unit_price: number;
  sell_price: number;
  quantity: number;
  quantity_type: string;
  is_published: boolean | null;
  created_at: string;
  updated_at: string;
  meta: Meta;
}

export interface Meta {
  title: string;
  keywords: string[];
  description: string;
}
