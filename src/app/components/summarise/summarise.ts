import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summarise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summarise.html',
  styleUrl: './summarise.css'
})
export class SummariseComponent {
  summary = {
    title: 'Hari Om',
  content: 'Aspiring full-stack developer passionate about building clean, responsive, and user-friendly applications. As a fresher, I have worked on a few projects that showcase my skills in JavaScript, Angular, HTML, CSS, and basic backend development. I am eager to keep learning, exploring new technologies, and growing as a developer through hands-on experience.',
  highlights: [
    'Hands-on experience through academic and personal projects',
    'Familiar with JavaScript, Angular, HTML, and CSS',
    'Strong problem-solving and logical thinking skills',
    'Eager to learn modern frameworks and backend technologies',
    'Collaborative mindset with good communication skills'
]

  };
}
