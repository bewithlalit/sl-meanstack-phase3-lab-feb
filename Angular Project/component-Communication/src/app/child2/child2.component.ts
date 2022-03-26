import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  names: Array<string> = ["Kisan", "Govind", "Radhey", "Gopal"]
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.setValue(this.names);
  }

}
