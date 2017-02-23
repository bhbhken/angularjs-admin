import { Component } from '@angular/core';
import '../ckeditor.loader';
import 'ckeditor';

@Component({
  selector: 'app-ckeditor', 
  templateUrl: 'ckeditor.component.html',
  styleUrls: ['./ckeditor.component.css']
})

export class CkeditorComponent { 
	public ckeditorContent:string = '<p>Hello CKEditor</p>';
	public config = {
		uiColor: '#F0F3F4',
		height: '600',
	};

	constructor() { }
}