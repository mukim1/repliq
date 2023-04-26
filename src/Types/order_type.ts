// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export interface Converter {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  from: number;
  to: number;
  data: Order[];
}

export interface Order {
  _id: string;
  order_id?: string;
  brand_id: BrandID;
  user_id: null | string;
  order_type: OrderType;
  order_items: OrderItem[];
  total?: number;
  order_status?: string;
  timeline?: Timeline[];
}

export enum BrandID {
  The63726F4D4D1B8Ce66087454A = "63726f4d4d1b8ce66087454a",
}

export interface OrderItem {
  product_id: string;
  quantity: number;
  sell_price?: number;
  //   product_id: ProductID;
}

// export enum ProductID {
//   The63739D9Be9A830Ac43B6B65F = "63739d9be9a830ac43b6b65f",
//   The63739D9Be9A830Ac43B6B660 = "63739d9be9a830ac43b6b660",
//   The637446Fb5966Aaaf591421Da = "637446fb5966aaaf591421da",
//   The6374472D5966Aaaf591421DB = "6374472d5966aaaf591421db",
// }

export enum OrderType {
  Offline = "offline",
}

export interface Timeline {
  message: string;
  status: string;
  date: string;
}
