import { Component, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { RateUsComponent } from './../rate-us/rate-us.component'

@Component({
  selector: 'start-page-root',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent {
  private title = 'Welcome to our rate application!';
  public settingsData: {
    thanksMessage: `Thank you for helping us improve ourselves!`,
    numberOfRates: 3,
    modalWait: 5
  }

  @ViewChild("rateUs") rateUs: RateUsComponent; 
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
 }
