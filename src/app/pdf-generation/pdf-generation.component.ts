import { Component, OnInit ,Input} from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-pdf-generation',
  templateUrl: './pdf-generation.component.html',
  styleUrls: ['./pdf-generation.component.css']
})
export class PdfGenerationComponent implements OnInit {
  @Input() users: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  generatePDF() {
    const doc = new jsPDF();
    let yPos = 10;
  
    this.users.forEach((user, index) => {
      const userData = `Name: ${user.name}\nEmail: ${user.email}\nPhone Number: ${user.phoneNumber}\nAddress: ${user.address}\n\n`;
      doc.text(userData, 10, yPos);
      yPos += 40; // Increment y-position for next entry
    });
  
    doc.save('user-list.pdf');
  }
  
}
