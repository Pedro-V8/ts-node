import { Router , Request , Response  } from 'express';
import { getDocuments , postDocuments , updateDocument , deleteDocument } from './controller/DocumentController';
import { getUsers , getUserById , createUser , updateUser , deleteUser } from './controller/UserController';
import { authenticate } from './controller/AuthController';

const routes = Router();

routes.get('/' , (req: Request , res: Response) => {
    return res.json({ ok: 'True'})
})

// Document Routes
routes.get('/documents' , getDocuments)
routes.post('/documents' , postDocuments)
routes.put('/documents/:id' , updateDocument)
routes.delete('/documents/:id' , deleteDocument)

// Users Routes
routes.get('/users' , getUsers)
routes.get('/user/:id' , getUserById)
routes.post('/users' , createUser)
routes.put('/users/:id' , updateUser)
routes.delete('/users/:id' , deleteUser)

// Auth Route
routes.post('/auth' , authenticate)


export default routes

