import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-lamy-upload',
  templateUrl: './lamy-upload.component.html',
  styleUrls: ['./lamy-upload.component.css']
})
export class LamyUploadComponent implements OnInit {

  ngOnInit() {
  }
  form: FormGroup;
  loading: boolean = false;


  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      avatar: null
    });
  }

  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.get('avatar').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
    //  value: reader.result
        })
      };
    }
  }

  onSubmit() {
    console.log('onSubmit call'); 
    const formModel = this.form.value;
   
    this.loading = true;
    // this.http.post('apiUrl', formModel)
    setTimeout(() => {
      console.log(formModel);
     // alert('done!');
      alert('File content = '+ atob(this.form.value.avatar.value));
      this.loading = false;
    }, 1000);
  }


  clearFile() {
    this.form.get('avatar').setValue(null);
    this.fileInput.nativeElement.value = '';
  }


  // ################ For Text box Input 
  typedNib : string = 'M';
  typedClip : string = 'black';
  typedBody : string = 'red';
 

  lamyTxt = new FormControl('');
  readText()
  {
  //  alert(this.lamyTxt.value);
    let text = this.lamyTxt.value;
    let arr = text.split(",");
    for(let index =0; index< arr.length;index++)
    {
       let component =  arr[index];
       let key = component.split("=");
       if(key.length == 2)
       {
        if(key[0].toLowerCase().trim() == 'nib')
        {
            let value = key[1].toUpperCase().trim();
        //    alert(value);
            this.typedNib = value;
        }
        if(key[0].toLowerCase().trim() == 'clip')
        {
            let value = key[1].toLowerCase().trim();
         //   alert(value);
            this.typedClip = value;
        }
        if(key[0].toLowerCase().trim() == 'body')
        {
            let value = key[1].toLowerCase().trim();
         //   alert(value);
            this.typedBody = value;
        }
      }
    }
  }

  clearText()
  {
    this.typedNib = '';
    this.typedClip = '';
    this.typedBody = '';
    this.lamyTxt.setValue('');
  }
}
