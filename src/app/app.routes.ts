import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

export const routes: Routes = [
{path: "Home", component: AppComponent},
{path:"**", component: PagenotfoundComponent}

];
