import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkTheme = signal(true);

  constructor() {
    this.loadTheme();
  }

  get isDark() {
    return this.isDarkTheme.asReadonly();
  }

  toggleTheme() {
    this.isDarkTheme.set(!this.isDarkTheme());
    this.saveTheme();
  }

  private loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkTheme.set(savedTheme === 'dark');
    }
  }

  private saveTheme() {
    localStorage.setItem('theme', this.isDarkTheme() ? 'dark' : 'light');
  }
}
