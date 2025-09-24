import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  @Input() activeSection: string = 'about';
  @Output() scrollToSection = new EventEmitter<string>();

  navItems = [
    { id: 'about', label: '01. About Me' },
    { id: 'experience', label: '02. Experience' },
    { id: 'projects', label: '03. Projects' },
    { id: 'contact', label: '04. Contact' },
    { id: 'summarise', label: 'Summarise' }
  ];

  constructor(public themeService: ThemeService) {}

  onNavClick(sectionId: string) {
    this.scrollToSection.emit(sectionId);
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
