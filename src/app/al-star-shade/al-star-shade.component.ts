import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-al-star-shade',
  templateUrl: './al-star-shade.component.html',
  styleUrls: ['./al-star-shade.component.css']
})
export class AlStarShadeComponent implements OnInit {

  selectedShade : string = '1';
  selectedCredit : string = 'Kustom Ink by Jira';
  selectedUrl : string ='https://www.facebook.com/kustominkbyjira';
  artworkList: Artwork[] = artworks;
  
  constructor() { }

  ngOnInit() {
  }

  selectShade(id:string, credit:string, url:string)
  {
    this.selectedShade = id;
    this.selectedCredit = credit;
    this.selectedUrl = url;
  }

  allShades : string[] = ['1','2','3','4','5','6','7','8','9','10',
  '11','12','13','14','15','16','17','18','19','20','21','22'];

   hovers : string[] = ['0','0','0','0','0','0','0','0','0','0','0',
   '0','0','0','0','0','0','0','0','0','0','0'];
}


  export interface Artwork{
    id: string;
    credit: string;
    url: string;
  }

  const artworks: Artwork[] = [
    {id: '1', credit: 'Kustom Ink by Jira', url: 'https://www.facebook.com/kustominkbyjira'},
    {id: '2', credit: 'Taikom Kriangkri', url: 'https://www.facebook.com/taikom.kriangkri'},
    {id: '3', credit: 'Miele Apirada', url: 'https://www.facebook.com/miele.apirada'},
    {id: '4', credit: 'Kustom Ink by Jira', url: 'https://www.facebook.com/kustominkbyjira'},
    {id: '5', credit: 'Miele Apirada', url: 'https://www.facebook.com/miele.apirada'},
    {id: '6', credit: 'Taikom Kriangkri', url: 'https://www.facebook.com/taikom.kriangkri'},
    {id: '7', credit: 'Taikom Kriangkri', url: 'https://www.facebook.com/taikom.kriangkri'},
    {id: '8', credit: 'Kustom Ink by Jira', url: 'https://www.facebook.com/kustominkbyjira'},
    {id: '9', credit: 'Miele Apirada', url: 'https://www.facebook.com/miele.apirada'},
    {id: '10', credit: 'Kustom Ink by Jira', url: 'https://www.facebook.com/kustominkbyjira'},
    {id: '11', credit: 'Kustom Ink by Jira', url: 'https://www.facebook.com/kustominkbyjira'},
    {id: '12', credit: 'Miele Apirada', url: 'https://www.facebook.com/miele.apirada'},
    {id: '13', credit: 'Taikom Kriangkri', url: 'https://www.facebook.com/taikom.kriangkri'},
    {id: '14', credit: 'Taikom Kriangkri', url: 'https://www.facebook.com/taikom.kriangkri'},
    {id: '15', credit: 'Kustom Ink by Jira', url: 'https://www.facebook.com/kustominkbyjira'},
    {id: '16', credit: 'Taikom Kriangkri', url: 'https://www.facebook.com/taikom.kriangkri'},
    {id: '17', credit: 'Kustom Ink by Jira', url: 'https://www.facebook.com/kustominkbyjira'},
    {id: '18', credit: 'Taikom Kriangkri', url: 'https://www.facebook.com/taikom.kriangkri'},
    {id: '19', credit: 'Miele Apirada', url: 'https://www.facebook.com/miele.apirada'},
    {id: '20', credit: 'Taikom Kriangkri', url: 'https://www.facebook.com/taikom.kriangkri'},
    {id: '21', credit: 'Taikom Kriangkri', url: 'https://www.facebook.com/taikom.kriangkri'},
    {id: '22', credit: 'Taikom Kriangkri', url: 'https://www.facebook.com/taikom.kriangkri'}
  ];

