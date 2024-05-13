// officers-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfficersService } from '../../services/officers-service.service';

@Component({
  selector: 'app-officers-list',
  templateUrl: './officers-list.component.html',
  styleUrls: ['./officers-list.component.scss']
})
export class OfficersListComponent implements OnInit {
  officers: any[] = [];
  companyName: string = '';
  companyNumber: string = '';

  constructor(private route: ActivatedRoute, private officersService: OfficersService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const companyNumber = params['companyNumber'];
      this.companyNumber = companyNumber;
      this.fetchOfficers(companyNumber);
    });
  }

  fetchOfficers(companyNumber: string): void {
    this.officersService.getOfficers(companyNumber)
      .subscribe((data: any) => {
        this.companyName = data.items[0].name;
        this.officers = data.items;
      });
  }
}
