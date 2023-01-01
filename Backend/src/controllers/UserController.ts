import {Request, Response} from 'express'
import User from '../schema/User'

class UserController {
  public async index (req: Request, res:Response): Promise<Response>{
   const users = await User.find()

   return res.json(users)
  }

  public async create (req: Request, res:Response): Promise<Response>{
    const user = await User.create(req.body)



    return res.json(user)
  }

  public async 
}


export default new UserController()