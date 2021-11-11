import { getRepository } from 'typeorm';
import { Request , Response } from 'express';
import { User } from '../entity/User';
import { typeUser, typeUserAuth } from '../types/User';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

export const authenticate = async(req: Request , res: Response) => {

    const user: typeUserAuth = req.body

    const userC: typeUser = await getRepository(User).findOne({ email: user.email })

    if(!userC) { 
        return res.json({ error: 'User not found' })
    } 

    const comparePss = await compare(user.password , userC.password)

    if(!comparePss){
        return res.json({ error: 'Wrong Password' })
    }

    const token = sign({} , process.env.SECRET_JWT, {
        subject: userC.name,
    })

    userC.password = undefined

    return res.json({ userC , token })
}