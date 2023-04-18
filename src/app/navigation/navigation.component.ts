import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  themeColor: 'primary' | 'accent' | 'warn' = 'primary'; // ? notice this
  isDark = false; // ?
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  toggleTheme(): void {
    this.isDark = !this.isDark;
    // if (this.isDark) {
    //   this.overlayContainer.getContainerElement().classList.add('dark-theme');
    // } else {
    //   this.overlayContainer
    //     .getContainerElement()
    //     .classList.remove('dark-theme');
    // }
  }

  constructor(private breakpointObserver: BreakpointObserver) {}
}
