import {Router} from 'express'

import UserController from './controllers/UserController'

const routes = Router()

routes.get('/users', UserController.index)
routes.get('/users/:id', UserController.getId)
routes.post('/users', UserController.create)
routes.post('/users/login', UserController.login)
routes.post('/users/loginCpf', UserController.loginRemember)
routes.delete('/users/:id', UserController.delete)
routes.patch('/users/:id', UserController.update)


export default routes