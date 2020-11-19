import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-full',
  templateUrl: './form-full.component.html',
  styleUrls: ['./form-full.component.css']
})
export class FormFullComponent implements OnInit {

  public user: any;
  public ageValue: number;
  public addressValue: string;

  constructor() { 
    this.user = {cp:"",age:"",address:"",gender:""};
  }

  ngOnInit(): void {
  }

  updateAgeVal(ageValue) { this.user.age = Number(ageValue);}


  updateAddress(addressValue) { this.user.address = addressValue; }
  updateCP(addressValue) { this.user.cp = addressValue; }

  onSubmit(){
    console.log(this.user);
  }
}
