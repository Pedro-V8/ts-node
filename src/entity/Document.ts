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

    @ManyToOne(() => User , (user: User) => user.documents) 
    @JoinColumn()
    user: User;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date; 
}