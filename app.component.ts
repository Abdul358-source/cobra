import { Component } from '@angular/core';
import { UserloginService } from './userlogin.service';
export type EditorType = 'name' | 'profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private loginServices : UserloginService) {}

}
