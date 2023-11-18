export interface ShopListState {
  [ShopStateKeys.SHOP_ITEMS]: ShopItem[];
}

export enum ShopStateKeys {
  SHOP_ITEMS = 'shopItems'
}

export interface ShopItem {
  id?: number;
  name: string;
  price: number;
  description: string;
  category?: string;
  image?: string;
  rating?: number;
}
