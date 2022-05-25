import { Component } from '@angular/core';
import {GetMFAService} from './get-mfa.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'front-end';
  constructor(private api:GetMFAService){
    // this.api.mfaCall().subscribe(data=>{
    //   console.warn("get api data", data)
    // })

  }

  ngOnInit() {
  }

  onClickSubmit(result: { digit1: string; digit2: string; digit3: string; digit4: string; digit5: string; digit6: string;}) {
    var mfaBin = result.digit1 + result.digit2 + result.digit3 + result.digit4 + result.digit5 + result.digit6;  
    console.log("You have entered : " + mfaBin);
    
    this.api.mfaSave(mfaBin).subscribe({
      
      next: (test)=>{
      console.warn();
    },
    error:(e) => { 
      console.log(500);
}})

    
  }


  

}
