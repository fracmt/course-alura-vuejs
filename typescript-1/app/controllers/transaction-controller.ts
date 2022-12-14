import { Weekdays } from "../enums/weekdays.js";
import { Transaction } from "../models/transaction.js";
import { Transactions } from "../models/transactions.js";
import { MessageView } from "../views/message-view.js";
import { TransactionsView } from "../views/transactions-view.js";

export class TransactionController {
    private inputDate: HTMLInputElement;
    private inputQuantity: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private transactions = new Transactions();
    private transactionsView = new TransactionsView("#transactionsView");
    private messageView = new MessageView('#messageView');

    constructor() {
        this.inputDate = document.querySelector('#date');
        this.inputQuantity = document.querySelector('#quantity');
        this.inputValue = document.querySelector('#value');
        this.transactionsView.update(this.transactions);
    }

    public addTransaction(): void {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ','));

        if(!this.isBusinessDay(date)) {
            this.messageView.update('Only weekdays are allowed')
            return ;
        }

        const transaction = new Transaction(
            date,
            parseInt(this.inputQuantity.value),
            parseFloat(this.inputValue.value)
        )
        this.transactions.add(transaction);        
        this.cleanForm();
        this.updateView();
    }
    
    private cleanForm(): void {
        this.inputDate.value = '';
        this.inputQuantity.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }

    private isBusinessDay(date: Date) {
        return date.getDay() > Weekdays.SUNDAY && date.getDay() < Weekdays.SATURDAY;
    }
    
    private updateView() {
        this.transactionsView.update(this.transactions);
        this.messageView.update('Transaction saved!');
    }
}