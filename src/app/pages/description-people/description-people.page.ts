import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description-people',
  templateUrl: './description-people.page.html',
  styleUrls: ['./description-people.page.scss'],
})
export class DescriptionPeoplePage implements OnInit {
  people:any;
  constructor(private routeDat:ActivatedRoute, private swapiserviceDes:SwapiService) { }

  ngOnInit() {
    this.routeDat.paramMap.subscribe((params) =>{
      let id = params.get('id');
      console.log(id)
      this.people = this.swapiserviceDes.getSwapi(`people/${id}`).subscribe(data =>{
        this.people = data;
        console.log(data)
      });
    });
  }
}
