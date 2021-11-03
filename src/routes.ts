import { Router , Request , Response  } from 'express';
import { getProducts , postProducts } from './controller/ProductController';

const routes = Router();

routes.get('/' , (req: Request , res: Response) => {
    return res.json({ ok: 'True'})
})
routes.get('/products' , getProducts)
routes.post('/products' , postProducts)

export default routes

