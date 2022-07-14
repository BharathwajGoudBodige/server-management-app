import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerModel } from '../models/server.model';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers:ServerModel[];
  constructor(private serverService:ServerService,
    private routerService:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.servers=this.serverService.getServers();
  }
  onNavigate() {
    this.routerService.navigate(['../servers'],{relativeTo:this.activatedRoute})
  }

}
