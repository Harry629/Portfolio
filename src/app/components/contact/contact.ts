import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  contactSuccess = false;

  socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/hari-om-892a821b1', icon: 'fab fa-linkedin' },
    { name: 'GitHub', url: 'https://github.com/Harry629', icon: 'fab fa-github' },
    { name: 'Twitter', url: 'https://x.com/Mohit41513890?t=3DNc7tdko6RgapcwzNkysA&s=09', icon: 'fab fa-twitter' },
    { name: 'Email', url: 'mailto:hom91227@gmail.com', icon: 'fas fa-envelope' }
  ];

  submitContact() {
    if (this.isFormValid()) {
      // Simulate form submission
      this.contactSuccess = true;
      this.contact = { name: '', email: '', subject: '', message: '' };
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        this.contactSuccess = false;
      }, 3000);
    }
  }

  isFormValid(): boolean {
    return !!(this.contact.name && this.contact.email && this.contact.message);
  }
}
