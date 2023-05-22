import { Entity, Column, ObjectIdColumn, ObjectId, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { Exclude, Transform, } from 'class-transformer';
import { ExposeId } from '@chatter-box/utils';

@Entity({ name: 'users' })
export class User {
    
  @ObjectIdColumn({ name: '_id' })
  @ExposeId()
  @Transform(({ value }) => String(value), { toPlainOnly: true })
  _id?: ObjectId;

  @Column()
  @Exclude({ toPlainOnly: true })
  version: number;

  @Column()
  username: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  is_active: boolean;

  @CreateDateColumn()
  @Exclude({ toPlainOnly: true })
  created_at?: Date;

  @UpdateDateColumn()
  @Exclude({ toPlainOnly: true })
  updated_at?: Date;

  @DeleteDateColumn()
  @Exclude({ toPlainOnly: true })
  deleted_at?: Date;

}
