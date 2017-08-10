import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app world~!';
  colors = [
    "red", "green", "bule"
  ];

  getBgColor(){
    return "yellow";
  }
}
