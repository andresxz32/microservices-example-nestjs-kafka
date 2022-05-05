import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ length: 500 })
    name: string;
  
    @Column({ length: 500 })
    last_name: string;
  
    @Column()
    quantity_videos: number;
}
