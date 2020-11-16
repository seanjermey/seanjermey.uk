import { Component, Input, OnInit } from '@angular/core';
import { Tool } from '../../../types';
import { AuthService } from '../../../auth/auth.service';
import { ToolEntityService } from '../../../store/tool-entity.service';

@Component({
  selector: 'ui-tool-card',
  templateUrl: './tool-card.component.html',
  styleUrls: ['./tool-card.component.scss'],
})
export class ToolCardComponent implements OnInit {
  showModal = false;
  @Input() index: number;
  @Input() tool: Tool;
  @Input() expanded = false;

  constructor(
    public auth: AuthService,
    private toolEntityService: ToolEntityService
  ) {}

  ngOnInit(): void {}

  setFeatured(): void {
    this.toolEntityService.update({
      ...this.tool,
      featured: !this.tool.featured,
    });
  }
}
