import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { HeaderComponent } from './app/components/header/header.component';
import { HeroSectionComponent } from './app/components/hero-section/hero-section.component';
import { ComplaintFormComponent } from './app/components/complaint-form/complaint-form.component';
import { FooterComponent } from './app/components/footer/footer.component';
// import { AccessibilityComponent } from './app/components/accessibility-statement/accessibility-statement.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    ComplaintFormComponent,
    FooterComponent,
    // AccessibilityComponent
  ],
  template: `
    <app-header></app-header>
    <app-hero-section></app-hero-section>
    <div class="container my-5">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <app-complaint-form></app-complaint-form>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  `,
})
export class App {
  name = 'פניות הציבור';
}

bootstrapApplication(App, {
  providers: [
    provideRouter([])
  ]
});