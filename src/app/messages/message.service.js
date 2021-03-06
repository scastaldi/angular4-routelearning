"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var MessageService = (function () {
    function MessageService(router) {
        this.router = router;
        this.messages = [];
    }
    MessageService.prototype.addMessage = function (message) {
        var currentDate = new Date();
        this.messages.unshift(message + ' at ' + currentDate.toLocaleString());
    };
    MessageService.prototype.open = function () {
        this.router.navigate([{ outlets: { popup: ['messages'] } }]);
        this.isDisplayed = true;
    };
    MessageService.prototype.close = function () {
        // Close the popup.
        this.router.navigate([{ outlets: { popup: null } }]);
        this.isDisplayed = false;
    };
    return MessageService;
}());
MessageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], MessageService);
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map