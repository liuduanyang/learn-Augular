webpackJsonp([12],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DengluPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zhuce_zhuce__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_findpwd_findpwd__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the DengluPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DengluPage = /** @class */ (function () {
    function DengluPage(modalCtrl, navCtrl, navParams, viewCtrl) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    DengluPage.prototype.back = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */]);
        profileModal.present();
    };
    DengluPage.prototype.zhuce = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__zhuce_zhuce__["a" /* ZhucePage */]);
        profileModal.present();
    };
    DengluPage.prototype.find = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_findpwd_findpwd__["a" /* FindpwdPage */]);
        profileModal.present();
    };
    DengluPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-denglu',template:/*ion-inline-start:"C:\Users\liuduanyang\Desktop\second(1)\second\src\pages\denglu\denglu.html"*/'<ion-header>\n    <ion-navbar color=\'bgColor\'>\n      <img src="assets/imgs/left_white.png" alt="" (click)=\'back()\'>\n      <span>登录</span>\n    </ion-navbar>\n</ion-header>\n  \n<ion-content padding style="background-image:url(assets/imgs/bg.png);background-size:contain;" text-center>\n<img src="assets/imgs/load2.png" alt="">\n<p>全球不良资产超级综合服务平台</p>\n\n<form class="form1">\n  <div>\n      <ion-icon name="person" color=\'light\'></ion-icon>\n      <input type="text" placeholder="请输入用户名">\n  </div>\n   <div>\n      <ion-icon name="lock" color=\'light\'></ion-icon>\n      <input type="password" placeholder="请输入密码">\n   </div>\n \n</form>\n\n<button  class="denglu">登录</button>\n<button  class="zhuce" (click)=\'zhuce()\'>注册</button>\n<p style="font-size:14px;" (click)=\'find()\'>忘记密码?</p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\liuduanyang\Desktop\second(1)\second\src\pages\denglu\denglu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], DengluPage);
    return DengluPage;
}());

//# sourceMappingURL=denglu.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZhucePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_zhucelist_zhucelist__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ZhucePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ZhucePage = /** @class */ (function () {
    function ZhucePage(modalCtrl, viewCtrl, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ZhucePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ZhucePage');
    };
    ZhucePage.prototype.back = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__["a" /* TabsPage */]);
        profileModal.present();
    };
    ZhucePage.prototype.zhuce = function () {
        console.log('注册');
    };
    ZhucePage.prototype.zhucetxt = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__pages_zhucelist_zhucelist__["a" /* ZhucelistPage */]);
        profileModal.present();
    };
    ZhucePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-zhuce',template:/*ion-inline-start:"C:\Users\liuduanyang\Desktop\second(1)\second\src\pages\zhuce\zhuce.html"*/'<ion-header>\n    <ion-navbar color=\'bgColor\'>\n      <img src="assets/imgs/left_white.png" alt="" (click)=\'back()\'>\n      <span>手机注册</span>\n    </ion-navbar>\n</ion-header>\n  \n<ion-content padding style="background-image:url(assets/imgs/bg.png);background-size:contain;" text-center>\n\n<form class="form1">\n    <ion-item>\n        <ion-icon name="person" color=\'light\'></ion-icon>\n        <input type="text" placeholder="请输入用户名">\n    </ion-item>\n    \n    <ion-item>\n        <ion-icon name="lock" color=\'light\'></ion-icon>\n        <input type="password" placeholder="请输入密码">\n     </ion-item>\n     \n    <ion-item>\n        <ion-icon name="lock" color=\'light\'></ion-icon>\n        <input type="password" placeholder="请再次输入密码">\n    </ion-item>\n</form>\n\n<button  class="zhuce" (click)=\'zhuce()\'>注册</button>\n<ion-item text-center class="spe">\n    <input type="checkbox" checked>\n    <span>我已阅读并同意<u (click)="zhucetxt()">《注册协议》</u></span>\n</ion-item>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\liuduanyang\Desktop\second(1)\second\src\pages\zhuce\zhuce.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ZhucePage);
    return ZhucePage;
}());

//# sourceMappingURL=zhuce.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AboutlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutlistPage = /** @class */ (function () {
    function AboutlistPage(viewCtrl, navCtrl, navParams, camera) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
    }
    AboutlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutlistPage');
    };
    // take(){
    //   const options: CameraOptions = {
    //     quality: 100,
    //     destinationType: this.camera.DestinationType.DATA_URL,
    //     encodingType: this.camera.EncodingType.JPEG,
    //     mediaType: this.camera.MediaType.PICTURE
    //   }
    //   this.camera.getPicture(options).then((imageData) => {
    //    let base64Image = 'data:image/jpeg;base64,' + imageData;
    //    this.imgSrc=base64Image;
    //   }, (err) => {
    //    alert('error');
    //   });
    // }
    AboutlistPage.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    AboutlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aboutlist',template:/*ion-inline-start:"C:\Users\liuduanyang\Desktop\second(1)\second\src\pages\aboutlist\aboutlist.html"*/'<!--\n  Generated template for the AboutlistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color=\'mainColor\'>\n    <img src="assets/imgs/left.png" alt="" (click)=\'back()\'>\n    <span>发布信息</span>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding text-center>\n\n   <ion-list>\n    <ion-item>\n      <p>地区</p>\n      <div item-content class="item-content">\n        <p style="color: rgb(207,207,207);font-size: 20px;">请选择</p>\n      </div>\n      <ion-icon name="arrow-dropright" item-end></ion-icon>\n    </ion-item>\n    <ion-item>\n        <p>来源</p>\n        <div item-content class="item-content">\n          <p style="font-size: 20px;">北京</p>\n        </div>\n        <ion-icon name="arrow-dropright" item-end></ion-icon>\n      </ion-item>\n      <ion-item>\n          <p>总金额</p>\n          <div item-content class="item-content">\n            <p style="color: rgb(207,207,207);font-size: 20px;">请输入</p>\n          </div>\n          <ion-icon name="arrow-dropright" item-end></ion-icon>\n        </ion-item>\n        <ion-item>\n            <p>转让价</p>\n            <div item-content class="item-content">\n              <p style="font-size: 20px;">500万</p>\n            </div>\n            <ion-icon name="arrow-dropright" item-end></ion-icon>\n          </ion-item>\n  </ion-list>\n  <p class=\'spe\'>内容描述</p>\n  <textarea placeholder="请输入描述"></textarea>\n  <ion-item>\n      <p>清单上传</p>\n      <ion-icon name="arrow-dropright" item-end></ion-icon>\n    </ion-item>\n  <button ion-button >确认上传</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\liuduanyang\Desktop\second(1)\second\src\pages\aboutlist\aboutlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
    ], AboutlistPage);
    return AboutlistPage;
}());

//# sourceMappingURL=aboutlist.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagelistsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MessagelistsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessagelistsPage = /** @class */ (function () {
    function MessagelistsPage(params, navCtrl, navParams) {
        this.params = params;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = params.data.item;
    }
    MessagelistsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MessagelistsPage');
    };
    MessagelistsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-messagelists',template:/*ion-inline-start:"C:\Users\liuduanyang\Desktop\second(1)\second\src\pages\messagelists\messagelists.html"*/'<ion-header>\n  <ion-navbar color=\'mainColor\'>\n    <img src="assets/imgs/left.png" alt="" (click)=\'back()\'>\n    <span style="font-weight:bolder">{{item.title}}</span>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding  style=" background-color: rgb(238,238,238);">\n  <p>{{item.time}}</p>\n  <div class="dialog">\n    <img src="{{item.color}}" alt="">\n    <span>\n      {{ item.description }}\n    </span>\n  </div>\n  \n</ion-content>\n<ion-footer style="background-color:white;">\n  <ion-icon name="mic" color=\'mainColor\' class="icon1"></ion-icon>\n <input type="text" placeholder="输入聊天内容……">\n <ion-icon name=\'happy\' color=\'mainColor\' end class="icon2"></ion-icon>\n <ion-icon name=\'add-circle\' color=\'mainColor\' end class="icon3"></ion-icon>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\liuduanyang\Desktop\second(1)\second\src\pages\messagelists\messagelists.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MessagelistsPage);
    return MessagelistsPage;
}());

//# sourceMappingURL=messagelists.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_details1_details1__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_details2_details2__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_set_set__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoadPage = /** @class */ (function () {
    function LoadPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.items = [];
    }
    LoadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoadPage');
    };
    LoadPage.prototype.openNavDetailsPage1 = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__pages_details1_details1__["a" /* Details1Page */], { name: '我的发布' });
        profileModal.present();
    };
    LoadPage.prototype.openNavDetailsPage2 = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__pages_details2_details2__["a" /* Details2Page */], { name: '我的合作' });
        profileModal.present();
    };
    LoadPage.prototype.openNavDetailsPage3 = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_set_set__["a" /* SetPage */], { name: '设置' });
        profileModal.present();
    };
    LoadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-load',template:/*ion-inline-start:"C:\Users\liuduanyang\Desktop\second(1)\second\src\pages\load\load.html"*/'<!--\n  Generated template for the LoadPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="mainColor">\n      <span>我的</span>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="message" text-center>\n    <img src="assets/imgs/tou1.png" alt="">\n    <p class="txt1">张扬</p>\n    <p><span>北京市</span><span class="spe">|</span><span>海淀区</span></p>\n    <p class="txt2">北京资芽网络科技有限公司</p>\n  </div>\n <ion-list>\n  <button ion-item icon-start class="btn">\n    <img src="assets/imgs/my1.png" alt="" class="img1">\n    <span class="name">芽币</span>\n    <img src="assets/imgs/arrow.png" alt="" class="img2">\n  </button>\n  <button ion-item  (click)="openNavDetailsPage1()" icon-start class="btn">\n    <img src="assets/imgs/my2.png" alt="" class="img1">\n    <span class="name">我发布的</span>\n    <img src="assets/imgs/arrow.png" alt="" class="img2">\n  </button>\n  <button ion-item  (click)="openNavDetailsPage2()" icon-start class="btn">\n    <img src="assets/imgs/my3.png" alt="" class="img1">\n    <span class="name">我合作的</span>\n    <img src="assets/imgs/arrow.png" alt="" class="img2">\n  </button>\n  <button ion-item   icon-start class="btn">\n    <img src="assets/imgs/my4.png" alt="" class="img1">\n    <span class="name">我的收藏</span>\n    <img src="assets/imgs/arrow.png" alt="" class="img2">\n  </button>\n  <button ion-item   icon-start class="btn">\n    <img src="assets/imgs/my1.png" alt="" class="img1">\n    <span class="name">我的草稿箱</span>\n    <img src="assets/imgs/arrow.png" alt="" class="img2">\n  </button>\n  <button ion-item   icon-start class="btn">\n    <img src="assets/imgs/my2.png" alt="" class="img1">\n    <span class="name">视频发布</span>\n    <img src="assets/imgs/arrow.png" alt="" class="img2">\n  </button>\n  <button ion-item   icon-start class="btn">\n    <img src="assets/imgs/my3.png" alt="" class="img1">\n    <span class="name">完善信息</span>\n    <img src="assets/imgs/arrow.png" alt="" class="img2">\n  </button>\n  <button ion-item   icon-start class="btn">\n    <img src="assets/imgs/my4.png" alt="" class="img1">\n    <span class="name">VIP等级</span>\n    <img src="assets/imgs/arrow.png" alt="" class="img2">\n  </button>\n  <button ion-item  icon-start class="btn">\n    <img src="assets/imgs/my1.png" alt="" class="img1">\n    <span class="name">账户安全</span>\n    <img src="assets/imgs/arrow.png" alt="" class="img2">\n  </button>\n  <button ion-item  icon-start class="btn">\n    <img src="assets/imgs/my2.png" alt="" class="img1">\n    <span class="name">帮助与反馈</span>\n    <img src="assets/imgs/arrow.png" alt="" class="img2">\n  </button>\n  <button ion-item icon-start class="btn" (click)="openNavDetailsPage3()">\n    <img src="assets/imgs/my3.png" alt="" class="img1">\n    <span class="name">设置</span>\n    <img src="assets/imgs/arrow.png" alt="" class="img2">\n  </button>\n </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\liuduanyang\Desktop\second(1)\second\src\pages\load\load.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], LoadPage);
    return LoadPage;
}());

//# sourceMappingURL=load.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Details1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Details1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Details1Page = /** @class */ (function () {
    function Details1Page(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [{
                name: '地区：北京',
                origin: '银行',
                namelist: '资产包转让',
                moneyName: '资金',
                money: '100万'
            },
            { name: '地区：北京',
                origin: '类型：借贷', namelist: '委外催收', moneyName: '合购金额',
                money: '500万' },
            { name: '地区：北京',
                origin: '买方性质：国企', namelist: '商业保理', moneyName: '资金',
                money: '500万' }];
    }
    Details1Page.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    Details1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details1',template:/*ion-inline-start:"C:\Users\liuduanyang\Desktop\second(1)\second\src\pages\details1\details1.html"*/'<!--\n  Generated template for the Details1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n\n  <ion-navbar color=\'mainColor\'>\n    <img src="assets/imgs/left.png" alt="" (click)=\'back()\'>\n    <span>我发布的</span>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list inset *ngFor="let item of items;" >\n    <div>\n      <span>{{item.namelist}}</span><span class="special">--FB001</span>\n    </div>\n  <button ion-item >\n    <ion-avatar item-start>\n      <img src="assets/imgs/lo1.png">\n    </ion-avatar>\n    <p>{{item.name}}</p>\n    <p>{{item.origin}}</p>\n    <div item-content class="item-content">\n      <p style="color: red;font-size: 20px;">{{item.money}}</p>\n      <p>{{item.moneyName}}</p>\n    \n    </div>\n\n  </button> \n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\liuduanyang\Desktop\second(1)\second\src\pages\details1\details1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], Details1Page);
    return Details1Page;
}());

//# sourceMappingURL=details1.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Details2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Details2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Details2Page = /** @class */ (function () {
    function Details2Page(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [{
                name: '地区：北京',
                origin: '银行',
                namelist: '资产包转让',
                moneyName: '资金',
                money: '100万'
            },
            { name: '地区：北京',
                origin: '类型：借贷', namelist: '委外催收', moneyName: '合购金额',
                money: '500万' },
            { name: '地区：北京',
                origin: '买方性质：国企', namelist: '商业保理', moneyName: '资金',
                money: '500万' }];
    }
    Details2Page.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    Details2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details2',template:/*ion-inline-start:"C:\Users\liuduanyang\Desktop\second(1)\second\src\pages\details2\details2.html"*/'<!--\n  Generated template for the Details1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n\n  <ion-navbar color=\'mainColor\'>\n    <img src="assets/imgs/left.png" alt="" (click)=\'back()\'>\n    <span>我合作的</span>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list inset *ngFor="let item of items;" >\n    <div>\n      <span>{{item.namelist}}</span><span class="special">--FB001</span>\n    </div>\n  <button ion-item >\n    <ion-avatar item-start>\n      <img src="assets/imgs/lo1.png">\n    </ion-avatar>\n    <p>{{item.name}}</p>\n    <p>{{item.origin}}</p>\n    <div item-content class="item-content">\n      <p style="color: red;font-size: 20px;">{{item.money}}</p>\n      <p>{{item.moneyName}}</p>\n    \n    </div>\n\n  </button> \n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\liuduanyang\Desktop\second(1)\second\src\pages\details2\details2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], Details2Page);
    return Details2Page;
}());

//# sourceMappingURL=details2.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_denglu_denglu__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SetPage = /** @class */ (function () {
    function SetPage(modalCtrl, viewCtrl, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SetPage');
    };
    SetPage.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    SetPage.prototype.denglu = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__pages_denglu_denglu__["a" /* DengluPage */]);
        profileModal.present();
    };
    SetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-set',template:/*ion-inline-start:"C:\Users\liuduanyang\Desktop\second(1)\second\src\pages\set\set.html"*/'\n<ion-header>\n\n    <ion-navbar color=\'mainColor\'>\n        <img src="assets/imgs/left.png" alt="" (click)=\'back()\'>\n        <span>设置</span>\n      </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n            <ion-label> 接收通知</ion-label>\n            <ion-icon name="arrow-dropright" item-end></ion-icon>\n          </ion-item>\n        <ion-item>\n            <ion-label>清除图片缓存</ion-label>\n            <ion-icon name="arrow-dropright" item-end></ion-icon>\n          </ion-item>\n        <ion-item>\n            <ion-label> 省流量畅流版</ion-label>\n            <ion-toggle  checked="false"></ion-toggle>\n          </ion-item>\n        <ion-item>\n            <ion-label>WIFI下自动播放频道页视频</ion-label>\n            <ion-toggle  checked="true"></ion-toggle>\n          </ion-item>\n          <ion-item>\n              <ion-label>APP版本</ion-label>\n              <ion-label style="text-align: right;color:#dedede;">1.0.0</ion-label>\n          </ion-item>\n          <ion-item (click)="denglu()">\n                <ion-label>退出登录</ion-label>\n          </ion-item>\n       </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\liuduanyang\Desktop\second(1)\second\src\pages\set\set.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SetPage);
    return SetPage;
}());

//# sourceMappingURL=set.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZhucelistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ZhucelistPage = /** @class */ (function () {
    function ZhucelistPage(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ZhucelistPage.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    ZhucelistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-zhucelist',template:/*ion-inline-start:"C:\Users\liuduanyang\Desktop\second(1)\second\src\pages\zhucelist\zhucelist.html"*/'<ion-header>\n\n  <ion-navbar color=\'mainColor\'>\n    <img src="assets/imgs/left.png" alt="" (click)=\'back()\'>\n    <span>注册协议</span>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding="true">\n <h5>一、总则</h5> \n <p>1.1 保宝网的所有权和运营权归深圳市永兴元科技有限公司所有。</p> \n  <p>1.2 用户在注册之前，应当仔细阅读本协议，并同意遵守本协议后方可成为注册用户。一旦注册成功，则用户与保宝网之间自动形成协议关系，用户应当受本协议的约束。用户在使用特殊的服务或产品时，应当同意接受相关协议后方能使用。 </p>\n  <p>1.3 本协议则可由保宝网随时更新，用户应当及时关注并同意本站不承担通知义务。本站的通知、公告、声明或其它类似内容是本协议的一部分。</p>\n  <h5>二、服务内容</h5>\n  <p>1.1 保宝网的所有权和运营权归深圳市永兴元科技有限公司所有。</p> \n  <p>1.2 用户在注册之前，应当仔细阅读本协议，并同意遵守本协议后方可成为注册用户。一旦注册成功，则用户与保宝网之间自动形成协议关系，用户应当受本协议的约束。用户在使用特殊的服务或产品时，应当同意接受相关协议后方能使用。 </p>\n  <p>1.3 本协议则可由保宝网随时更新，用户应当及时关注并同意本站不承担通知义务。本站的通知、公告、声明或其它类似内容是本协议的一部分。</p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\liuduanyang\Desktop\second(1)\second\src\pages\zhucelist\zhucelist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ZhucelistPage);
    return ZhucelistPage;
}());

//# sourceMappingURL=zhucelist.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindpwdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FindpwdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FindpwdPage = /** @class */ (function () {
    function FindpwdPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FindpwdPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FindpwdPage');
    };
    FindpwdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-findpwd',template:/*ion-inline-start:"C:\Users\liuduanyang\Desktop\second(1)\second\src\pages\findpwd\findpwd.html"*/'<ion-header>\n  <ion-navbar color=\'bgColor\'>\n    <img src="assets/imgs/left_white.png" alt="" (click)=\'back()\'>\n    <span>找回密码</span>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-image:url(assets/imgs/bg.png);background-size:contain;" text-center>\n\n<form class="form1">\n  <ion-item>\n      <ion-icon name=\'phone-portrait\' color=\'light\'></ion-icon>\n      <input type="text" placeholder="请输入用户名">\n\n  </ion-item>\n  <ion-item>\n    <ion-icon name="clipboard" color=\'light\'></ion-icon>\n\n    <input type="button" value="获取验证码" style="width:30%;background-color:rgb(254,219,71);border-radius:5px;float: right;color: black; ">\n    <input type="text" placeholder="请输入验证码" style="width: 50%;">\n</ion-item>\n  <ion-item>\n      <ion-icon name="lock" color=\'light\'></ion-icon>\n      <input type="password" placeholder="请输入密码">\n   </ion-item>\n   \n  <ion-item>\n      <ion-icon name="lock" color=\'light\'></ion-icon>\n      <input type="password" placeholder="请再次输入密码">\n  </ion-item>\n</form>\n\n<button  class="zhuce" (click)=\'zhuce()\'>确认</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\liuduanyang\Desktop\second(1)\second\src\pages\findpwd\findpwd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], FindpwdPage);
    return FindpwdPage;
}());

//# sourceMappingURL=findpwd.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/aboutlist/aboutlist.module": [
		286,
		11
	],
	"../pages/denglu/denglu.module": [
		284,
		10
	],
	"../pages/details1/details1.module": [
		287,
		9
	],
	"../pages/details2/details2.module": [
		290,
		8
	],
	"../pages/findpwd/findpwd.module": [
		285,
		7
	],
	"../pages/load/load.module": [
		291,
		6
	],
	"../pages/login/login.module": [
		288,
		0
	],
	"../pages/me/me.module": [
		289,
		5
	],
	"../pages/messagelists/messagelists.module": [
		292,
		4
	],
	"../pages/set/set.module": [
		295,
		3
	],
	"../pages/zhuce/zhuce.module": [
		294,
		2
	],
	"../pages/zhucelist/zhucelist.module": [
		293,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aboutlist_aboutlist__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.list = ['资产包转让', '债权转让', '固产转让', '典当担保', '融资借贷', '悬赏信息', '商业保理', '尽职调查', '资产求购', '委外催收', '法律服务'];
    }
    AboutPage.prototype.push = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__aboutlist_aboutlist__["a" /* AboutlistPage */]);
        profileModal.present();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\liuduanyang\Desktop\second(1)\second\src\pages\about\about.html"*/'<ion-header text-center>\n\n  <ion-navbar color=\'mainColor\'>\n\n    <ion-title>\n     选择发布类型\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n <ion-grid>\n   <ion-row>\n      <ion-col  *ngFor=\'let item of list;let i = index;\' col-4 >\n        <div class="middle" (click)=\'push()\'>\n          <img src="assets/imgs/transform.png" alt="">\n          <p> {{item}}</p>\n        </div>\n       \n      </ion-col>\n  </ion-row>\n </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\liuduanyang\Desktop\second(1)\second\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, menu, platform, appCtrl, toastCtrl, modalCtrl, statusBar) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.platform = platform;
        this.appCtrl = appCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.statusBar = statusBar;
        this.backButtonPressed = false;
        this.appType = 'Paid';
        this.apps = {
            'Paid': [
                {
                    name: '资产包转让',
                    price: '../../assets/imgs/transform.png'
                },
                {
                    name: '债权转让',
                    price: '../../assets/imgs/transform1.png'
                },
                {
                    name: '资产包转让',
                    price: '../../assets/imgs/transform2.png'
                },
                {
                    name: '债权转让',
                    price: '../../assets/imgs/transform3.png'
                },
                {
                    name: '资产包转让',
                    price: '../../assets/imgs/transform1.png'
                },
                {
                    name: '债权转让',
                    price: '../../assets/imgs/transform2.png'
                }, {
                    name: '资产包转让',
                    price: '../../assets/imgs/transform.png'
                },
                {
                    name: '债权转让',
                    price: '../../assets/imgs/transform1.png'
                },
                {
                    name: '资产包转让',
                    price: '../../assets/imgs/transform1.png'
                },
                {
                    name: '债权转让',
                    price: '../../assets/imgs/transform2.png'
                }, {
                    name: '资产包转让',
                    price: '../../assets/imgs/transform.png'
                },
                {
                    name: '债权转让',
                    price: '../../assets/imgs/transform1.png'
                }
            ],
            'Free': [
                {
                    name: '资产包转让',
                    price: '../../assets/imgs/transform.png'
                },
                {
                    name: '债权转让',
                    price: '../../assets/imgs/transform1.png'
                },
                {
                    name: '资产包转让',
                    price: '../../assets/imgs/transform.png'
                },
                {
                    name: '债权转让',
                    price: '../../assets/imgs/transform1.png'
                }
            ],
        };
        this.title = 'Angular 4.x NgSwitch';
        this.num = 0;
        this.items = [{
                name: '地区：北京',
                origin: '银行',
                namelist: '资产包转让',
                moneyName: '资金',
                money: '100万'
            },
            { name: '地区：北京',
                origin: '类型：借贷', namelist: '委外催收', moneyName: '合购金额',
                money: '500万' },
            { name: '地区：北京',
                origin: '买方性质：国企', namelist: '商业保理', moneyName: '资金',
                money: '500万' }];
        this.statusBar.backgroundColorByHexString('#ff0000');
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.registerBackButtonAction(null);
        });
    };
    //注册方法
    HomePage.prototype.registerBackButtonAction = function (tabRef) {
        var _this = this;
        //registerBackButtonAction是系统自带的方法
        this.platform.registerBackButtonAction(function () {
            //获取NavController
            var activeNav = _this.appCtrl.getActiveNav()[0];
            //如果可以返回上一页，则执行pop
            if (activeNav.canGoBack()) {
                activeNav.pop();
            }
            else {
                if (tabRef == null) {
                    //执行退出
                    _this.showExit();
                }
                else {
                    //选择首页第一个的标签
                    tabRef.select(0);
                }
            }
        });
    };
    //退出应用方法
    HomePage.prototype.showExit = function () {
        var _this = this;
        //如果为true，退出
        if (this.backButtonPressed) {
            this.platform.exitApp();
        }
        else {
            //第一次按，弹出Toast
            this.toastCtrl.create({
                message: '再按一次退出应用',
                duration: 2000,
                position: 'middle'
            }).present();
            //标记为true
            this.backButtonPressed = true;
            //两秒后标记为false，如果退出的话，就不会执行了
            setTimeout(function () { return _this.backButtonPressed = false; }, 2000);
        }
    };
    HomePage.prototype.ngAfterViewInit = function () {
        this.slides.freeMode = true;
        this.slides.loop = true;
        this.slides.autoplay = 1000;
    };
    HomePage.prototype.getItems = function (type) {
        return this.apps[type];
    };
    HomePage.prototype.changeElement = function () {
        if (this.num > 3) {
            this.num = 0;
        }
        this.num++;
    };
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            for (var i = 0; i < 3; i++) {
                _this.items.push({ name: '地区：北京', origin: '类型：借贷', namelist: '融资借贷', moneyName: '个人、企业',
                    money: '求购方' }, { name: '地区：北京', origin: '买方性质：国企', namelist: '尽职调查', moneyName: '资金',
                    money: '100万' }, { name: '地区：北京', origin: '买方性质：国企', namelist: '资产求购', moneyName: '转让价',
                    money: '100万' });
            }
            infiniteScroll.complete();
            if (_this.items.length >= 9) {
                console.log(_this.items.length);
                infiniteScroll.enable(false);
            }
        }, 1000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\liuduanyang\Desktop\second(1)\second\src\pages\home\home.html"*/'<ion-header text-center>\n  <ion-navbar color=\'mainColor\'>\n      <button ion-button color=\'white\' [menuToggle]="activeMenu"> <ion-icon name="menu"></ion-icon></button>\n    <ion-title><img src="assets/imgs/logo1.png" alt=""></ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only color=\'royal\'>\n          <ion-icon name=\'search\'></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-slides>\n    <ion-slide>\n     <img src="assets/imgs/slide2.png" alt="">\n    </ion-slide>\n    <ion-slide>\n      <img src="assets/imgs/slide.png" alt="">\n    </ion-slide>\n  \n  </ion-slides>\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="appType">\n      <ion-segment-button value="Paid"class=\'findinf\' >\n        找信息\n      </ion-segment-button>\n      <ion-segment-button value="Free" class="findser">\n        找服务\n      </ion-segment-button>\n\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n      <div class="search-grid" [ngSwitch]="appType">\n          \n              <ion-slides pager="true">\n                  <ion-slide>\n                      <ion-grid *ngSwitchCase="\'Paid\'">\n                      <ion-row>\n                          <ion-col ion-3>\n                            <ion-item no-lines>\n                              <img src="../../assets/imgs/homeSearch1.png" alt="">\n                              <p>资产包转让</p>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col ion-3>\n                            <ion-item no-lines>\n                              <img src="../../assets/imgs/homeSearch2.png" alt="">\n                              <p>股权转让</p>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col ion-3>\n                            <ion-item no-lines>\n                              <img src="../../assets/imgs/homeSearch3.png" alt="">\n                              <p>固产转让</p>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col ion-3>\n                            <ion-item no-lines>\n                              <img src="../../assets/imgs/homeSearch4.png" alt="">\n                              <p>商业保理</p>\n                            </ion-item>\n                          </ion-col>\n                        </ion-row>\n                        <ion-row>\n                          <ion-col ion-3>\n                            <ion-item no-lines>\n                              <img src="../../assets/imgs/homeSearch5.png" alt="">\n                              <p>典当担当</p>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col ion-3>\n                            <ion-item no-lines>\n                              <img src="../../assets/imgs/homeSearch6.png" alt="">\n                              <p>融资借贷</p>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col ion-3>\n                            <ion-item no-lines>\n                              <img src="../../assets/imgs/homeSearch7.png" alt="">\n                              <p>悬赏信息</p>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col ion-3>\n                            <ion-item no-lines>\n                              <img src="../../assets/imgs/homeSearch8.png" alt="">\n                              <p>尽职调查</p>\n                            </ion-item>\n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                  </ion-slide>\n                  <ion-slide>\n                      <ion-grid *ngSwitchCase="\'Paid\'">\n                      <ion-row>\n                          <ion-col ion-3>\n                            <ion-item no-lines>\n                              <img src="../../assets/imgs/homeSearch1.png" alt="">\n                              <p>资产包转让</p>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col ion-3>\n                            <ion-item no-lines>\n                              <img src="../../assets/imgs/homeSearch2.png" alt="">\n                              <p>股权转让</p>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col ion-3>\n                              <ion-item no-lines>\n                                <img src="../../assets/imgs/homeSearch2.png" alt="">\n                                <p>股权转让</p>\n                              </ion-item>\n                            </ion-col>\n                            <ion-col ion-3>\n                                <ion-item no-lines>\n                                  <img src="../../assets/imgs/homeSearch2.png" alt="">\n                                  <p>股权转让</p>\n                                </ion-item>\n                              </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                  </ion-slide>\n              </ion-slides>\n        </div>\n        <div [ngSwitch]="appType" class="search-free">   \n              <ion-grid *ngSwitchCase="\'Free\'">\n                  <ion-row>\n                      <ion-col ion-3>\n                        <ion-item no-lines>\n                          <img src="../../assets/imgs/homeSearch1.png" alt="">\n                          <p>资产包转让</p>\n                        </ion-item>\n                      </ion-col>\n                      <ion-col ion-3>\n                        <ion-item no-lines>\n                          <img src="../../assets/imgs/homeSearch2.png" alt="">\n                          <p>股权转让</p>\n                        </ion-item>\n                      </ion-col>\n                      <ion-col ion-3>\n                          <ion-item no-lines>\n                            <img src="../../assets/imgs/homeSearch2.png" alt="">\n                            <p>股权转让</p>\n                          </ion-item>\n                        </ion-col>\n                        <ion-col ion-3>\n                            <ion-item no-lines>\n                              <img src="../../assets/imgs/homeSearch2.png" alt="">\n                              <p>股权转让</p>\n                            </ion-item>\n                          </ion-col>\n                    </ion-row>\n                  </ion-grid>\n        </div>\n\n  <div class="great-inf">\n    <img src="assets/imgs/infor.png" alt="" class="great-inf-img">\n    <span class="great-inf-text">优质信息</span>\n  </div>\n  <ion-list inset *ngFor="let item of items;" >\n      <div>\n        <span>{{item.namelist}}</span><span class="special">--FB001</span>\n      </div>\n    <button ion-item >\n      <ion-avatar item-start>\n        <img src="assets/imgs/lo1.png">\n      </ion-avatar>\n      <p>{{item.name}}</p>\n      <p>{{item.origin}}</p>\n      <div item-content class="item-content">\n        <p style="color: red;font-size: 20px;">{{item.money}}</p>\n        <p>{{item.moneyName}}</p>\n      \n      </div>\n\n    </button> \n  </ion-list>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\liuduanyang\Desktop\second(1)\second\src\pages\home\home.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({ selector: '[ngSwitch]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messagelists_messagelists__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessagePage = /** @class */ (function () {
    function MessagePage(nav) {
        this.nav = nav;
        this.items = [];
        this.items = [
            {
                'title': '我的电脑',
                'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
                'color': 'assets/imgs/tou1.png',
                'time': '18:09 pm'
            },
            {
                'title': '坏孩子',
                'description': 'The latest version of cascading stylesheets - the styling language of the web!',
                'color': 'assets/imgs/tou2.png',
                'time': '22:31 pm'
            },
            {
                'title': '一颗布丁啊',
                'description': 'The latest version of the web\'s markup language.',
                'color': 'assets/imgs/tou3.png',
                'time': '12:31 am'
            },
            {
                'title': '王老师',
                'description': 'One of the most popular programming languages on the Web!',
                'color': 'assets/imgs/tou4.png',
                'time': '09:31 am'
            },
            {
                'title': '我的手机',
                'description': 'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.',
                'color': 'assets/imgs/tou5.png',
                'time': '07:25 am'
            },
            {
                'title': '唐老鸭先生',
                'description': 'An open-source, cross-platform runtime environment for developing server-side Web applications.',
                'color': 'assets/imgs/tou1.png',
                'time': '12:31 pm'
            },
            {
                'title': '米妮',
                'description': 'A clear and powerful object-oriented programming language!',
                'color': 'assets/imgs/tou2.png',
                'time': '14:54 pm'
            },
            {
                'title': '文过饰非',
                'description': 'A super simple way to add formatting like headers, bold, bulleted lists, and so on to plain text.',
                'color': 'assets/imgs/tou3.png',
                'time': '11:31 am'
            },
            {
                'title': 'hello world',
                'description': 'The official mascot of the Linux kernel!',
                'color': 'assets/imgs/tou4.png',
                'time': '08:01 am'
            },
        ];
    }
    MessagePage.prototype.openNavDetailsPage = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__messagelists_messagelists__["a" /* MessagelistsPage */], { item: item });
    };
    MessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-message',template:/*ion-inline-start:"C:\Users\liuduanyang\Desktop\second(1)\second\src\pages\message\message.html"*/'<ion-header text-center>\n\n    <ion-navbar  color=\'mainColor\'>\n\n      <ion-title>消息</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <ion-list>\n\n      <ion-item *ngFor="let item of items" (click)="openNavDetailsPage(item)">\n\n        <ion-avatar item-start>\n\n          <img src="{{item.color}}">\n\n        </ion-avatar>\n\n        <h2>{{item.title}}</h2>\n\n        <p>{{item.description}}</p>\n\n        <ion-note item-end>{{item.time}}</ion-note>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\liuduanyang\Desktop\second(1)\second\src\pages\message\message.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], MessagePage);
    return MessagePage;
}());

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MePage = /** @class */ (function () {
    function MePage(navCtrl, navParams, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
    }
    MePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MePage');
    };
    MePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-me',template:/*ion-inline-start:"C:\Users\liuduanyang\Desktop\second(1)\second\src\pages\me\me.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button [menuToggle]="activeMenu">\n      <ion-icon name="person"></ion-icon>\n    </button>\n    <ion-title>\n      Menu\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <h4>Active Menu: <b color="primary">{{ (activeMenu == \'menu1\') ? \'Menu 1\' : \'Menu 2\' }}</b></h4>\n\n  <p>This page has two menus with different id\'s, but only one is active at a time.</p>\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\liuduanyang\Desktop\second(1)\second\src\pages\me\me.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], MePage);
    return MePage;
}());

//# sourceMappingURL=me.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_me_me__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_message_message__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_load_load__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_aboutlist_aboutlist__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_details2_details2__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_details1_details1__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_messagelists_messagelists__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_set_set__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_denglu_denglu__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_zhuce_zhuce__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_zhucelist_zhucelist__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_findpwd_findpwd__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_me_me__["a" /* MePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_load_load__["a" /* LoadPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_aboutlist_aboutlist__["a" /* AboutlistPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_details1_details1__["a" /* Details1Page */],
                __WEBPACK_IMPORTED_MODULE_15__pages_details2_details2__["a" /* Details2Page */],
                __WEBPACK_IMPORTED_MODULE_17__pages_messagelists_messagelists__["a" /* MessagelistsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_set_set__["a" /* SetPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_denglu_denglu__["a" /* DengluPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_zhuce_zhuce__["a" /* ZhucePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_zhucelist_zhucelist__["a" /* ZhucelistPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_findpwd_findpwd__["a" /* FindpwdPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: true
                }, {
                    links: [
                        { loadChildren: '../pages/denglu/denglu.module#DengluPageModule', name: 'DengluPage', segment: 'denglu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/findpwd/findpwd.module#FindpwdPageModule', name: 'FindpwdPage', segment: 'findpwd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/aboutlist/aboutlist.module#AboutlistPageModule', name: 'AboutlistPage', segment: 'aboutlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/details1/details1.module#Details1PageModule', name: 'Details1Page', segment: 'details1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/me/me.module#MePageModule', name: 'MePage', segment: 'me', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/details2/details2.module#Details2PageModule', name: 'Details2Page', segment: 'details2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/load/load.module#LoadPageModule', name: 'LoadPage', segment: 'load', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/messagelists/messagelists.module#MessagelistsPageModule', name: 'MessagelistsPage', segment: 'messagelists', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/zhucelist/zhucelist.module#ZhucelistPageModule', name: 'ZhucelistPage', segment: 'zhucelist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/zhuce/zhuce.module#ZhucePageModule', name: 'ZhucePage', segment: 'zhuce', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/set/set.module#SetPageModule', name: 'SetPage', segment: 'set', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_me_me__["a" /* MePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_load_load__["a" /* LoadPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_aboutlist_aboutlist__["a" /* AboutlistPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_details2_details2__["a" /* Details2Page */],
                __WEBPACK_IMPORTED_MODULE_16__pages_details1_details1__["a" /* Details1Page */],
                __WEBPACK_IMPORTED_MODULE_17__pages_messagelists_messagelists__["a" /* MessagelistsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_set_set__["a" /* SetPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_denglu_denglu__["a" /* DengluPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_zhuce_zhuce__["a" /* ZhucePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_zhucelist_zhucelist__["a" /* ZhucelistPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_findpwd_findpwd__["a" /* FindpwdPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\liuduanyang\Desktop\second(1)\second\src\app\app.html"*/'<ion-menu [content]="content" id="menu1">\n\n    <ion-header color=\'mainColor\'>\n      <ion-toolbar color=\'mainColor\'>\n        <ion-title>个人中心</ion-title>\n      </ion-toolbar>\n    </ion-header>\n  \n    <ion-content>\n        <ion-list>\n  \n            <ion-item>\n                <ion-label>昵称</ion-label>\n                <ion-input></ion-input>\n              </ion-item>\n              \n              <ion-item>\n                <ion-label fixed>地址</ion-label>\n                <ion-input type="url"></ion-input>\n              </ion-item>\n              \n              <ion-item>\n                <ion-label floating>邮箱</ion-label>\n                <ion-input type="email"></ion-input>\n              </ion-item>\n              \n              <ion-item>\n                <ion-label>消息中心</ion-label>\n                <ion-toggle></ion-toggle>\n              </ion-item>\n              \n              <ion-item>\n                <ion-label>会员中心</ion-label>\n                <ion-checkbox></ion-checkbox>\n              </ion-item>\n        </ion-list>\n      <ion-list>\n        <button ion-item menuClose="menu1" detail-none >\n        close\n        </button>\n      </ion-list>\n    </ion-content>\n  \n  </ion-menu>\n  \n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\liuduanyang\Desktop\second(1)\second\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_message__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__load_load__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__message_message__["a" /* MessagePage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_4__load_load__["a" /* LoadPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\liuduanyang\Desktop\second(1)\second\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="首页" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="发布" tabIcon="create"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="消息" tabIcon="chatbubbles"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="我的" tabIcon="person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\liuduanyang\Desktop\second(1)\second\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map