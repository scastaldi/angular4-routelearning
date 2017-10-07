import { Component } from '@angular/core';

@Component({
   // selector: 'app-home', // not need bc using routes
    templateUrl: './app/home/welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
}
