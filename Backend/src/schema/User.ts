import {Schema, model, Document} from 'mongoose'

interface UserInterface extends Document{
  email?: string
  firstName?: string
  lastName: string
  password?: string
  cpf?: string
}

const userSchema = new Schema ({
  email: String,
  firstName: String,
  lastName: String,
  password: String,
  cpf: String
}, {
  timestamps: true
})

export default model<UserInterface>('User', userSchema);