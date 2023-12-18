import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DistrictComponent } from './district/district.component';
import { ContactComponent } from './contact/contact.component';



export const routes: Routes = [
{
    path:'',component:HomeComponent
},

{
    path:'district',component:DistrictComponent
},

{
    path:'contact',component:ContactComponent
},


];
