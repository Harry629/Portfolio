import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'Biz2x',
      position: 'Associate Software Engineer',
      duration: 'Sept 2025 - Present',
      description: 'Currently learning the basics of MEAN Stack as an Intern',
      technologies: ['Angular', 'Express.js', 'Node.js', 'MongoDB']
    },
    {
      company: 'Epam Systems',
      position: 'Associate System Engineer Intern',
      duration: 'Jan 2025 - June 2025',
      description: 'Learned to Deploy applications using Azure Devops',
      technologies: ['Azure', 'Linux', 'Docker', 'DevOps']
    },
    {
      company: 'TechnoHacks',
      position: 'Frontend Developer Intern',
      duration: 'June 2024 - Sept 2024',
      description: 'Created responsive websites and web applications for various projects.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React']
    }
  ];
}
