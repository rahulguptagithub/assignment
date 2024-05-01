import { Component, OnInit, Input } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-pdf-download',
  templateUrl: './pdf-download.component.html',
  styleUrls: ['./pdf-download.component.css']
})
export class PdfDownloadComponent implements OnInit {
  @Input() users: any[] = [];
  constructor() { }

  ngOnInit(): void {
  } 

  downloadPDF() {
    const doc = new jsPDF();

    doc.text('User List', 10, 10);
    let yPos = 20;
    this.users.forEach((user, index) => {
      yPos = yPos + 10;
      doc.text(`Name: ${user.name}`, 10, yPos);
      doc.text(`Email: ${user.email}`, 10, yPos + 5);
      doc.text(`Phone Number: ${user.phoneNumber}`, 10, yPos + 10);
      doc.text(`Address: ${user.address}`, 10, yPos + 15);
    });

    doc.save('user-list.pdf');
  }

}
