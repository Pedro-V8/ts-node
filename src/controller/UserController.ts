import {getRepository, Repository} from "typeorm";
import { hash } from "bcryptjs";
import { Request, Response } from "express";
import { User } from "../entity/User";

type typeUser = {
    name: string,
    email: string,
    password: string,
    is_admin: boolean,
    is_active: boolean
}

export const getUsers = async(req: Request , res: Response) => {
    const users = await getRepository(User).find()
    return res.status(200).json(users)
}

export const createUser = async(req: Request , res: Response) => {
    const userReq: typeUser = req.body
    const existUser = await getRepository(User).findOne({ email: userReq.email })

    if(existUser) {
        return res.status(400).json({ error: 'User alredy exists' })
    }

    const passwodHash = await hash(userReq.password , 8)
    userReq.password = passwodHash
    // console.log(userReq.email) 
    const user = await getRepository(User).save(userReq);
    return res.status(200).json({ sucess: true })
} 

export const updateUser = async(req: Request , res: Response) => {
    const { id } = req.params
    const { name , email , is_admin , is_active } = req.body
    if(req.body.password){
        return res.json({ error: 'cannot update password here' })
    }
    const user = await getRepository(User).update(id , {
        name,
        email,
        is_admin,
        is_active
    })
    if(user.affected === 1){
        const userUpdated = await getRepository(User).findOne(id)
        return res.json(userUpdated)
    }
    
    return res.status(404).json({ error: 'User not found' }) 
}

export const deleteUser = async (req: Request , res: Response) => {
    const { id } = req.params
    const user = await getRepository(User).delete(id)

    if(user.affected === 1) {
        const userDeleted = await getRepository(User).findOne(id)
        return res.json({ message: 'User Deleted' })
    }

    return res.status(404).json({ message: 'User not found' })
}