import { UserService } from './../service/UserService';
import {Request, Response} from 'express'
import User from '../schema/User'

class UserController {
  public async index (req: Request, res:Response): Promise<Response>{
   try{
    const users = await UserService.getUsers()
    return res.status(200).json(users)
    

   } catch(err){
    return res.status(400).json({message: err})
   }

   

   
  }

  public async create (req: Request, res:Response): Promise<Response>{
    const user = await User.create(req.body)

    try{
      const users = await UserService.createUsers(user)
      return res.status(201).json(users)
    } catch(err){
      return res.status(400).json({message: err})
    }




  }

  public async delete (req:Request, res:Response): Promise<Response>{
    const id = req.params.id

    
    

    try{
      const user = await UserService.deleteUsers(id)
      return res.status(201).json(user)


    } catch(err){
      return res.status(400).json({message: err})
    }
  }

  public async update (req:Request, res:Response): Promise<Response>{
    const id = req.params.id
    const user = req.body
    try{
      const users = await UserService.updateUsers(id,user)
      return res.status(200).json(users)
    } catch(err){
      return res.status(400).json({message: err})
    }
  }




}


export default new UserController()