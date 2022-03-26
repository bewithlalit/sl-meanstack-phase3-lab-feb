import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input() parentName: string = '';
  childAge: number = 21;
  data: Array<string> = [];
  @Output() eventRef = new EventEmitter<number>()

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.data = this.sharedService.getValue();
  }

  passValue(): void {
    this.eventRef.emit(this.childAge);
  }

}
