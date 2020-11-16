import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() label: string;
  @Input() control: FormControl;
  @Input() type: string = 'text';
  @Input() controlType: string = 'input';

  constructor() {}

  ngOnInit(): void {}

  showErrors() {
    const { dirty, touched, errors } = this.control;

    return dirty && touched && errors;
  }
}
