import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartyService {

  apiUrl = 'https://ap.greatfuturetechno.com';

  constructor(private http: HttpClient) { }

  getAllParties() {
    return this.http.get<any[]>(`${this.apiUrl}/party/`);
  }

  addParty(partyData: any) {
    return this.http.post<any>(`${this.apiUrl}/party/`, partyData);
  }

  updateParty(id: number, partyData: any) {
    return this.http.put<any>(`${this.apiUrl}/party/?id=${id}`, partyData);
  }

  deleteParty(id: number) {
    return this.http.delete<any>(`${this.apiUrl}/party/?id=${id}`);
  }

}
