import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AngularFireService } from '../angular-fire.service';

@Component({
  selector: 'app-submit-issues-form',
  templateUrl: './submit-issues-form.component.html',
  styleUrls: ['./submit-issues-form.component.css']
})
export class SubmitIssuesFormComponent implements OnInit {

  issuesForm : FormGroup;


  constructor(private fb : FormBuilder, private firebaseAPI: AngularFireService) {
    this.issuesForm  = this.fb.group({
      issueName : [''],
      issueAfected : [''],
      issueRankofPriority : [''],
      issueImage : [''],
      issueDescription: [''],
    });
   }

  ngOnInit(): void {
    this.issuesForm
      .get('issueImage')!
      .valueChanges
      .subscribe((newValue : File) => {
        //this.submitFile(newValue);
        console.log(typeof newValue);
      });
  }

  issueOnSubmit(event: any) : void{
    //console.log(event.target.files[0]);
    this.firebaseAPI.saveIssueFirebase(this.issuesForm.value);
  }

  submitFile( event : any) : void{
    let file : File = event.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(file);
  }

}
