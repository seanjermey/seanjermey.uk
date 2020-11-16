import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/reducers';
import { closeSidebar } from '../../../store/actions/system.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'theme-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  siteName$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.siteName$ = this.store.select((s) => s.system.siteName);
  }

  ngOnInit(): void {}

  closeSidebar() {
    this.store.dispatch(closeSidebar());
  }
}
