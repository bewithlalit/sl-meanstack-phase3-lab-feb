import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-child7',
  templateUrl: './child7.component.html',
  styleUrls: ['./child7.component.css']
})
export class Child7Component implements OnInit {
  data?: number;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.currentData.subscribe(v=>this.data = v);
  }
}
