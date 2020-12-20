import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-submit-issues-form',
  templateUrl: './submit-issues-form.component.html',
  styleUrls: ['./submit-issues-form.component.css']
})
export class SubmitIssuesFormComponent implements OnInit {

  issuesForm : FormGroup = this.fb.group({
    issueName: [''],
    issueAfected : [''],
    issueRankofPriority: [''],
    issueImage: [''],
  });

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }

}
