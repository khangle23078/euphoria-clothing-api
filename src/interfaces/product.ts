import { ObjectId } from "mongoose"

interface Image {
  url: string,
  public_id: string
}

interface Spec {
  key: string,
  value: string
}

export interface IProduct {
  name: string
  slug: string,
  price: number,
  quantity: number,
  discount: number,
  images: Image[],
  is_host: boolean,
  description: string,
  specs: Spec[],
  category_id: ObjectId
}

