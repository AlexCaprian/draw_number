import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
 name = 'Alex';
 primaryName = 'Alex';
 secondName = 'Smith';
 trade = false;


 updateName() {
 this.name = this.name === this.primaryName ? this.secondName : this.primaryName;
  
 }

}

