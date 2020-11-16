import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SocialLink } from '../../../types';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/reducers';

@Component({
  selector: 'ui-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss'],
})
export class SocialLinksComponent implements OnInit {
  socialLinks$: Observable<SocialLink[]>;

  @Input('class') classes = '';

  constructor(private store: Store<AppState>) {
    this.socialLinks$ = this.store.select((s) => s.system.socialLinks);
  }

  ngOnInit(): void {}
}
