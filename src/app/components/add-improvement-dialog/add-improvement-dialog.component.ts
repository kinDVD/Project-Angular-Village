import { Component } from '@angular/core';
import { Improvements } from '../../models/improvement';
import { VillageService } from '../../services/village.service';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-add-improvement-dialog',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './add-improvement-dialog.component.html',
  styleUrl: './add-improvement-dialog.component.css'
})
export class AddImprovementDialogComponent {

  userImprovements: Improvements[] = [];
  tileID!: number;

  display:boolean = false;

  constructor(private villageService: VillageService, 
    private router: Router,
    private route: ActivatedRoute
  ){}
  ngOnInit(){
  this.userImprovements = this.villageService.getImprovements();
  console.log("App component is working!")

  this.tileID = Number(this.route.snapshot.paramMap.get('id'));
  //this.villageService.addImprovement("House", 0);
  }

  addToImprovements(name:String){
    this.villageService.addImprovement(name, this.tileID);
    this.router.navigate(['/Home']);
  }

  displayToggle(){
    this.display = !this.display;
    console.log(this.display);
  }


}
