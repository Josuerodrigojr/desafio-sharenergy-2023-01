import {Schema, model, Document} from 'mongoose'


interface UserInterface extends Document{
  userName: string
  firstName: string
  lastName: string
  password: string
  cpf: string
  endereco: string
  telefone: string
}

const userSchema = new Schema ({
  userName: String,
  firstName: String,
  lastName: String,
  password: String,
  cpf: String,
  endereco: String,
  telefone: String
}, {
  timestamps: true
})




export default model<UserInterface>('User', userSchema);