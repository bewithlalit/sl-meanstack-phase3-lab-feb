import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
  data: Array<string> = [];
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.data = this.sharedService.getValue();
  }

}
