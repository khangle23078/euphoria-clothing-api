import { IUser } from "../interfaces/user"
import { User } from "../models/user.model"

export const getByEmail = (email: string) => {
  return User.findOne({ email: email })
}

export const insert = (data: IUser) => {
  return User.create(data)
}