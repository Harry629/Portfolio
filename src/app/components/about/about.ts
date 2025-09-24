import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  @Output() scrollToSection = new EventEmitter<string>();

  aboutData = {
    name: 'Hari Om',
    title: 'Full Stack Developer',
    description: 'Passionate developer with expertise in modern web technologies. I love creating innovative solutions and learning new technologies.',
    skills: ['JavaScript', 'Angular', 'Node.js', 'Java', 'SpringBoot', 'MongoDB', 'MySQL'],
    image: 'https://via.placeholder.com/300x300?text=Your+Photo'
  };

  onScrollToSection(sectionId: string) {
    this.scrollToSection.emit(sectionId);
  }
}
