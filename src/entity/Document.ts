import { Column, Entity, PrimaryGeneratedColumn , CreateDateColumn  , UpdateDateColumn , ManyToOne, JoinColumn } from 'typeorm';
import { User } from './User';

@Entity()
export class Document {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    link: string;

    @ManyToOne(type => User , users => User) 
    @JoinColumn()  
    user: User;

    @Column()
    userId: number;
 
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date; 
}