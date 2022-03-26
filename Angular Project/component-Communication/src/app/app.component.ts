import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Child1Component } from './child1/child1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  pName = 'Michael shumakar';
  cAge: number | undefined = 0;
  @ViewChild(Child1Component) childRef?: Child1Component;
  
  ngAfterViewInit(): void {
    if(this.cAge != undefined) {
      this.cAge = this.childRef?.childAge;
    }
  }
}
