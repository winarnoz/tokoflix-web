import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-message-alert',
  templateUrl: './message-alert.component.html',
  styleUrls: ['./message-alert.component.scss']
})
export class MessageAlertComponent implements OnInit {

  @Input() message: any;
  @Input() type: any;
  constructor() { }

  ngOnInit() {
  }

}
