import { Component } from '@angular/core';
import { PartyService } from '../services/party.service';

@Component({
  selector: 'app-party-management',
  templateUrl: './party-management.component.html',
  styleUrls: ['./party-management.component.css']
})
export class PartyManagementComponent {
  parties: any[] | undefined;

  constructor(private partyService: PartyService) { }

  ngOnInit(): void {
    this.partyService.getAllParties().subscribe(
      data => {
        this.parties = data;
      },
      error => {
        // Handle error
      }
    );
  }
}
