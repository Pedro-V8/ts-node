import { Column , Entity , PrimaryGeneratedColumn , CreateDateColumn  , UpdateDateColumn , OneToMany, JoinColumn } from 'typeorm';
import { Document } from './Document';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    email: string;

    @Column()
    password: string;

    @Column({
        default: false
    })
    is_admin: boolean;

    @Column({
        default: true
    })
    is_active: boolean;

    @OneToMany(() => Document , document => document.user , {eager: true})
    documents: Document[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
