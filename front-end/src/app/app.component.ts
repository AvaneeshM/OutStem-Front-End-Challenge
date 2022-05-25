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

  onClickSubmit(result: { mfa: string; }) {
    
    console.log("You have entered : " + result.mfa);
    this.api.mfaSave(result.mfa).subscribe({
      
      next: (test)=>{
      console.warn();
    },
    error:(e) => { 
      console.log(500);
}})

    
  }


}
