import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  private changeThanksText: `Thank you message:`;
  private changeModalWait: `Thank you message timeout:`;
  private changeNumberOfRates: `Number of emotions:`;
  public showWarning = false;

  @Input('changes') changes: any;

  @Output() chagedSettings = new EventEmitter<object>();

  saveChanges() {
    if((this.changes.thanksMessage.length <= 3 && this.changes.thanksMessage.length != 0) || this.changes.thanksMessage.length >= 120) {
        this.showWarning = true;
    } else {
      this.chagedSettings.emit(this.changes);
    }
}
}
