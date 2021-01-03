import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  pageTitle: string = "Document Dashboard"
  constructor() { }

  ngOnInit() {
  }
  documents: Document[] = [
  		{
  			title: "My First Doc",
  			description: 'asdfasdfasdf asdfasd',
  			file_url: 'http://google.com',
  			updated_at: '11/11/16',
  			image_url: 'http://google.com',
  		},
  		{
  			title: "My Second Doc",
  			description: 'asdfasdfasdf asdfasd',
  			file_url: 'http://google.com',
  			updated_at: '11/11/16',
  			image_url: 'http://google.com',
  		},
  		{
  			title: "My Last Doc",
  			description: 'asdfasdfasdf asdfasd',
  			file_url: 'http://google.com',
  			updated_at: '11/11/16',
  			image_url: 'http://google.com',
  		}
  	]
}
