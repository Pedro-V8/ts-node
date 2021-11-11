import { getRepository } from 'typeorm';
import { Request , Response } from 'express';
import { User } from '../entity/User';
import { typeUser, typeUserAuth } from '../types/User';
import { compare } from 'bcryptjs';

export const authenticate = async(req: Request , res: Response) => {
    const user: typeUserAuth = req.body
    const userC: typeUser = await getRepository(User).findOne(user.email)

    if(!userC) {
        return res.send({ error: 'User not found' })
    } 
}