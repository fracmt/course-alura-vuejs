import { Transaction } from "../models/transaction.js";

export class TransactionController {
    private inputDate: HTMLInputElement;
    private inputQuantity: HTMLInputElement;
    private inputValue: HTMLInputElement;

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
    }
}