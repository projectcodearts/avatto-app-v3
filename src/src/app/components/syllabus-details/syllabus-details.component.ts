import { Component, OnInit,Pipe, PipeTransform } from '@angular/core';
import { LoadingController, Platform } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute,Router } from '@angular/router';
import { SyllabusDetailsService } from '../../allServices/syllabus-details.service';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import { DocumentViewer,DocumentViewerOptions} from '@ionic-native/document-viewer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/File/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { ToastController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-syllabus-detail',
  templateUrl: './syllabus-details.component.html',
  styleUrls: ['./syllabus-details.component.scss'],
})

export class SyllabusDetailsComponent implements OnInit {
  fetching = true;
  pdfblock = false;
  title: string = "Syllabus";
  sylllabus: any = []; 
  iframe_src:any;
  iframe_src2:any;
  link:any;
  doc:any

  constructor(
    private platform: Platform,
    private fileopen: FileOpener,
    private file: File,
    private ft: FileTransfer,
    private document: DocumentViewer,
    
    private sanitizer: DomSanitizer, 
    private _syllabus:SyllabusDetailsService,
    private route: ActivatedRoute,
    private toastCtrl: ToastController, 
    private alertCtrl: AlertController,
    private router:Router
    ) { }

  ngOnInit() {
    this.fetching = true;
    let id = this.route.snapshot.paramMap.get('id');
    this._syllabus.getsyllabusDetails(id).pipe().subscribe(response=>{
      const data = JSON.stringify(response)
      this.sylllabus = JSON.parse(data);
      this.iframe_src = this.sylllabus.iframe_src;
     
      this.link = ('https://avatto.in/wp-content/uploads/2020/06/UGC-NET-Paper-1-updated-Syllabus.pdf');
      this.fetching = false;
      this.pdfblock=true;
      console.log(this.iframe_src);
    });
  }

  openLocalPdf(){
    let filePath = this.file.applicationDirectory + 'www/assets';

    if(this.platform.is('android')){

      let fakeName = Date.now();
      this.file.copyFile(filePath,'myFile.pdf',this.file.dataDirectory,`${fakeName}.pdf`).then(result =>{
        this.fileopen.open(result.nativeURL,'application/pdf');
      })

    }else{

      const options:DocumentViewerOptions = {
        title:'My Pdf',

      }

      this.document.viewDocument(`${filePath}/myFile.pdf`,'application/pdf',options);

    }

  }
  downloadAndOpenPdf(){
  //   let downloadUrl ='https://avatto.in/wp-content/uploads/2020/07/ugc-paper-1-syllabus.pdf';

  //   this.doc = downloadUrl;

  //   this.file.createDir(this.file.externalRootDirectory, 'my_avatto_downloads',true).then(response => {
	// 	console.log('Directory created',response);
	// 	const fileTransfer = this.ft.create();
	//     fileTransfer.download(downloadUrl,this.file.externalRootDirectory + '/my_avatto_downloads/' + this.doc.name + '.pdf').then(async entry => {
  //       console.log('file download response',entry);
  //       const toast = await this.toastCtrl.create({
  //             message: entry,
  //             duration: 2000
  //           });
  //           toast.present();
	//     })
	//     .catch(async err =>{
  //       console.log('error in file download',err);
  //       const toast = await this.toastCtrl.create({
  //         message: err,
  //         duration: 2000
  //       });
  //       toast.present();
	//     });

	// }).catch(async err => {
  //   console.log('Could not create directory "my_avatto_downloads" ',err);
  //   const toast = await this.toastCtrl.create({
  //     message: 'Could not create directory',
  //     duration: 2000
  //   });
  //   toast.present();
	// });



    // let path = this.file.dataDirectory;
    // const transfer = this.ft.create();

    // transfer.download(downloadUrl,`${path}myFile2.pdf`).then(async entry=>{
    //   console.log(entry);
    //   const toast = await this.toastCtrl.create({
    //     message: entry,
    //     duration: 2000
    //   });
    //   toast.present();
    //   let url = entry.toUrl();
    //   if(this.platform.is('ios')){
    //     this.document.viewDocument(url,'application/pdf',{});
    //   }else{
    //     this.fileOpenar.open(url,'application/pdf');
    //   }
    // }).catch(async error => {
    //   const toast = await this.toastCtrl.create({
    //     message: error,
    //     duration: 2000
    //   });
    //   toast.present();
      
    // });
  }

  ViewPDFFromUrl(URL: string, filename: string) {
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
