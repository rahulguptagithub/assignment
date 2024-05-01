import { Component, OnInit ,Input} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {
  @Input() pdfSrc: string = '';

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }
  getSafeUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfSrc);
  }

}
