import { Component, OnInit, Input } from '@angular/core';
//import {ElvisComponent} from './elvis.component.spec';

@Component({
  selector: 'app-elvis',
  templateUrl: './elvis.component.html',
  styleUrls: ['./elvis.component.less']
})
export class ElvisComponent implements OnInit {
  age:number = 15;
@Input() nick: string;

  constructor() { }

  ngOnInit() {
    console.log(this.nick);
  }
  
  haveBday(){
    this.age++;
  }

}
