import { UserService } from './../service/UserService';
import {Request, Response} from 'express'


class UserController {
  public async index (req: Request, res:Response): Promise<Response>{
   const response = await UserService.getUsers();
   
   return res.status(response.statusCode).json(response.data)

   

   
  }

  public async create (req: Request, res:Response): Promise<Response>{
    const {cpf, firstName, lastName, userName, password, endereco, telefone} = req.body;
    const response = await UserService.createUsers(cpf, firstName, lastName, userName,password, endereco, telefone)
    return res.status(response.statusCode).json(response.data)
    




  }

  public async delete (req:Request, res:Response): Promise<Response>{
    const id = req.params.id

    const response = await UserService.deleteUsers(id)
    return res.status(response.statusCode).json(response.data)
    
    

  }

  public async update (req:Request, res:Response): Promise<Response>{
    const id = req.params.id
    const {userName, firstName, lastName, password, cpf, endereco, telefone} = req.body
    const response = await UserService.updateUsers(id, userName, firstName, lastName, password, cpf, endereco, telefone)
    return res.status(response.statusCode).json(response.data)
  }

  public async login(req:Request, res:Response): Promise<Response>{
    const {userName, password} = req.body


    const response = await UserService.loginUsers(userName, password)
    return res.status(response.statusCode).json(response.data)
  }

  public async loginRemember(req:Request, res:Response): Promise<Response>{
    const {cpf} = req.body
    const response = await UserService.loginRemember(cpf)
    return res.status(response.statusCode).json(response.data)
  }

  public async getId(req:Request, res:Response): Promise<Response>{
    const {id} = req.params
    const response = await UserService.getId(id)
    return res.status(response.statusCode).json(response.data)
  }

}


export default new UserController()