import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFireService } from '../angular-fire.service';

@Component({
  selector: 'app-submit-issues-form',
  templateUrl: './submit-issues-form.component.html',
  styleUrls: ['./submit-issues-form.component.css']
})
export class SubmitIssuesFormComponent implements OnInit {

  issuesForm : FormGroup;
  uploadProgress : any;
  submitted : boolean;
  preview : string | ArrayBuffer |null;

  constructor(private fb : FormBuilder, private firebaseAPI: AngularFireService) {
    this.issuesForm  = this.fb.group({
      issueName : [''],
      issueAfected : [''],
      issueRankofPriority : [''],
      issueImage : [''],
      issueDescription: [''],
    });
    this.submitted = false;
    this.preview = "";
  }

  ngOnInit(): void {
    this.issuesForm
      .get('issueImage')!
      .valueChanges
      .subscribe((newValue : File) => {
        
        console.log(typeof newValue);
      });
  }

  issueOnSubmit() : Observable<number | undefined> {
    this.submitted = true;
    
    const { uploadProgress } = this.firebaseAPI.saveIssueFirebase(this.issuesForm.value);
    this.uploadProgress = uploadProgress;
    
    return uploadProgress;
  }

  submitFile( event : any) : void{
    let file : File = event.target.files[0]
    const reader = new FileReader();
    reader.onload = (loadEvent) => (this.preview = loadEvent.target!.result);
    reader.readAsDataURL(file);
  }

}
