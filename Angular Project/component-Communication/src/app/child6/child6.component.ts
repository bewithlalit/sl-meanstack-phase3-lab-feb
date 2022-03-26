import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-child6',
  templateUrl: './child6.component.html',
  styleUrls: ['./child6.component.css']
})
export class Child6Component implements OnInit {
  data?: number;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.currentData.subscribe(v=>this.data = v);
  }
}
