import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component implements OnInit {
  data: number = 0;
  names: Array<string> = ["Goat", "Cow", "Lion"]

  constructor(private commonService: CommonService,
    private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.setValue(this.names);
    this.commonService.currentData.subscribe(v=>this.data = v);
  }

  changeFunc() {
    this.commonService.changeValue(this.data);
  }

}
