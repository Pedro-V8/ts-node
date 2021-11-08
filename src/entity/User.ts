import {Column , Entity , PrimaryGeneratedColumn , CreateDateColumn  , UpdateDateColumn } from 'typeorm';

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

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
