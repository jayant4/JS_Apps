import { Statement } from "@angular/compiler";
import { Component } from "@angular/core";


interface Option2 {
    text: string;
    isCorrect: boolean;
    marks: number;
    hasUserSelected: boolean
}

interface Question2 {
    statement: string;
    options: Option2[];
}

@Component({
    selector: "test2",
    template: `
    
        <div class="row">
            <ng-container *ngIf="!isTestFinished">
                <div class="col-12" *ngFor="let question of questions">
                    <div class="card mt2- mb-2">
                        <div class="card-header">
                             {{question.statement}}
                            </div>
                        <div class="card-body" *ngFor="let option of question.options">
                            <label>
                                <input type="checkbox" [(ngModel)] = "option.hasUserSelected"/>
                                {{option.text}}
                            </label>
                        </div>
                    </div>
                </div>
                
                
            </ng-container>
        
            
            
            <div class="col-12" *ngIf="!isTestFinished">
            <button class="btn btn-primary" (click)="finish()">Finish</button>
            </div>
        
                
            <div class="card" *ngIf="isTestFinished">
                    <div class="card-header">
                        Test Result
                    </div>
                    <div class="card-body">
                            You have obtained {{userMarks}} out of {{totalMarks}}                            
                    </div>
            </div>
            
        </div>
        
    
    `
})
export class Test2Component {

    public isTestFinished = false;
    public userMarks = 0;
    public totalMarks = 0;

    public finish() {
        for (let question of this.questions) {
            for (let option of question.options) {
                if (option.hasUserSelected && option.isCorrect) {
                    this.userMarks += option.marks
                } else if (option.hasUserSelected && !option.isCorrect) {
                    this.userMarks -= option.marks
                }
                if (option.isCorrect) {

                    this.totalMarks += option.marks
                }
            }
        }
        this.isTestFinished = true;

    }

    public questions: Question2[] = [
        {
            statement: 'AAA',
            options: [
                { text: "A1", isCorrect: true, marks: 5, hasUserSelected: false },
                { text: "A2", isCorrect: false, marks: 3, hasUserSelected: false }
            ]
        },
        {
            statement: 'BBB',
            options: [
                { text: "B1", isCorrect: true, marks: 5, hasUserSelected: false },
                { text: "B2", isCorrect: false, marks: 3, hasUserSelected: false },
                { text: "B3", isCorrect: true, marks: 5, hasUserSelected: false },
                { text: "B4", isCorrect: false, marks: 3, hasUserSelected: false },
            ]
        },

    ]
}