import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { AuthService } from './user/auth.service';
import { MessageService } from './messages/message.service';
@Component({
    selector: 'pm-app',
    templateUrl: './app/app.component.html'
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
        this.router.events.subscribe((routerEvent: Event) => {
            this.checkRouterEvent(routerEvent);
        });
    }
    pageTitle: string = 'Acme Product Management';
    loading: boolean = false;
    
    constructor(
        private authService: AuthService,
        private router: Router,
        private messageService: MessageService) {}
        
        logOut(): void {
            this.authService.logout();
            this.router.navigateByUrl('/welcome');
            console.log('Log out');
        }

        checkRouterEvent(routerEvent: Event): void {

            if (routerEvent instanceof NavigationStart){
                this.loading = true;
            }

            if (routerEvent instanceof NavigationEnd ||
                routerEvent instanceof NavigationCancel ||
                routerEvent instanceof NavigationError){
                    this.loading = false;
                }
        }

        displayMessages() {
            this.messageService.open();
        }

        hideMessages() {
            this.messageService.close();
        }
}
