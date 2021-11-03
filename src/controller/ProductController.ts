import { getRepository } from "typeorm";
import { Product } from "../entity/Product";
import { Request , Response } from 'express';

export const getProducts = async(req: Request , res: Response) => {
    const products = await getRepository(Product).find()
    return res.json(products)
}

export const postProducts = async(req: Request , res: Response) => {
    const product = await getRepository(Product).save(req.body)
    return res.json(product)
}