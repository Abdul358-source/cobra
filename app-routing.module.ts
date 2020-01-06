import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AvengersComponent } from './avengers/avengers.component';
import { EndgameComponent } from './endgame/endgame.component';
import {FulldetailsComponent} from './fulldetails/fulldetails.component';
import {ExplorerComponent} from './explorer/explorer.component';
import {MedicalComponent} from './medical/medical.component';
import {OperationsComponent} from './operations/operations.component';
import {ProfilingComponent} from './profiling/profiling.component';
import {IndexcobraComponent} from './indexcobra/indexcobra.component';
import {HomeComponent} from './home/home.component';
import {LifeguardComponent} from './lifeguard/lifeguard.component';
import {FirstaidComponent} from './firstaid/firstaid.component';
import {SportserviceComponent} from './sportservice/sportservice.component';
import{ContactcobraComponent} from './contactcobra/contactcobra.component';
import {FullogindetailsComponent} from './fullogindetails/fullogindetails.component';
import {AttendanceformOneComponent} from './attendanceform-one/attendanceform-one.component';
import {AttendanceformTwoComponent} from './attendanceform-two/attendanceform-two.component';
import {AttendancingformModule} from './attendancingform/attendancingform.module';
import{CustomerModule} from './customer/customer.module';
import {OrdersModule} from './orders/orders.module';
import{LoginsModule} from './logins/logins.module';
//import {MedicaldataComponent} from './medicaldata/medicaldata.component';
//import {SchooldataComponent} from './schooldata/schooldata.component';
//import {ProvisionalModule} from './provisional/provisional.module';
import {AttendisplayOneComponent} from './attendisplay-one/attendisplay-one.component';
import {AttendisplayTwoComponent} from './attendisplay-two/attendisplay-two.component';
import {BenchfourModule} from './benchfour/benchfour.module';
import {UserdashboardComponent} from './admin/userdashboard/userdashboard.component';
import {UseraboutComponent} from './admin/userabout/userabout.component';
import {ProjectsComponent} from './admin/projects/projects.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import {UserdashboardTwoComponent} from './admin/userdashboard-two/userdashboard-two.component';

const routes: Routes = [
 
  {path :'', redirectTo:'/userlogin', pathMatch : 'full'},
  {path:'userlogin', component: UserloginComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'userdashboard', component: UserdashboardComponent},
  {path:'userabout', component:UseraboutComponent},
  {path : 'projects', component : ProjectsComponent},
  {path : 'dashboardTwo', component : UserdashboardTwoComponent},

  
  //{path:'attendanceFour', loadChildren:()=>BenchfourModule}
  
 //{path : 'provisional', loadChildren:() => ProvisionalModule}
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
