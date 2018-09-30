import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

import { ListComponent } from '../../components/list-component';
import { HomePage } from '../home/home';
import { Filter } from '../../providers/filter';
import { MapsPage } from '../maps/maps';
import { QRCodePage } from '../qrcode/qrcode';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

    public loadingTimeMs = 3000;
    public showLoader = true;

    public counter;

    constructor(
        public navCtrl: NavController,
        public filter: Filter){

    }
    ionViewDidLoad() {
      this.counter = this.filter.getHomeCnt();
      setTimeout(() => {
          this.showLoader = false;
      }, this.loadingTimeMs);
    }

  public goToHome() {
    this.filter.setHomeCnt(1);
    this.navCtrl.push(HomePage);
  }

  public openMaps() {
    this.navCtrl.push(MapsPage);
  }

  public showQR() {
    this.navCtrl.push(QRCodePage);
  }

  /** Objects */
  public heritage1 = {
    title: 'Rudnik zivega srebra - Idrija',
    description: 'Zelo zanimiv rudnik.',
    time1: '9.00',
    time2: '19:00',
    sound: 'uniqueId1'
  }

  public arrayScenario1 = [
        {
            title: 'Hotel Slon',
            description: '',
            time1: '9:00',
            time2: null,
            sound: null,
            image: '../../assets/imgs/icon_home.svg'
        },
        {
            title: 'Domačija Žuniči',
            description: 'Skupina objektov je nepremična kulturna in profana stavbna dediščina s sredine 19. stoletja in je tudi info center parka. Domačija stoji ob glavni cesti Marindol-Vinica. Ima štiristranični tloris, ki ga sestavljajo podkletena stanovanjska hiša, lopa in skedenj. Celoto zapira delno lesena in delno zidana stena. Središčni prostor je dvor.',
            time1: '10:40',
            time2: '11:40',
            sound: null,
            image: '../../assets/imgs/icon_farm.svg',
            largeImage: '../../assets/imgs/zunici2.jpg'
        },
        {
            title: 'Semič - Cerkev sv. Štefana',
            description: 'V virih prvič omenjena 1228, v začetku 16. stol. utrjena v tabor. Srednjeveško zasnovana cerkev je ob predelavi v 18. stol. dobila centralno zasnovan prezbiterij in pravokotno, kasneje podaljšano ladjo. Baročna oprema je bila predelana v 19. stol.',
            time1: '12:00',
            time2: '13:00',
            sound: null,
            image: '../../assets/imgs/icon_church.svg'
        },
        {
            title: 'Gostišče Kapušin',
            description: '',
            time1: '13:15',
            time2: '14:45',
            sound: null,
            image: '../../assets/imgs/icon_food.svg'
        },
        {
            title: 'Semič - Razvaline gradu Smuk',
            description: 'Od začetka 17. do srede 19. stol. je bil v lasti grofov Lichtenberg, od konca 19. stol. je razvalina. Grad je nadomestil starejše  srednjeveško poslopje, pozidano na strateškem vrhu Smuk.',
            time1: '15:00',
            time2: '16:00',
            sound: null,
            image: '../../assets/imgs/icon_castle.svg'
        },
        {
            title: 'Črnomelj - Arheološko najdišče Pastoralni center',
            description: 'Prezentirani arhitekturni ostanki, odkriti 1995-96, ki sodijo v tri časovne faze. Prvo fazo predstavlja poznorimsko obzidje s pravokotnim stolpom, drugo stavba in mestno obzidje s preloma 14. in 15. stol., tretjo obzidje in stavba s konca 15. stol.',
            time1: '16:10',
            time2: '17:10',
            sound: null,
            image: '../../assets/imgs/icon_archeology.svg'
        },
        {
            title: 'Hotel Slon',
            description: '',
            time1: '18:40',
            time2: null,
            sound: null,
            image: '../../assets/imgs/icon_home.svg'
        }
    ];

    public arrayScenario2 = [
      {
          title: 'Semenišče - Ljubljanska Tržnica',
          description: '',
          time1: '9:00',
          time2: null,
          sound: null,
          image: '../../assets/imgs/icon_church.svg'
      },
      {
          title: 'Cerkev sv. Jožefa',
          description: 'Neoromanska cerkev z večjo ladjo in kupolnim prostorom, prizidana 1912-1913 k samostanu (arh. A. Werner). Cerkveno opremo je načrtoval arh. Plečnik (1922-1943); oltar sv. Jožefa in ureditev prezbiterija z beuronskimi barvami sten sta iz 1941.',
          time1: '9:15',
          time2: '9:45',
          sound: null,
          image: '../../assets/imgs/icon_church.svg'
      },
      {
          title: 'Cerkev sv. Nikolaja',
          description: 'Dvostolpna cerkev, sezidana 1700-1708 po načrtih Andrea Pozza kot baročna dvorana s križiščem in prvotno navidezno kupolo. Bogata notranja oprema in iluzionistična poslikava G. Quaglie (1703-1706).',
          time1: '10:05',
          time2: '10:35',
          sound: null,
          image: '../../assets/imgs/icon_church.svg'
      },
      {
          title: 'Palača Kazina',
          description: 'Večnamenska javna palača, zgrajena 1835-1837 pod vodstvom V. Vadnava, je strogo klasicistična arhitektura, ki odraža racionalizem 1. polovice 19. stol. Krasitvena dela v dvorani iz 19. stol. dopolnjujejo interierji v slogu funkcionalizma.',
          time1: '10:45',
          time2: '11:45',
          sound: null,
          image: '../../assets/imgs/icon_castle.svg',
          largeImage: '../../assets/imgs/kazina.jpg'
      },
      {
          title: 'Frančiškanski samostan',
          description: 'Nad trgom stoji baročni avguštinski (sedaj frančiškanski) samostan (18. stol.) z dozidanimi trakti vzdolž Nazorjeve ulice in ob cerkvi Marijinega oznanenja, zidani po 1646.',
          time1: '11:50',
          time2: '12:20',
          sound: null,
          image: '../../assets/imgs/icon_church.svg'
      },
      {
          title: 'Semenišče - Ljubljanska Tržnica',
          description: '',
          time1: '13:30',
          time2: null,
          sound: null,
          image: '../../assets/imgs/icon_church.svg'
      }
    ];
}
