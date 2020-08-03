import { Component, OnInit } from '@angular/core';
import { Platform, ToastController, AlertController } from '@ionic/angular';
import { DocumentViewer,DocumentViewerOptions} from '@ionic-native/document-viewer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/File/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';


import { ActivatedRoute, Router } from '@angular/router';
import { EligiblityDetailsService } from 'src/app/allServices/eligiblity-details.service';

@Component({
  selector: 'app-eligiblity-details',
  templateUrl: './eligiblity-details.component.html',
  styleUrls: ['./eligiblity-details.component.scss'],
})
export class EligiblityDetailsComponent implements OnInit {
  fetching = true;
  pdfblock = false;
  eligiblity: any = []; 
  iframe_src:any;
  constructor(
    private platform: Platform,
    private fileopen: FileOpener,
    private file: File,
    private ft: FileTransfer,
    private document: DocumentViewer,
    private _eligiblity:EligiblityDetailsService,
    private route: ActivatedRoute,
    private toastCtrl: ToastController, 
    private alertCtrl: AlertController,
    private router:Router
  ) { }

  ngOnInit() {
    this.fetching = true;
    let id = this.route.snapshot.paramMap.get('id');
    this._eligiblity.geteligiblityDetails(id).pipe().subscribe(response=>{
      const data = JSON.stringify(response)
      this.eligiblity = JSON.parse(data);
      this.iframe_src = this.eligiblity.iframe_src;
     
      
      this.fetching = false;
      this.pdfblock=true;
      console.log(this.iframe_src);
    });
  }
  ViewPDFFromUrl2(URL: string, filename: string) {
    console.log(URL);
    filename = filename + new Date().toISOString();
    const transfer: FileTransferObject = this.ft.create();
    transfer.download(URL, this.file.dataDirectory + `${filename}.pdf`).then((entry) => {
      const entryUrl = entry.toURL();
      if (this.platform.is('ios')) {
        //// iOS Version
        this.document.viewDocument(entryUrl, 'application/pdf',{});
      } else {
        this.fileopen.open(entryUrl, 'application/pdf');
      }
    }, (error) => {
     console.log('Failed!', error);
    });

  }

}
