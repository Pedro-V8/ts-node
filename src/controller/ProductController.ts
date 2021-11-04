import { getRepository } from "typeorm";
import { Product } from "../entity/Product";
import { Request , Response } from 'express';

type typeProduct = {
    name: String,
    model: String,
    quantity: String,
}

export const getProducts = async(req: Request , res: Response) => {
    const products = await getRepository(Product).find()
    return res.status(200).json(products)
}

export const postProducts = async(req: Request , res: Response) => {
    const prod: typeProduct = req.body
    try {
        if(prod.name === '' || prod.model === ''){
            return res.status(400).send({ error: 'Empty Fields' })
        }else if(+prod.quantity < 0){
            return res.status(400).send({ error: 'Wrong Quantity' })
        }else{
            const product = await getRepository(Product).save(req.body)
            return res.status(200).json(product)
        }
    } catch (error) {
        return res.status(400).send({ error: 'Error Registration' })
    }

}

export const updateProduct = async(req: Request , res: Response) => {
    const { id } = req.params

    const product = await getRepository(Product).update(id , req.body)
    if(product.affected === 1){
        const productUpdated = await getRepository(Product).findOne(id)
        return res.json(productUpdated)
    }
    
    return res.status(404).json({ error: 'Product not found' }) 
}

export const deleteProduct = async (req: Request , res: Response) => {
    const { id } = req.params
    const product = await getRepository(Product).delete(id)

    if(product.affected === 1) {
        const productDeleted = await getRepository(Product).findOne(id)
        return res.json({ message: 'Product Deleted' })
    }

    return res.status(404).json({ message: 'Product not found' })
}