export abstract class View<T> {
    protected element: HTMLElement;

    constructor(selector: string) {
        const element: Element = document.querySelector(selector);
        if(!element) {
            throw Error(`The selector ${selector} is invalid!`);
        }
        this.element = <HTMLElement>element;
    }

    protected abstract template(model: T): string;

    update(model: T): void {
        const template = this.template(model)
        this.element.innerHTML = template;
    }
}