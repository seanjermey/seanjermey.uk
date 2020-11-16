import { Component, HostListener, Input, OnInit } from '@angular/core';

interface JumbotronStyles {
  icon: {
    transform: string;
  };
  iconShadow: {
    transform: string;
  };
}

@Component({
  selector: 'ui-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss'],
})
export class JumbotronComponent implements OnInit {
  @Input() icon = 'desktop';

  styles: JumbotronStyles = {
    icon: {
      transform: 'rotate(-15deg) translate(-36%, -63%)',
    },
    iconShadow: {
      transform: 'rotate(-15deg)',
    },
  };

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e) {
    const offsets = {
      x: (100 / window.outerWidth) * e.screenX,
      y: (100 / window.outerHeight) * e.screenY,
      inverse: {
        x: ((window.outerWidth - e.screenX) / window.outerWidth) * 100,
        y: ((window.outerHeight - e.screenY) / window.outerHeight) * 100,
      },
    };

    this.styles = {
      icon: {
        transform: `rotate(-15deg) translate(-${
          36 + (100 - offsets.inverse.x) / 20
        }%, -${63 + (100 - offsets.inverse.y) / 20}%)`,
      },
      iconShadow: {
        transform: `rotate(-15deg) translate(${offsets.x / 50}%, ${
          offsets.y / 50
        }%)`,
      },
    };
  }

  constructor() {}

  ngOnInit(): void {}
}
