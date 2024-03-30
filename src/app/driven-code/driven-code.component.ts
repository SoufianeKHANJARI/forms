import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


export  interface MovieModel {
  name:String
  date:Date,
  international:String,
  domestic:String,
  wide:String


};

@Component({
  selector: 'app-driven-code',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './driven-code.component.html',
  styleUrl: './driven-code.component.css',
})
export class DrivenCodeComponent {
  movieForm: FormGroup<{
    name: FormControl<string | null>;
    date: FormControl<Date | null>;
    international: FormControl<string | null>;
    domestic: FormControl<string | null>;
    wide: FormControl<string | null>;
  }>;

  constructor( fb: FormBuilder) {
    this.movieForm = fb.group({
      name: fb.control(''),
      date: fb.control(new Date('2022-10-10')),
      international: fb.control(''),
      domestic: fb.control(''),
      wide: fb.control(''),
    });
  }

  // constructor(fb: FormBuilder){
  //   this.movieForm = fb.group({
  //     name: fb.control(''),
  //     date: fb.control(new Date('')),
  //     international: fb.control(''),
  //     domestic:  fb.control(''),
  //     wide:  fb.control(''),

  //   });

  // movieForm : FormGroup;

  // movieForm: FormGroup<{
  //   name: FormControl<String | null>;
  //   date: FormControl<Date | null>;
  //   international: FormControl<String | null>;
  //   domestic: FormControl<String | null>;
  //   wide: FormControl<String | null>;
  // }>;

  // SAAAADIA/

  // constructor(private fb: FormBuilder){
  //   let controls = {
  //     name : new FormControl(''),
  //     date : new FormControl(''),
  //     international: new FormControl(''),
  //   domestic : new FormControl(''),
  //   wide : new FormControl('')
  //   };
  //   this.movieForm = fb.group(controls);
  // };

  create() {
    console.log(' notre entité ', this.movieForm.value);
  }

  delete() {
    console.log('delete');
  }
  update() {
    console.log('update');
  }
}
