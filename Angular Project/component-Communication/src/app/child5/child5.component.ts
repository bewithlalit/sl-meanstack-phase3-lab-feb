import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-child5',
  templateUrl: './child5.component.html',
  styleUrls: ['./child5.component.css']
})
export class Child5Component implements OnInit {
  data?: number;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.currentData.subscribe(v=>this.data = v);
  }
}
