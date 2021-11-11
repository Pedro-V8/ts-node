import { getRepository } from "typeorm";
import { Document } from "../entity/Document";
import { Request , Response } from 'express';
import { User } from "../entity/User";

type typeDocument = {
    title: string,
    description: string,
    link: string,
    userId: number
}

export const getDocuments = async(req: Request , res: Response) => {
    const documents = await getRepository(Document).find()
    return res.status(200).json(documents)
}

export const postDocuments = async(req: Request , res: Response) => {
    const doc: typeDocument = req.body
    const document = await getRepository(Document).save(doc)
    return res.json(document)
}

export const updateDocument = async(req: Request , res: Response) => {
    const { id } = req.params

    const document = await getRepository(Document).update(id , req.body)
    if(document.affected === 1){
        const documentUpdated = await getRepository(Document).findOne(id)
        return res.json(documentUpdated)
    }
    
    return res.status(404).json({ error: 'Document not found' }) 
}

export const deleteDocument = async (req: Request , res: Response) => {
    const { id } = req.params
    const document = await getRepository(Document).delete(id)

    if(document.affected === 1) {
        const documentDeleted = await getRepository(Document).findOne(id)
        return res.json({ message: 'Document Deleted' })
    }

    return res.status(404).json({ message: 'Document not found' })
}