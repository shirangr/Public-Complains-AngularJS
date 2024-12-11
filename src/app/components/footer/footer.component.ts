import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-dark text-light py-4 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <ul class="list-unstyled">
              <li><a href="#" class="text-light">אודות האתר</a></li>
              <li><a href="#" class="text-light">תנאי שימוש</a></li>
              <li><a href="https://www.gov.il/he/pages/accessibility-statement" class="text-light">נגישות</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  courts_email = 'complaints@court.gov.il';
}