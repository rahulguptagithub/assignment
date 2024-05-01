import { Component, OnInit, Input } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  @Input() users: any[] = [];

  pdfSrc: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  viewPDF(index: number) {
    const user = this.users[index];
    this.generatePDF(user); // Generate PDF for the selected user
  }

  generatePDF(user: any) {
    const doc = new jsPDF();
    // Generate PDF content based on user data
    doc.text(`Name: ${user.name}`, 10, 10);
    doc.text(`Email: ${user.email}`, 10, 20);
    doc.text(`Phone Number: ${user.phoneNumber}`, 10, 30);
    doc.text(`Address: ${user.address}`, 10, 40);
    this.pdfSrc = doc.output('datauristring'); // Set PDF content as data URI
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
  }
}
