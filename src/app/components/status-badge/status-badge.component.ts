import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-status-badge',
  templateUrl: './status-badge.component.html',
  styleUrls: ['./status-badge.component.scss']
})
export class StatusBadgeComponent implements OnInit {
  @Input() selectStatus;
  statuses = [
    {id: 1, text: 'active'},
    {id: 2, text: 'inactive'},
    {id: 3, text: 'blocked'},
    {id: 4, text: 'suspended'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
