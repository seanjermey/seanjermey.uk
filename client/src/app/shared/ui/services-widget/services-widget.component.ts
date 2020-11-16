import { Component, Input, OnInit } from '@angular/core';
import { Service } from '../../../types';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ui-services-widget',
  templateUrl: './services-widget.component.html',
  styleUrls: ['./services-widget.component.scss'],
})
export class ServicesWidgetComponent implements OnInit {
  title = 'Services';
  showModal = false;
  @Input() services: Service[];

  constructor(public auth: AuthService) {}

  ngOnInit(): void {}
}
