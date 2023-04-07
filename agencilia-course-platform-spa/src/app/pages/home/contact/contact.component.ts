import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
    };
    category = '';
    formDetails = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    message: new FormControl('', Validators.required)
    });

    buttonText: string = 'Send';
    status: {success?: boolean, message?: string} = {};

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
    }

    onFormUpdate(value: string) {
      this.formDetails.controls['firstName'].setValue(value);
      this.formDetails.controls['lastName'].setValue(value);
      this.formDetails.controls['email'].setValue(value);
      this.formDetails.controls['phone'].setValue(value);
      this.formDetails.controls['message'].setValue(value);
    }

    async handleSubmit() {
    this.buttonText = "Sending...";
    let response = await this.http.post("http://localhost:5000/contact", this.formDetails.value).toPromise();
    this.buttonText = "Send";
    if (response === 200) {
    this.status = { success: true, message: 'Message sent successfully' };
    } else {
    this.status = { success: false, message: 'Something went wrong, please try again later.' };
    }
    this.formDetails.reset(this.formInitialDetails);
    }
}
