import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { SaveIssueFirebaseService } from '../save-issue-firebase.service';

@Component({
  selector: 'app-submit-issues-form',
  templateUrl: './submit-issues-form.component.html',
  styleUrls: ['./submit-issues-form.component.css']
})
export class SubmitIssuesFormComponent implements OnInit {

  issuesForm : FormGroup;


  constructor(private fb : FormBuilder, private saveIssueFirebase: SaveIssueFirebaseService) {
    this.issuesForm  = this.fb.group({
      issueName : [''],
      issueAfected : [''],
      issueRankofPriority : [''],
      issueImage : [''],
      issueDescription: [''],
    });
   }

  ngOnInit(): void {
    
  }

  issueOnSubmit() : void{
    this.saveIssueFirebase.saveIssueFirebase(this.issuesForm.value);
  }

}
