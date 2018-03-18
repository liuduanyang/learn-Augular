import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// 为了能够使用ngModel需要从@angular/forms库中导入符号FormsModule，然后把FormsModule添加到@NgModule元数据的imports数组中，它是当前应用正在使用的外部模块列;
import { AppComponent } from './app.component'
import { InputComponent } from './components/input/input.component';
import { DisplayComponent } from './components/display/display.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
