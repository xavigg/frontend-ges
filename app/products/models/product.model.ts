import { Category } from "@/app/categories/models/category.model";

export interface Product {
  productId: number;
  name: string;
  price: number;
  details: string;
  warranty: number;
  img_url: string;
  categoryId: number;
  brandId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  category: Category;
  brand: Brand;
}

export interface Brand {
  brandId: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
