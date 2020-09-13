import { EntityRepository, Repository } from "typeorm";
import Transaction from "../models/transaction";

@EntityRepository(Transaction)
class TransactionRepository extends Repository<Transaction> {
  public async FindTransaction(id: string): Promise<Transaction | null> {
    const findTransaction = await this.findOne(id);

    return findTransaction || null;
  }

  public async FindTransactions(): Promise<Transaction[] | null> {
    const findTransaction = await this.find({
      join: {
        alias: "category",
        leftJoinAndSelect: {
          description: "category.description",
        },
      },
    });

    return findTransaction || null;
  }

  public async Create(transaction: Transaction): Promise<Transaction | null> {
    const createdTransaction = await this.create(transaction);

    return createdTransaction || null;
  }
}
