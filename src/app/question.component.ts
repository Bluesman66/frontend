import { Component, OnInit } from '@angular/core';

import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'question',
    templateUrl: './question.component.html'
})
export class QuestionComponent implements OnInit {

    question = {};
    quizId;

    constructor(private api: ApiService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.quizId = this.route.snapshot.paramMap.get('quizId');
        this.api.questionSelected.subscribe(question => {
            this.question = question;
        });
    }

    post(question) {
        question.quizId = this.quizId;
        this.api.postQuestion(question);
    }

    put(question) {
        this.api.putQuestion(question);
    }
}
