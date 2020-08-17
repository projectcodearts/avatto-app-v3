import { Component, OnInit,ElementRef, Renderer2, ViewChild } from '@angular/core';
import { McqService } from '../../../allServices/mcq.service';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Platform, ToastController, AlertController } from '@ionic/angular';
import { DocumentViewer,DocumentViewerOptions} from '@ionic-native/document-viewer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/File/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { pid } from 'process';
@Component({
  selector: 'app-mcq-item',
  templateUrl: './mcq-item.component.html',
  styleUrls: ['./mcq-item.component.scss'],
})
export class McqItemComponent implements OnInit {

  mcqdata:any;
  total:any;
  fetching = false;
  users = [];
  page = 1;
  solvedPaperEnaable = false;
  solvedPaper:any;
  lStart:any =0;
  lEnd:any = this.lStart + 1;
  nextBtnActive : any = "false";
  maximumPages = 3;
  data:any;
  qsPdf:any;
  ansPdf:any;
  prev:any="false";
  options:any[];
  constructor(private platform: Platform,
    private fileopen: FileOpener,
    private file: File,
    private ft: FileTransfer,
    private document: DocumentViewer,private _mcq: McqService,public navCtrl: NavController,private storage: Storage,
    private httpClient: HttpClient,private route: ActivatedRoute,private el: ElementRef,private renderer: Renderer2) {
    this.loadUsers();
   }
  loadUsers(infiniteScroll?) {
    let pid = this.route.snapshot.paramMap.get('id');
    this.httpClient.get(`https://avatto.in/wp-json/avatto/v2/mcq/${pid}/${this.page}`)
    .subscribe(res => {
      this.data = JSON.stringify(res['results']);
      //this.users = JSON.parse(this.data);
      //console.log(res['results']);
      this.users = this.users.concat(res['results']);
      this.total = this.users.length;

      console.log(this.users);
      this.solvedPaper = this.users[0].solved_paper;
      if(this.solvedPaper == "Yes"){
        this.solvedPaperEnaable = true;
        this.qsPdf = this.users[0].qs_pdf;
        this.ansPdf = this.users[0].ans_pdf;
      }
     
    })
  }
  
  ngOnInit() {
    this.mcqdata=this._mcq.getmcqsetup();

    this.fetching = true;
    let id = this.route.snapshot.paramMap.get('id');
    this.httpClient.get(`https://avatto.in/wp-json/avatto/v2/mcq-max/`+id)
    .subscribe(res => {
      this.data = JSON.stringify(res);
      this.maximumPages = JSON.parse(this.data);
      console.log(this.maximumPages);
      this.fetching = false;
    })

    this.storage.get('mcq_data'+id).then((val) => {
        if(val){
          this.lStart = val.lStart;
          this.lEnd = val.lEnd;
          
        }
    });

  }

  nextQuestion(questionId,params : number){
    let pusheditems = {};
    let id = this.route.snapshot.paramMap.get('id');
    if(this.lStart < this.users.length-1){
      this.lStart = params + 1;
      this.lEnd = this.lStart + 1;
    }
    this.nextBtnActive = "false";
    this.prev = "true";
    pusheditems['id'] = this.route.snapshot.paramMap.get('id');
    pusheditems['lStart'] = this.lStart;
    pusheditems['lEnd'] = this.lEnd;
    pusheditems['length'] = this.users.length;

    this.storage.set("mcq_data"+id,pusheditems);

  }

  submitQuestion(questionId,params : number){
    let pusheditems = {};
    let id = this.route.snapshot.paramMap.get('id');
    if(this.lStart < this.users.length-1){
      this.lStart = params + 1;
      this.lEnd = this.lStart + 1;
    }
    this.nextBtnActive = "false";
    this.prev = "true";
    pusheditems['id'] = this.route.snapshot.paramMap.get('id');
    pusheditems['lStart'] = this.lStart;
    pusheditems['lEnd'] = this.lEnd;
    pusheditems['length'] = this.users.length;
    this.storage.set("mcq_data"+id,pusheditems);
    
  }

  prevQuestion(questionId,params : number){
    let pusheditems = {};
    let id = this.route.snapshot.paramMap.get('id');
    if(this.lEnd > 1){
      this.lEnd = parseInt(this.lEnd) - 1;
      this.lStart = parseInt(this.lEnd) - 1;
      console.log(this.lStart);
      this.nextBtnActive = "false";
      this.prev = "true";
      if(this.lStart == 0){
        this.prev = "false";
      }
    }
    pusheditems['id'] = this.route.snapshot.paramMap.get('id');
    pusheditems['lStart'] = this.lStart;
    pusheditems['lEnd'] = this.lEnd;
    pusheditems['length'] = this.users.length;
    this.storage.set("mcq_data"+id,pusheditems);

  }



  selectAnswer(params, questionId,rightChoice,selector,i){
      let className = '';
      let explainClassname = '';
      if(params == rightChoice){
        className = '.ans'+params+i+questionId;
        const btnElement = (<HTMLElement>this.el.nativeElement).querySelector(className); 
        this.renderer.addClass(
          btnElement,
          'right'
        );
        explainClassname = '.answare-back'+questionId;  
        const expElement = (<HTMLElement>this.el.nativeElement).querySelector(explainClassname); 
        this.renderer.setStyle(
          expElement,
          'display',
          'block'
        );  

      }

      else{
        className = '.ans'+params+i+questionId;
        const btnElement = (<HTMLElement>this.el.nativeElement).querySelector(className); 
        this.renderer.addClass(
          btnElement,
          'wrong'
        );
      }
      this.nextBtnActive = "true";
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
