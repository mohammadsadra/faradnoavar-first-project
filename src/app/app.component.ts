import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {animate, state, style, transition, trigger} from '@angular/animations';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('show', style({
        opacity: 1,
      })),
      state('hide', style({
        opacity: 0,
      })),
      transition('show => hide', animate('.33s ease-out')),
      transition('hide => show', animate('.33s ease-in'))
    ])
  ]
})
export class AppComponent{

  documentList = [
    {
      "documentType": "درخواست تنظیم سند  وکالت کاری خودرو",
      "location": "دفتر 555 تهران",
      "createDate": "2 مهر 1402",
      "documentId": "1402102154",
      "documentIdType": "شماره پیگیری",
      "status": "در حال انجام",
      "description": "شما ماشین را از علی علوی در دفترخانه 741 تهران خریده\u200Cاید.",
      "icon": "car",
      "show": false,
      "people": "3",
      "statusTag": "working"
    },
    {
      "documentType": "سند خرید و فروش ملک",
      "location": "دفتر 941 تهران",
      "createDate": "23 مرداد 1402",
      "documentId": "14020102002541200112011",
      "documentIdType": "شناسه یکتای سند",
      "status": " تائید نهایی",
      "description": "شما ملک با پلاک اصلی 11/420 را از مجید مجیدی در دفترخانه 941 تهران خریده\u200Cاید.",
      "icon": "home",
      "show": false,
      "people": "1",
      "statusTag": "done"
    },
     {
      "documentType": " گواهی امضاء",
      "location": "دفتر 10 تهران",
      "createDate": "2 بهمن 1401",
      "documentId": "14020102002541200112011",
      "documentIdType": "شناسه گواهی امضاء",
      "status": " تائید نهایی",
      "description": "مورد تایید است.",
      "icon": "document",
       "show": false,
       "people": "4",
       "statusTag": "done"
    },
     {
      "documentType": "وکالتنامه",
      "location": "دفتر 17 اهواز",
      "createDate": "2 آبان 1401",
      "documentId": "14020102002541200112011",
      "documentIdType": "شناسه یکتای سند",
      "status": " تائید نهایی",
      "description": "شما ملک با پلاک اصلی 11/420 را از مجید مجیدی در دفترخانه 941 تهران خریده\u200Cاید.",
      "icon": "car",
       "show": false,
       "people": "2",
       "statusTag": "done"
    },
     {
      "documentType": " گواهی امضاء",
      "location": "دفتر 20 ساری",
      "createDate": "2 اردیبهشت 1401",
      "documentId": "14020102002541200112011",
      "documentIdType": "شناسه یکتای گواهی امضاء",
      "status": " تائید نهایی",
      "description": "مورد تایید است.",
      "icon": "document",
       "show": false,
       "people": "0",
       "statusTag": "done"
    },
     {
      "documentType": "رهن و اجاره",
      "location": "دفتر 231 بندرعباس",
      "createDate": "2 شهریور 1400",
      "documentId": "14020102002541200112011",
      "documentIdType": "شناسه یکتای سند",
      "status": " تائید نهایی",
      "description": "شما ملک با پلاک اصلی 11/420 را از مجید مجیدی در دفترخانه 941 تهران خریده\u200Cاید.",
      "icon": "home",
       "show": false,
       "people": "2",
       "statusTag": "done"
    }
  ];

  search: string = "";

  onSearchChange(searchValue: string): void {
    this.search = searchValue;
  }

  changeShowStatus(document: any) {
    document.show = !document.show;
  }

}
