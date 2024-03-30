import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



export  interface MovieModel {
  name:String
  date:Date,
  international:String,
  domestic:String,
  wide:String


};

@Component({
  selector: 'app-driven-template',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './driven-template.component.html',
  styleUrl: './driven-template.component.css'
})


export class DrivenTemplateComponent  {
  movies:MovieModel={
    name:"",
    date:new Date("22-12-2024"),
    international:"",
    domestic:"",
    wide:""

  }


  
constructor(){

}



create(){
  console.log("create");
}
delete(){
  console.log("delete");
  
}
update(){
  console.log("update");
  
}



}
