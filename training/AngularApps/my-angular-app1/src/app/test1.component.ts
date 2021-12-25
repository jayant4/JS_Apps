import { Component } from '@angular/core';

@Component({
  selector: 'test',
  template: `
  
  <div
  *ngFor ="let question of questions"
  style = "border:solid 1px black; padding:2px;">
  <div>
  {{question.statement}}
  </div>

  <div>
  <input type="radio" value="1"/>
  {{question.option1}}
  </div> 
  
  <div>
  <input type="radio" value="1"/>

  {{question.option2}}
  </div> 
  
  <div>
  <input type="radio" value="1"/>

  {{question.option3}}
  </div> 
  
  <div>
  <input type="radio" value="1"/>

  {{question.option4}}
  </div>
  
  <div>
  {{question.marks}}
  </div>
  
  </div>

  `,
})
export class TestComponent {
  public questions = [
    {
      statement: 'AAA',
      option1: 'A1',
      option2: 'A1',
      option3: 'A1',
      option4: 'A1',
      marks: 5,
    },
    {
      statement: 'BBB',
      option1: 'A1',
      option2: 'A1',
      option3: 'A1',
      option4: 'A1',
      marks: 5,
    },
    {
      statement: 'CCC',
      option1: 'A1',
      option2: 'A1',
      option3: 'A1',
      option4: 'A1',
      marks: 5,
    },
    {
      statement: 'DDD',
      option1: 'A1',
      option2: 'A1',
      option3: 'A1',
      option4: 'A1',
      marks: 5,
    },
  ];
}
