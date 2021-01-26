import { Component } from '@angular/core';
import { SessionService } from './servicies/session.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mini-wallapop';
  email:String
  constructor(private session: SessionService){
    this.email = this.session.getSession()
  }
  
}
