import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-button',
  templateUrl: './display-button.component.html',
  styleUrls: ['./display-button.component.css']
})
export class DisplayButtonComponent implements OnInit {

  arr = [];

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClicked(): void {
    this.arr.push(new Date().toISOString());
  }
}
