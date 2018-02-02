import { Component, OnInit } from '@angular/core';

import { ApiService } from './api.service';

@Component({
    selector: 'questions',
    templateUrl: './questions.component.html'
})
export class QuestionsComponent implements OnInit {

    question = {};
    questions;

    constructor(private api: ApiService) { }

    ngOnInit(): void {
        this.api.getQuestions()
            .subscribe(response => {
                this.questions = response;
            });
    }

    post(question) {
        this.api.postQuestion(question);
    }
}
