import { Component, Input, OnInit } from '@angular/core';
import { Tool } from '../../../types';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ui-tools-widget',
  templateUrl: './tools-widget.component.html',
  styleUrls: ['./tools-widget.component.scss'],
})
export class ToolsWidgetComponent implements OnInit {
  title = 'Tools';
  showModal = false;
  @Input() tools: Tool[];

  constructor(public auth: AuthService) {}

  ngOnInit(): void {}
}
