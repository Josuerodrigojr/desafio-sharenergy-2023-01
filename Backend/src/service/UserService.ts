import User from "../schema/User";




export const UserService ={
  getUsers: async()=>{

    const users = await User.find()
    return users



  },

  createUsers: async(user:Object)=>{
    const users = await User.create(user)
    return users
  },

  deleteUsers: async(id:string)=>{
    const user = await User.findByIdAndDelete(id)

    return user
  },

  updateUsers: async(id:string, user:object)=>{
    const users = await User.findByIdAndUpdate(id, user)
    return users
  }
}