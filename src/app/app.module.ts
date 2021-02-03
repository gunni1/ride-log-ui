import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from "@angular/router";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import { EditRideComponent } from './edit-ride/edit-ride.component';
import { VehicleSelectComponent } from './vehicle-select/vehicle-select.component';
import {MatListModule} from "@angular/material/list";
import { RideLogOverviewComponent } from './ride-log-overview/ride-log-overview.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


const routes: Routes = [
  { path: 'home', component: RideLogOverviewComponent},
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  declarations: [
    AppComponent,
    EditRideComponent,
    VehicleSelectComponent,
    RideLogOverviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: false}),
    MatTableModule,
    MatFormFieldModule,
    MatCardModule,
    MatListModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
