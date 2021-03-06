import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { timer } from 'rxjs';
import { Document } from './documents';
import { DocumentService } from './document.service';

@Component({
	selector: 'documents',
	templateUrl: 'documents.component.html',
	styleUrls: ['documents.component.css'],
	providers: [ DocumentService ]
})
export class DocumentsComponent implements OnInit {
	pageTitle: string = "Document Dashboard"
	documents: Document[];
	errorMessage: string;
	mode = "Observable";

	constructor(
		private documentService: DocumentService,
	) {}

	ngOnInit() {
		let docTimer = timer(0, 5000);
		docTimer.subscribe(() => this.getDocuments());
	}

	getDocuments() {
		this.documentService.getDocuments()
				.subscribe(
					documents => this.documents = documents,
					error => this.errorMessage = <any>error
				);
	}
}
