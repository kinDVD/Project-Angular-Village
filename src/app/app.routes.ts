import { Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AddImprovementComponent } from './components/add-improvement/add-improvement.component';
import { EditImprovementComponent } from './components/edit-improvement/edit-improvement.component';

export const routes: Routes = [
{path: "Home", component: AppComponent},
{path: "AddImprovement/:id", component: AddImprovementComponent},
{path: "EditImprovement/:id" , component: EditImprovementComponent},
{path: "**", component: PagenotfoundComponent},
{path: "", component: AppComponent}

];
