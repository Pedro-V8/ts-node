import { getRepository } from "typeorm";
import { Product } from "../entity/Product";
import { Request , Response } from 'express';

type Produto = {
    name: String,
    model: String,
    quantity: String,
}

export const getProducts = async(req: Request , res: Response) => {
    const products = await getRepository(Product).find()
    return res.json(products)
}

export const postProducts = async(req: Request , res: Response) => {
    const prod: Produto = req.body
    try {
        if(prod.name === '' || prod.model === ''){
            return res.status(400).send({ error: 'Empty Fields' })
        }else if(+prod.quantity < 0){
            return res.status(400).send({ error: 'Wrong Quantity' })
        }else{
            const product = await getRepository(Product).save(req.body)
            return res.json(product)
        }
    } catch (error) {
        console.log(prod.name)
        return res.status(400).send({ error: 'Error Registration' })
    }

}

export const updateProducts = async(req: Request , res: Response) => {}