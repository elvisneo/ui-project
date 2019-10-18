import { Component, OnInit, Input } from '@angular/core';
import { HelperService } from '../helper.service';
//import {ElvisComponent} from './elvis.component.spec';

@Component({
  selector: 'app-elvis',
  templateUrl: './elvis.component.html',
  styleUrls: ['./elvis.component.less']
})
export class ElvisComponent implements OnInit {
  age:number = 15;
  isShy : boolean = true;
@Input() nick: string;

  constructor(private helper:HelperService) { }

  ngOnInit() {
    console.log(this.nick);
  }
  
  haveBday(){
    this.age++;
    this.isShy= !(this.age >= 30)
    /*this.helper.getVotes()
    .subscribe((data)=> {
    //debugger
    this.age = data['total']+ this.age})*/
  }


}
