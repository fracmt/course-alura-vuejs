import { Transactions } from "../models/transactions.js";

export class TransactionsView {
    private element: HTMLElement;

    constructor(selector: string) {
        this.element = document.querySelector(selector);
    }

    template(model: Transactions): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Quantity</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                ${model.list().map(transaction => {
            return `
                        <tr>
                            <td>${new Intl.DateTimeFormat().format(transaction.date)}</td>
                            <td>${transaction.quantity}</td>
                            <td>${transaction.value}</td>
                        </tr>
                    `;
        }).join('')}
            </tbody>
        </table>
        `;
    }

    update(model: Transactions): void {
        const template = this.template(model)
        this.element.innerHTML = template;
    }
}