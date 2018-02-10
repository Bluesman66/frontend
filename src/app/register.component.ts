import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ApiService } from './api.service';

@Component({
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

    form;

    constructor(private api: ApiService, private fb: FormBuilder) {
        this.form = fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    ngOnInit() {
    }

    register() {
        console.log(this.form);
    }
}
