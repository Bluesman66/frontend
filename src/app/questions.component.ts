import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from './api.service';

@Component({
    selector: 'questions',
    templateUrl: './questions.component.html'
})
export class QuestionsComponent implements OnInit {

    question = {};
    questions;

    constructor(public api: ApiService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        const quizId = this.route.snapshot.paramMap.get('quizId');
        this.api.getQuestions(quizId)
            .subscribe(response => {
                this.questions = response;
            });
    }

    post(question) {
        this.api.postQuestion(question);
    }
}
