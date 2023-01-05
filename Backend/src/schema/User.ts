import {Schema, model, Document} from 'mongoose'


interface UserInterface extends Document{
  userName: string
  firstName: string
  lastName: string
  password: string
  cpf: string
}

const userSchema = new Schema ({
  userName: String,
  firstName: String,
  lastName: String,
  password: String,
  cpf: String
}, {
  timestamps: true
})




export default model<UserInterface>('User', userSchema);