import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/reducers';

interface LoaderStyles {
  icon: {
    transform: string;
  };
  iconShadow: {
    transform: string;
  };
}

@Component({
  selector: 'ui-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  isLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.isLoading$ = this.store.select(
      ({ system }) => system.loading || !system.initialized
    );
  }

  ngOnInit(): void {}
}
