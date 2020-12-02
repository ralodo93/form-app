import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { FormService } from '../../services/form.service';
import { Form } from '../../models/form';
import swal from 'sweetalert';

@Component({
  selector: 'app-form-full',
  templateUrl: './form-full.component.html',
  styleUrls: ['./form-full.component.css'],
  providers: [FormService]
})
export class FormFullComponent implements OnInit {

  public user: Form;
  public ageValue: number;
  public addressValue: string;
  public time: number = 0;
  public lang: string;
  form: FormGroup;
  otherJobTouched = false;
  otherWhereTouched = false;
  otherInfectionTouched = false;
  startSurvey = false;
  public status: string;
  valueAge: any;
  valueAddress: any;
  valuePostalCode: any;
  valueWhere: any;
  valueJob: any;
  valueInfection: any;

  diagnos = [
    { name_es: 'Cáncer', name_en: "Cancer", value: 'cancer' },
    { name_es: 'Hipertensión', name_en: "Hypertension", value: 'hypertension' },
    { name_es: 'Enfermedad cardiovascular', name_en: "Cardiovascular disease", value: 'CVD' },
    { name_es: 'Enfermedad pulmonar crónica (incluido asma)', name_en: "Chronic lung disease (including asthma)", value: 'CLD' },
    { name_es: 'Enfermedad renal', name_en: 'Renal diasease', value: 'renal disease' },
    { name_es: 'Enfermedad inmunológica', name_en: 'Immune disease', value: 'immune disease' },
    { name_es: 'Diabetes', name_en: 'Diabetes', value: 'diabetes' },
    { name_es: 'Ninguno', name_en: 'Any', value: 'none' }
  ];

  symptons = [
    { name_es: 'Fiebre', name_en: "Fever", value: 'fever' },
    { name_es: 'Tos seca', name_en: "Dry cought", value: 'dry cought' },
    { name_es: 'Tos mucosa', name_en: "Mucous cought", value: 'mucous cought' },
    { name_es: 'Cansancio', name_en: 'Fatigue', value: 'fatigue' },
    { name_es: 'Dolor muscular', name_en: 'Muscular pain', value: 'muscular pain' },
    { name_es: 'Dificultad respiratoria', name_en: 'Shortness of breath', value: 'shortness of breath' },
    { name_es: 'Rinorrea (moqueo)', name_en: "Rhinorrhea (mucus)", value: 'rhinorrhea' },
    { name_es: 'Congestion nasal', name_en: 'Nose congestion', value: 'nose congestion' },
    { name_es: 'Dolor de garganta', name_en: 'Sore throat', value: 'throat' },
    { name_es: 'Dolor de cabeza', name_en: 'Headache', value: 'headache' },
    { name_es: 'Diarrea', name_en: 'Diarrhea', value: 'diarrhea' },
    { name_es: 'Náuseas y/o vómitos', name_en: "Nause and/or vomiting", value: 'vomiting' },
    { name_es: 'Pérdida del gusto y/u olfato', name_en: "Lost of smell and/or taste", value: 'smell-taste' },
    { name_es: 'Urticaria o lesión dermatológica', name_en: 'Urticaria or dermatological lesion', value: 'urticaria' },
    { name_es: 'Ninguno', name_en: 'Any', value: 'none' }
  ];

  constructor(private fb: FormBuilder,
    private _formService: FormService) {

    this.user = new Form("", null, "", "", "", [], [], "", "", "", "", "");
  }

  ngOnInit(): void {
  }

  getLang(event) { this.lang = event.target.value; this.startSurvey = true; this.functionNr1(); }
  updateAge(value) { this.user.age = Number(value); }
  updateAddress(value) { this.user.address = value; }
  updatePC(value) { this.user.postalCode = value; }
  getOtherJob(value) { this.user.job = value; this.otherJobTouched = true; }
  getOtherWhere(value) { this.user.where = value; this.otherWhereTouched = true; }
  getOtherInfection(value) { this.user.infection = value; this.otherInfectionTouched = true; }


  onChangeSymptons(sympton, isChecked: boolean) {
    if (isChecked) {
      this.user.symptons.push(sympton);
    } else {
      let index = this.symptons.indexOf(sympton);
      this.user.symptons.splice(index, 1);
    }
  }

  onChangeDiagnosis(sympton, isChecked: boolean) {
    if (isChecked) {
      this.user.diagnosis.push(sympton);
    } else {
      let index = this.symptons.indexOf(sympton);
      this.user.diagnosis.splice(index, 1);
    }
  }

  submitFormSymptons() { if (this.form.value.checkArray.length > 0) { this.user.symptons.push(this.form.value.checkArray); } this.form = this.fb.group({ checkArray: this.fb.array([], [Validators.required]) }) }
  submitFormDiagn() { if (this.form.value.checkArray.length > 0) { this.user.diagnosis.push(this.form.value.checkArray); } this.form = this.fb.group({ checkArray: this.fb.array([], [Validators.required]) }) }

  Submit() {
    console.log(this.lang);
    if (this.lang == "spanish") {
      swal({
        title: "Encuesta finalizada!",
        text: "Muchas gracias!",
        icon: "success",
      });
    }
    if (this.lang == "english") {
      swal("Finish form!", "Thank you so much!", "success");
    }
    this.startSurvey = false;
    this._formService.postForm(this.user).subscribe(
      response => {
        if (response.status == "success") {
          this.status = "success";
          this.user = response.user;
          this.refresh();
        } else {
          this.status = "error";
        }
      },
      error => {
        console.log(error);
        this.status = "error";
      }
    )
  }

  refresh(): void {
    window.location.reload();
  }
  functionNr1() {

    setTimeout(() => {
      this.time = 500;
    }, 500);

    setTimeout(() => {
      this.time = 1000;
    }, 1000);

    setTimeout(() => {
      this.time = 1500;
    }, 1500);

    setTimeout(() => {
      this.time = 2000;
    }, 2000);

  }

  wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }
}
