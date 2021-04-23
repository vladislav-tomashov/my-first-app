import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No servers were created";
  serverName = "Test Server";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = `Server was created. Name is ${this.serverName}`;
  }

  onUpdateServerName(event: InputEvent) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {
  }

}
