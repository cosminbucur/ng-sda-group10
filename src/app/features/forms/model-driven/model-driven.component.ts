import { Language } from './../../../shared/models/language.model';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.scss']
})
export class ModelDrivenComponent implements OnInit {
  public registrationForm: FormGroup;

  public languages: Language[] = [
    { value: 'ro', viewValue: 'Romanian' },
    { value: 'en', viewValue: 'English' },
    { value: 'ge', viewValue: 'German' }
  ];

  constructor(private toastr: ToastrService) {}

  ngOnInit() {
    this.registrationForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      language: new FormControl()
    });
  }

  public onSubmit(): void {
    console.log('submit');
    this.toastr.success('form submitted');
  }

  public onCancel(): void {
    console.log('cancel');
    this.toastr.info('form canceled');
  }
}
