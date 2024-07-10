export type TProducts = {
  _id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  rating?: number;
  thumbnail: string;
  imageGallery?: string[];
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};
