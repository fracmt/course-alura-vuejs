import { Transactions } from "../models/transactions.js";
import { View } from "./view.js";

export class TransactionsView extends View<Transactions> {

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
}