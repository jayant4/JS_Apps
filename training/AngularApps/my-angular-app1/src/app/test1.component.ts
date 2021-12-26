import { Component } from '@angular/core';

@Component({
    selector: 'test',
    template: `
  
  <div class="row ">
      <div class="col-12 mt-3"  *ngFor ="let question of questions;let qi=index;">
          <div class="card">
          <div class="card-header">
          {{question.statement}}
          </div>
          <div class="p-1">
          <label>
              <input class="card-body" type="radio" value="1" name="option_{{qi}}"/>
              {{question.option1}}
          </label>
          </div>
          
          <div class="p-1">
          <label >
              <input class="card-body" type="radio" value="1" name="option_{{qi}}"/>
              {{question.option2}}
          </label>
          </div>
          
          <div class="p-1">
          <label>
              <input class="card-body" type="radio" value="1" name="option_{{qi}}"/>
              {{question.option3}}
          </label>
          </div>
          
          <div class="p-1">
          <label>
              <input class="card-body" type="radio" value="1" name="option_{{qi}}"/>
              {{question.option4}}
          </label>
          </div>
          
          <div class="card-footer">
          Marks: {{question.marks}}
          </div>
          
          </div>
      </div>
  </div>

  `,
})
export class TestComponent {
    public questions = [
        {
            statement: 'AAA',
            option1: 'A1',
            option2: 'A2',
            option3: 'A3',
            option4: 'A4',
            marks: 5,
        },
        {
            statement: 'BBB',
            option1: 'A1',
            option2: 'A2',
            option3: 'A3',
            option4: 'A4',
            marks: 5,
        },
        {
            statement: 'CCC',
            option1: 'A1',
            option2: 'A2',
            option3: 'A3',
            option4: 'A4',
            marks: 5,
        },
        {
            statement: 'DDD',
            option1: 'A1',
            option2: 'A2',
            option3: 'A3',
            option4: 'A4',
            marks: 5,
        },
    ];
}
