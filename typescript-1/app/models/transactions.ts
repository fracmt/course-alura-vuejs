import { Transaction } from "./transaction.js";

export class Transactions {
    private transactions: Array<Transaction> = [];

    add(transaction: Transaction) {
        this.transactions.push(transaction);
    }

    list(): ReadonlyArray<Transaction> {
        return this.transactions;
    }
}