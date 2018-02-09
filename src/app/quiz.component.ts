import { Component, OnInit } from '@angular/core';

import { ApiService } from './api.service';
import { query } from '@angular/animations';

@Component({
    selector: 'quiz',
    templateUrl: './quiz.component.html'
})
export class QuizComponent implements OnInit {

    quiz = {};

    constructor(private api: ApiService) { }

    ngOnInit() {
        this.api.quizSelected.subscribe(quiz => {
            this.quiz = quiz;
        });
    }
}
