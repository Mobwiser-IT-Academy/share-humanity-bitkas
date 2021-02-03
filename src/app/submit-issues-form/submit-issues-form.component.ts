import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFireService } from '../angular-fire.service';

@Component({
  selector: 'app-submit-issues-form',
  templateUrl: './submit-issues-form.component.html',
  styleUrls: ['./submit-issues-form.component.css']
})
export class SubmitIssuesFormComponent implements OnInit {

  imageToUpload : File;
  issuesForm : FormGroup;
  uploadProgress : any;
  submitted : boolean;
  done: string;
  //preview : string | ArrayBuffer |null;

  constructor(private fb : FormBuilder, private firebaseAPI: AngularFireService) {
    this.issuesForm  = this.fb.group({
      issueName : ['',
    Validators.required],
      issueAfected : ['',
    Validators.required],
      issueRankofPriority : ['',
    Validators.required],
      issueImage : ['',
    Validators.required],
      issueDescription: ['',
    Validators.required],
    });
    this.submitted = false;

    //this.preview = "";
  }

  ngOnInit(): void {
    this.issuesForm
      .get('issueImage')!
      .valueChanges
      .subscribe((newValue : File) => {
        
        console.log(typeof newValue);
      });
  }

  openDialog() : void {

  }

  issueOnSubmit() : void {
    this.submitted = true;
    const uploadProgress = this.firebaseAPI.saveImageStorage(this.imageToUpload);
    this.done = this.firebaseAPI.saveIssueFirebase(this.issuesForm.value);
    //this.uploadProgress = uploadProgress;
    alert(this.done);
    //return uploadProgress;
  }

  submitFile( event : any) : void{
    let file : File = event.target.files[0]
    const reader = new FileReader();
    //reader.onload = (loadEvent) => (this.preview = loadEvent.target!.result);
    reader.readAsDataURL(file);
    this.imageToUpload = file;
  }

}
