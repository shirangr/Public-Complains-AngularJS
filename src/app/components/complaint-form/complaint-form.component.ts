import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { PickList } from 'primeng/picklist';

@Component({
  selector: 'app-complaint-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
  <div class="complaint-up mb-2">
    <p>
      <strong>הנחיות (שדות המסומנים בכוכבית (*) הם שדות חובה)</strong>
    </p>
  </div>
    <div class="complaint-form">
      <div class="row instruction-container" style="display:block">
      <p>
        אגף הביקורת ותלונות הציבור מברר תלונות / פניות הקשורות למכלול הפעילות של מערכת בתי המשפט, למעט תלונות על החלטות
        שיפוטיות או על נושאי משרה שיפוטית. לנוחותך להלן קישור ל <a aria-describedby="accessibilityNewWindowAlert" href="https://www.gov.il/BlobFolder/policy/general_regulation_7_001_20/he/נוהל%20טיפול%20בתלונות%20ובפניות%20הציבור.pdf" target="_blank">נוהל טיפול בתלונות ופניות הציבור</a> המפרט את עקרונות הטיפול
        בתלונות ובפניות ואת תהליך הטיפול בהן.
      </p>
      <p>
      <strong>לידיעתך, להלן תלונות/ פניות שלא ייבדקו על ידי אגף הביקורת ותלונות הציבור:</strong>
      </p>
        <ul style="list-style-type:none;">
          <li>
            1. תלונות על ניהול ההליך המשפטי על ידי השופט / הרשם, לרבות התנהגות או מעשה של שופט / רשם, תלונות בעניין התלוי
            ועומד בבית משפט או תלונות על החלטות שיפוטיות.
          </li>
          <li>
            2. פניות שעניינן בקשות לבית משפט, לרבות בקשות לפסילת שופט. <a href="https://www.court.gov.il/ngcs.web.site/homepage.aspx" target="_blank">קישור לנט המשפט</a>
          </li>
          <li>
          3. תלונות או פניות שעניינן אינו קשור לגורם כלשהו במערכת בתי המשפט, האגף יעבירן לגורם הרלוונטי ויידע את הפונה על כך,
          או לחילופין יודיע לפונה, ככל שידוע לו, מהי הכתובת הנכונה להגשת פנייתו.
          </li>
          <li>
          4. תלונות המוגשות בעילום שם – אלא אם החליט מנהל האגף שיש במכתב התלונה נקודות שניתן לבדוק אותן וכן שיש בו נסיבות
          המצדיקות בירור.
          </li>
          <li>
          5. תלונות או פניות המופנות לגורם אחר, כשאגף הביקורת מכותב רק בהעתקים.
          </li>
          <li>
          6. תלונות שהאגף מוצא אותן קנטרניות או טורדניות או תלונות של אותו פונה החוזרות על עצמן שוב ושוב, ותלונות העוסקות
          בזוטי דברים.
          </li>
          <li>
            7. תלונה שהוגשה לאחר שעברה שנה מיום המעשה שעליו נסבה התלונה או מהיום שהמעשה נודע למתלונן, לפי המאוחר יותר,
            אלא אם מצאה המבקר הפנימי שיש סיבה מיוחדת המצדיקה את בירורן.
          </li>
          <li>
            8. תלונות הנמצאות בחקירת משטרה או גורם חוקר אחר.
          </li>
          <li>
            9. פניות שהן בגדר בקשה לייעוץ משפטי.
          </li>
        </ul>
      </div>
  </div>
  <br>

  <div class="complaint-form">
  <form [formGroup]="complaintForm" (ngSubmit)="onSubmit()">
  <div class="row">
  <div class="col-md-4">
        <label for="salution" class="form-label" required>תואר</label>
        <input type="text" class="form-control" id="salution" formControlName="salution">
        <!-- <option value="1">מר</option>
        <option value="2">גברת</option> -->
        <!-- <option ng-repeat="brand in formData.brandData" value="{{brand.brandName}}">{{brand.brandName}}</option> -->
        <!-- <mat-select></mat-select> -->

        <!-- <p-picklist [source]="sourceProducts" [target]="targetProducts" [dragdrop]="true" [responsive]="true" [sourceStyle]="{ height: '30rem' }" [targetStyle]="{ height: '30rem' }" breakpoint="1400px">
            <ng-template let-item pTemplate="item">
                {{ item.name }}
            </ng-template>
        </p-picklist> -->
      </div>   
  </div>
  <div class="row">
  <div class="col-md-4">
        <label for="firstName" class="form-label" required>שם פרטי</label>
        <input type="text" class="form-control" id="firstName" formControlName="firstName">
      </div>   
  <div class="col-md-4">
        <label for="lastName" class="form-label" required>שם משפחה</label>
        <input type="text" class="form-control" id="lastName" formControlName="lastName">
      </div>  
    <div class="col-md-4">
        <label for="idNumber" class="form-label">תעודת זהות</label>
        <input type="text" class="form-control" id="idNumber" formControlName="idNumber">
      </div>
</div>
<div class="row">
      <div class="col-md-4">
        <label for="mobilephone" class="form-label">טלפון נייד</label>
        <input type="tel" class="form-control" id="mobilephone" formControlName="mobilephone">
      </div>
      <div class="col-md-4">
        <label for="phone" class="form-label">טלפון בבית</label>
        <input type="tel" class="form-control" id="phone" formControlName="phone">
      </div>
      <div class="col-md-4">
        <label for="fax" class="form-label">פקס</label>
        <input type="tel" class="form-control" id="fax" formControlName="fax">
      </div>
</div>
<div class="row">
      <div class="col-md-8">
        <label for="email" class="form-label">דואר אלקטרוני</label>
        <input type="email" class="form-control" id="email" formControlName="email">
      </div> 
</div>
<div class="row">
  <div class="col-md-4">
        <label for="city" class="form-label" required>ישוב</label>
        <input type="text" class="form-control" id="city" formControlName="city">
      </div>   
  <div class="col-md-4">
        <label for="address" class="form-label" required>כתובת</label>
        <input type="text" class="form-control" id="address" formControlName="address">
      </div>   
  <div class="col-md-4">
        <label for="postalcode" class="form-label" required>מיקוד</label>
        <input type="text" class="form-control" id="postalcode" formControlName="postalcode">
      </div>  
</div>
<br>
<div class="row">
      <div class="col-md-7">
          <div><label class="control-label" for="isRepresenting">מתלונן בשם אדם אחר</label></div>
          <input id="isRepresenting" name="isRepresenting" onchange="isRepresenting_onchange(this.value);" type="radio" value="True"> כן
          <input checked="checked" id="isRepresenting" name="isRepresenting" onchange="isRepresenting(this.value);" type="radio" value="False"> לא
          <br>
          <!-- <div class="YipuyKoach" style="[style.display]="chatIsToggled ? 'block' : 'none'"> -->
          <div class="YipuyKoach" style="">
              הערה: חובה לצרף ייפוי כוח - להורדת מסמך:
              <a aria-describedby="accessibilityNewWindowAlert" href="\Documents\YipuyKoach.docx" target="_blank">יפוי כוח</a><br>
              גורם/הורה הפונה בעניינם של קטינים המצויים תחת חסותו, צריך לצרף צילום ת.ז/אסמכתא מתאימה
          </div>
      </div>
</div>
<br>
<div class="mb-3">
        <label for="complaintText" class="form-label">תוכן התלונה</label>
        <textarea class="form-control" id="complaintText" rows="5" formControlName="complaintText"></textarea>
      </div>
      <button type="submit" class="btn btn-primary" [disabled]="!complaintForm.valid">שליחת תלונה</button>
    </form>
  </div>
  `

  
})
export class ComplaintFormComponent {
  complaintForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.complaintForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      idNumber: ['', [Validators.required, Validators.minLength(9)]],
      email: ['', Validators.email],
      mobilephone: ['', [Validators.pattern("^((\\05-?)|0)?[0-9]{10}$"),Validators.minLength(10), Validators.maxLength(10)]],
      phone: ['', [Validators.pattern("^[0-9]*$"),Validators.minLength(9), Validators.maxLength(10)]],
      fax: ['', [Validators.pattern("^[0-9]*$"),Validators.minLength(9), Validators.maxLength(10)]],
      complaintText: ['', [Validators.required, Validators.minLength(20)]],
      address:[''],
      city:[''],
      postalcode:[''],
      salution:['']
    });
  }

  onSubmit() {
    if (this.complaintForm.valid) {
      console.log(this.complaintForm.value);
      console.warn('טופס נשלח!', this.complaintForm.value);
    }
  }
}

