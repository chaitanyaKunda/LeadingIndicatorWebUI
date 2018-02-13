import { Routes } from '@angular/router'; 
//import { HomeComponent } from './home/home.component'; 
import { LoginComponent } from './login/login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BranchmgmtComponent } from './branchmgmt/branchmgmt.component';
import { GlobalheadsComponent } from './globalheads/globalheads.component';

export const routes: Routes = [ 
    { path: '', component: LoginComponent }, 
    //{ path: 'home', component: HomeComponent }, 
    { path: 'login', component: LoginComponent}, 
    { path: 'mainpage',
     component: MainpageComponent,
     children: [
        {
            path:'',
            component: DashboardComponent
        },
        {
            path:'dashboard',
             component: DashboardComponent
        },
        {
            path:'branch',
            component: BranchmgmtComponent
        },
        {
            path:'globalheads',
            component: GlobalheadsComponent
        }
     ]
    },
    { path: '**', redirectTo: '' } 
]