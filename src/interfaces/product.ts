import { Types } from "mongoose"
import { Image } from "./image"

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
  category_id: Types.ObjectId
}

