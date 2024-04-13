import { ISlide } from "../interfaces/slide"
import { Slide } from "../models/slide.model"

export const getAll = () => {
  return Slide.find({ is_show: true })
}

export const insert = (data: ISlide) => {
  return Slide.create(data)
}