import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-window-header',
  templateUrl: './window-header.component.html',
  styleUrls: ['./window-header.component.scss']
})
export class WindowHeaderComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
