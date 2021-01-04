import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { Document } from './documents';

@Injectable()
export class DocumentService {
  private documentsUrl = 'http://localhost:3000/freelance_documents';
    document:Document[];
  	constructor(private httpClient: HttpClient) { }

  	getDocuments(): Observable<Document[]> {
  		return this.httpClient.get<Document[]>(this.documentsUrl);
  	}
  }
