import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app world~!';
  msg = 'branch testing gogo';

  getBgColor(){
    return "yellow";
  }
}
