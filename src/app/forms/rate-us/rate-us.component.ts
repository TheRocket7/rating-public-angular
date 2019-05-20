import { Component, Input } from '@angular/core';

@Component({
  selector: 'rate-us',
  templateUrl: './rate-us.component.html',
  styleUrls: ['./rate-us.component.css']
})
export class RateUsComponent {
  private title = "How do you like our work?";

  @Input('changes') changes: object;
}
