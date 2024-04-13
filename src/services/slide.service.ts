import { ISlide } from "../interfaces/slide"
import { Slide } from "../models/slide.model"

export const getAll = () => {
  return Slide.find({ is_show: true })
}

export const insert = (data: ISlide) => {
  return Slide.create(data)
}

export const updateById = (id: string, data: ISlide) => {
  return Slide.findByIdAndUpdate(id, data)
}

export const deleteById = (id: string) => {
  return Slide.findByIdAndDelete(id)
}