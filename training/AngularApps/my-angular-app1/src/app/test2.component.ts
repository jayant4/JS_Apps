import { Statement } from "@angular/compiler";
import { Component } from "@angular/core";


interface Option2 {
    text: string;
    isCorrect: boolean;
    marks: number;
}

interface Question2 {
    statement: string;
    options: Option2[];
}

@Component({
    selector: "test2",
    template: `
    
        <div class="row">
            <div class="col-12" *ngFor="let question of questions">
                <div class="card mt2- mb-2">
                    <div class="card-header">
                         {{question.statement}}
                        </div>

                    <div class="card-body" *ngFor="let option of question.options">
                        <label>
                            <input type="checkbox"/>
                            {{option.text}}
                        </label>
                    </div>

                </div>
            </div>
        </div>
    
    `
})
export class Test2Component {
    public questions: Question2[] = [
        {
            statement: 'AAA',
            options: [
                { text: "A1", isCorrect: true, marks: 5 },
                { text: "A2", isCorrect: false, marks: 3 }
            ]
        },
        {
            statement: 'BBB',
            options: [
                { text: "B1", isCorrect: true, marks: 5 },
                { text: "B2", isCorrect: false, marks: 3 },
                { text: "B3", isCorrect: true, marks: 5 },
                { text: "B4", isCorrect: false, marks: 3 },
            ]
        },

    ]
}