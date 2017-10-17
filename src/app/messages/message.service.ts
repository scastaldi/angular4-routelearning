import { Injectable } from '@angular/core';
import { Router } from '@angular/router';    

@Injectable()
export class MessageService {
    private messages: string[] = [];
    public isDisplayed: boolean;

    constructor(private router: Router) { }

    addMessage(message: string): void {
        let currentDate = new Date();
        this.messages.unshift(message + ' at ' + currentDate.toLocaleString());
    }

    open() {
        this.router.navigate([{ outlets: { popup: ['messages']}}]);
        this.isDisplayed = true;
    }

    close(): void {
        // Close the popup.
        this.router.navigate([{ outlets: { popup: null}}]);
        this.isDisplayed = false;
    }
}
