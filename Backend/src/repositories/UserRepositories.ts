import User from "../schema/User";



export const UserRepository ={
  //Encontrar todos os usuários cadastrados no banco de dados

  getUsers: async()=>{
    return await User.find()
  },
  //Cadastrar novos usuários

  createUsers: async(user:Object)=>{
    return await User.create(user)

  },

  deleteUsers: async(id:string)=>{
    return await User.findByIdAndDelete(id)
  },

  updateUsers: async(id:string, user:object)=>{
    return await User.findByIdAndUpdate(id, user)
  },

  getUsersCPF: async (cpf:string)=>{
    return await User.findOne({cpf})
    
  },
  getUsersUserName: async (userName:string)=>{
    return await User.findOne({userName}) 
  },

  
}