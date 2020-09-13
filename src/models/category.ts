import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";

import Transaction from "./transaction";

@Entity("transactions")
class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  description: string;

  @OneToMany((type) => Transaction, (transaction) => transaction.category)
  transaction: Transaction;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Category;
