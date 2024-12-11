import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbModule, CommonModule],
  template: `
    <nav class="header">
      <div class="container navbar-brand">
          <img src="src/assets/semel-medina.png" alt="לוגו מדינת ישראל" />
          <img src="src/assets/semel-mimshal-zamin.png" alt="לוגו ממשל זמין" />
          <img src="src/assets/semel-medina2.png" alt=""> 
      </div>
        <!-- <div class="navbar-brand office-description">
          <p class="lead">מדינת ישראל</p>
          <p class="lead">הנהלת בתי המשפט</p>
        </div> -->
    </nav>
  `
})
export class HeaderComponent {
  isMenuCollapsed = true;
}