import { Router , Request , Response  } from 'express';
import { getProducts , postProducts , updateProduct , deleteProduct } from './controller/ProductController';

const routes = Router();

routes.get('/' , (req: Request , res: Response) => {
    return res.json({ ok: 'True'})
})
routes.get('/products' , getProducts)
routes.post('/products' , postProducts)
routes.put('/products/:id' , updateProduct)
routes.delete('/products/:id' , deleteProduct)


export default routes

