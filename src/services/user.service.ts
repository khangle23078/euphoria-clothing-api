import { IUser } from "../interfaces/user"
import { User } from "../models/user.model"

export const getByEmail = (email: string) => {
  return User.findOne({ email: email })
}

export const findById = (id: string) => {
  return User.findById(id)
}

export const insert = (data: IUser) => {
  return User.create(data)
}

export const updateById = (id: string, data: IUser) => {
  return User.findByIdAndUpdate(id)
}