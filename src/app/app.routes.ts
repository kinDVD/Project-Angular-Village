import { Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AddImprovementDialogComponent } from './components/add-improvement-dialog/add-improvement-dialog.component';
import { EditImprovementDialogComponent } from './components/edit-improvement-dialog/edit-improvement-dialog.component';

export const routes: Routes = [
{path: "Home", component: AppComponent},
{path: "AddImprovement/:id", component: AddImprovementDialogComponent},
{path: "EditImprovement/:id" , component: EditImprovementDialogComponent},
{path: "**", component: PagenotfoundComponent}

];
