import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent {

  public clickCount = 0;

  public onSave($event) {
    console.log(' save button clicked', $event);
    this.clickCount += 1;
  }
}
