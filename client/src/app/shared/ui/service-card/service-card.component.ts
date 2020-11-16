import { Component, Input, OnInit } from '@angular/core';
import { Service } from '../../../types';
import { AuthService } from '../../../auth/auth.service';
import { ServiceEntityService } from '../../../store/service-entity.service';

@Component({
  selector: 'ui-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss'],
})
export class ServiceCardComponent implements OnInit {
  showModal = false;
  @Input() service: Service;

  constructor(
    public auth: AuthService,
    private serviceEntityService: ServiceEntityService
  ) {}

  ngOnInit(): void {}

  setFeatured(): void {
    this.serviceEntityService.update({
      ...this.service,
      featured: !this.service.featured,
    });
  }
}
