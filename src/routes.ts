import { Router , Request , Response  } from 'express';
import { getProducts , postProducts , updateProduct , deleteProduct } from './controller/ProductController';
import { getUsers , getUserById , createUser , updateUser , deleteUser } from './controller/UserController'

const routes = Router();

routes.get('/' , (req: Request , res: Response) => {
    return res.json({ ok: 'True'})
})

// Products Routes
routes.get('/products' , getProducts)
routes.post('/products' , postProducts)
routes.put('/products/:id' , updateProduct)
routes.delete('/products/:id' , deleteProduct)

// Users Routes
routes.get('/users' , getUsers)
routes.get('/user/:id' , getUserById)
routes.post('/users' , createUser)
routes.put('/users/:id' , updateUser)
routes.delete('/users/:id' , deleteUser)


export default routes

