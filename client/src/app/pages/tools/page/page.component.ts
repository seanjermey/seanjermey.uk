import { Component, OnInit } from '@angular/core';
import { Tool } from '../../../types';
import { Observable } from 'rxjs';
import { ToolEntityService } from '../../../store/tool-entity.service';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'tools-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  tools$: Observable<Tool[]>;

  constructor(
    public auth: AuthService,
    private toolEntityService: ToolEntityService
  ) {
    this.tools$ = this.toolEntityService.entities$;
  }

  ngOnInit(): void {}
}
