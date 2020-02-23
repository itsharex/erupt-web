import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BiRoutingModule} from './bi-routing.module';
import {BiComponent} from './bi/bi.component';
import {SharedModule} from "@shared/shared.module";
import {DimensionComponent} from './dimension/dimension.component';
import {NgxEchartsModule} from "ngx-echarts";
import {ReferenceComponent} from "./components/reference.component";
import {BiDataService} from "./service/data.service";

// import "echarts/dist/echarts.min.js"

@NgModule({
    declarations: [BiComponent, DimensionComponent, ReferenceComponent],
    imports: [
        NgxEchartsModule,
        CommonModule,
        BiRoutingModule,
        SharedModule
    ],
    providers: [
        BiDataService
    ],
    entryComponents: [
        ReferenceComponent
    ]
})
export class BiModule {
}