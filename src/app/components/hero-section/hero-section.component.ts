import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  template: `
    <div class="hero-section form-main-title">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-8">
            <h6>פניות הציבור</h6>
            <!-- <p class="lead">אנחנו כאן כדי לסייע לכם ולהבטיח טיפול הוגן ויעיל בפניותיכם</p> -->
          </div>
        </div>
      </div>
    </div>
    <div>
  `
})
export class HeroSectionComponent {}