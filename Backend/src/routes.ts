import {Router} from 'express'

import UserController from './controllers/UserController'

const routes = Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.create)
routes.post('/users/login', UserController.login)
routes.post('/users/loginRemember', UserController.loginRemember)
routes.delete('/users/:id', UserController.delete)
routes.patch('/users/:id', UserController.update)


export default routes