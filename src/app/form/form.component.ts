import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() formData = new EventEmitter<any>();
  
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.formData.emit(this.form.value);
      this.form.reset();
    } else {
      // Handle form validation errors
    }
  }
  ngOnInit(): void {
  }

}
