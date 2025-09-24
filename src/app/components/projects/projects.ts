import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
  
})
export class ProjectsComponent {
  projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.',
      image: 'grocery-store.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      githubUrl: 'https://github.com/Harry629'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates.',
      image: 'task.png',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      githubUrl: 'https://github.com/Harry629'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather dashboard with location-based forecasts and interactive maps.',
      image: 'cloudy.png',
      technologies: ['Vue.js', 'API Integration', 'Chart.js', 'CSS3'],
      githubUrl: 'https://github.com/Harry629'
    }
  ];
}
