import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import {
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatToolbarModule,
  MatExpansionModule,
  MatRadioModule,
  MatDialogModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component';
import { ApiService } from './api.service';
import { QuestionsComponent } from './questions.component';
import { HomeComponent } from './home.component';
import { NavComponent } from './nav.component';
import { QuizComponent } from './quiz.component';
import { QuizzesComponent } from './quizzes.component';
import { RegisterComponent } from './register.component';
import { AuthService } from './auth.service';
import { AuthInterceptor } from './auth.interceptor';
import { PlayComponent } from './play.component';
import { LoginComponent } from './login.component';
import { PlayQuizComponent } from './playQuiz.component';
import { FinishedComponent } from './finished.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'question/:quizId', component: QuestionComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'play', component: PlayComponent },
  { path: 'playQuiz/:quizId', component: PlayQuizComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsComponent,
    HomeComponent,
    NavComponent,
    QuizComponent,
    QuizzesComponent,
    RegisterComponent,
    LoginComponent,
    PlayComponent,
    PlayQuizComponent,
    FinishedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatExpansionModule,
    MatRadioModule,
    MatDialogModule
  ],
  providers: [ApiService, AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [FinishedComponent]
})
export class AppModule { }
