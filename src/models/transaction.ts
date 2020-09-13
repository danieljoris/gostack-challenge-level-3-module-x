import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import Category from "./category";
import { type } from "os";

export enum TransactionType {
  INCOME = "INCOME",
  OUTCOME = "OUTCOME",
}

@Entity("transactions")
class Transaction {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  value: number;

  @Column({
    type: "enum",
    enum: TransactionType,
  })
  type: TransactionType;

  @ManyToOne((type) => Category, (category) => category.transaction)
  category: Transaction;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Transaction;
