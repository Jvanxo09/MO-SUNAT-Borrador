import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-select-modificar',
  templateUrl: './select-modificar.component.html',
  styleUrls: ['./select-modificar.component.css']
})
export class SelectModificarComponent {

  @Input() name: any;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  @Input() id: any;
  myForm: any;

  private createForm() {
    this.myForm = this.formBuilder.group({
      username: '',
      password: '',
    });
  }

  submitForm() {
    this.activeModal.close(this.myForm.value);
  }

}
