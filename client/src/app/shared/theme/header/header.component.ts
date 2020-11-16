import { Component, Input, OnInit } from '@angular/core';
import { AppState } from '../../../store/reducers';
import { Store } from '@ngrx/store';
import {
  closeSidebar,
  toggleSidebar,
} from '../../../store/actions/system.actions';

@Component({
  selector: 'theme-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() siteName: string;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.store.dispatch(toggleSidebar());
  }

  closeSidebar() {
    this.store.dispatch(closeSidebar());
  }
}
