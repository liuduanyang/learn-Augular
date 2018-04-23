import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler,IonicPageModule } from 'ionic-angular';
import { MyApp } from './app.component';
import {FormsModule} from '@angular/forms';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MePage } from '../pages/me/me';
import { MessagePage} from '../pages/message/message'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {  LoadPage } from '../pages/load/load'
import { Camera } from '@ionic-native/camera';
import { AboutlistPage } from '../pages/aboutlist/aboutlist'
import { Details2Page } from '../pages/details2/details2'
import { Details1Page } from '../pages/details1/details1' 
import { MessagelistsPage } from '../pages/messagelists/messagelists'
import { SetPage  } from '../pages/set/set';
import {DengluPage} from '../pages/denglu/denglu';
import {ZhucePage} from '../pages/zhuce/zhuce';
import { ZhucelistPage } from '../pages/zhucelist/zhucelist'
import { FindpwdPage } from '../pages/findpwd/findpwd'
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    MessagePage,
    MePage,
    LoadPage,
    AboutlistPage,
    Details1Page,
    Details2Page,
    MessagelistsPage,
    SetPage ,
    DengluPage,
    ZhucePage,
    ZhucelistPage,
    FindpwdPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: true
    }),
    // IonicPageModule.forChild(AboutPage),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    MePage,
    MessagePage,
    LoadPage,
    AboutlistPage,
   Details2Page,
   Details1Page,
   MessagelistsPage,
   SetPage ,
   DengluPage,
   ZhucePage,
   ZhucelistPage,
   FindpwdPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
