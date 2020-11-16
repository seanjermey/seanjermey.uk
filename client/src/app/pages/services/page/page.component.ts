import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../../../types';
import { ServiceEntityService } from '../../../store/service-entity.service';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class ServicesPageComponent implements OnInit {
  services$: Observable<Service[]>;

  constructor(
    public auth: AuthService,
    private serviceEntityService: ServiceEntityService
  ) {
    this.services$ = this.serviceEntityService.entities$;
  }

  ngOnInit(): void {}
}
