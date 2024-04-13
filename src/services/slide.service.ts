import { Slide } from "../models/slide.model"

export const getAll = () => {
  return Slide.find({ is_show: true })
}