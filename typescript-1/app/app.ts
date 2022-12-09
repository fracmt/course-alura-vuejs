import { TransactionController } from "./controllers/transaction-controller.js";

const controller = new TransactionController();
const form = document.querySelector('#form-transaction');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.addTransaction();
})