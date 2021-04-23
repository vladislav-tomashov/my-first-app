import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreated = false;
  serverName = "Test Server";
  servers = ["Testserver", "Testserver 2"];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: InputEvent) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {
  }

}
