import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent {
  
  title = 'app';
  story = {'name':'Gift'};
  name :string;
  defaultValue = 'Deafue Text Massage';

  
alertMessage()
{

  alert('Button Click!');
  console.log('Button Click!');
  
}

}
