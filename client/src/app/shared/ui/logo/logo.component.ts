import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/reducers';

@Component({
  selector: 'ui-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
  siteName$: Observable<string>;

  @Input() icon = 'headphones-alt';

  constructor(private store: Store<AppState>) {
    this.siteName$ = this.store.select((s) => s.system.siteName);
  }

  ngOnInit(): void {}
}
