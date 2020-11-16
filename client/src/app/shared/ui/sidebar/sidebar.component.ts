import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'ui-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  sidebarOpen$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.sidebarOpen$ = this.store.select((s) => s.system.sidebarOpen);
  }

  ngOnInit(): void {}
}
