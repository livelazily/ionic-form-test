import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  formGroup: FormGroup;

  constructor(private formBuild: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.formBuild.group({
      field1: ['', Validators.required],
      field3: ['', Validators.required],
    });
  }

  canSubmit() {
    const form = this.formGroup;
    if (form.untouched && form.pristine) {
      return true;
    }
    return !form.invalid;
  }

  submit() {
    const form = this.formGroup;
    form.markAllAsTouched();

    if (form.invalid) {
      return;
    }

    alert('form submited');
  }
}
