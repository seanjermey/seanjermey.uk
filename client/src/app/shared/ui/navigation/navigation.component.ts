import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/reducers';
import { Observable } from 'rxjs';
import { NavigationItem } from '../../../types';
import { closeSidebar } from '../../../store/actions/system.actions';

@Component({
  selector: 'ui-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  navigation$: Observable<NavigationItem[]>;

  @Input('class') classes = '';
  @Input() direction: 'row' | 'column' = 'row';

  constructor(private store: Store<AppState>) {
    this.navigation$ = this.store.select((s) => s.system.navigation.main);
  }

  ngOnInit(): void {}

  closeSidebar() {
    this.store.dispatch(closeSidebar());
  }
}
