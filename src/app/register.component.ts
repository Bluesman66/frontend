import { Component, OnInit } from '@angular/core';

import { ApiService } from './api.service';

@Component({
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

    constructor(private api: ApiService) {}

    ngOnInit() {
    }
}
