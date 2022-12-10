import { Transaction } from "../models/transaction.js";
import { Transactions } from "../models/transactions.js";

export class TransactionController {
    private inputDate: HTMLInputElement;
    private inputQuantity: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private transactions = new Transactions();

    constructor() {
        this.inputDate = document.querySelector('#date');
        this.inputQuantity = document.querySelector('#quantity');
        this.inputValue = document.querySelector('#value');
    }

    addTransaction(): void {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ','));
        const transaction = new Transaction(
            date,
            parseInt(this.inputQuantity.value),
            parseFloat(this.inputValue.value)
        )
        this.transactions.add(transaction);

        this.cleanForm();
    }

    cleanForm(): void {
        this.inputDate.value = '';
        this.inputQuantity.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
}