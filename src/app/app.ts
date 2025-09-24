import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar';
import { AboutComponent } from './components/about/about';
import { ExperienceComponent } from './components/experience/experience';
import { ProjectsComponent } from './components/projects/projects';
import { SummariseComponent } from './components/summarise/summarise';
import { ContactComponent } from './components/contact/contact';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    SummariseComponent,
    ContactComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {
  showScrollTop = false;
  activeSection = 'summarise';

  constructor(public themeService: ThemeService) {}

  ngOnInit() {
    // Theme is loaded automatically in ThemeService constructor
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showScrollTop = window.pageYOffset > 300;
    this.updateActiveSection();
  }

  updateActiveSection() {
    const sections = ['summarise', 'about', 'experience', 'projects',  'contact'];
    const scrollPos = window.pageYOffset + 100;
    
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && section.offsetTop <= scrollPos) {
        this.activeSection = sections[i];
        break;
      }
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}