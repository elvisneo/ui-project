import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-route',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ui-project';  
  constructor(private http:HttpClient){
   console.log(this.http.get('http://localhost:3001')
   .subscribe((data)=>console.log(data)));
  }
}
