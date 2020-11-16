import { Component } from '@angular/core';
import { Data, Router, RoutesRecognized } from '@angular/router';
import { AppState } from './store/reducers';
import { Store } from '@ngrx/store';
import { closeSidebar, toggleSidebar } from './store/actions/system.actions';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  routeData: Data;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    public auth: AuthService
  ) {
    this.router.events.subscribe((data) => {
      this.store.dispatch(closeSidebar());

      if (data instanceof RoutesRecognized) {
        this.routeData = data.state.root.firstChild.data;
      }
    });
  }

  ngOnInit() {
    this.auth.checkAuth();
  }
}
