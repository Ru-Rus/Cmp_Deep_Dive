import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: "app-server-status",
  standalone: true,
  imports: [],
  templateUrl: "./server-status.component.html",
  styleUrls: [
    "./server-status.component.css",
    "./server-status.component.scss",
  ],
})
export class ServerStatusComponent implements OnInit, OnDestroy{
  currentStatus: "online" | "offline" | "unknown" = "online";
  private interval?: ReturnType<typeof setInterval>;
  ngOnInit() {
    this.interval = setInterval(() => {
      const RnD = Math.random();   
      // RnD + .858489654;
      // RnD/.435;
      if (RnD < 0.5) {
        this.currentStatus = "offline";
      } else if (RnD > 0.9 ) {
        this.currentStatus = "online";
      } else {
        this.currentStatus = "unknown";
      }
      console.log(this.currentStatus);
    }, 5000);
  }

  ngOnDestroy(): void {
      clearTimeout(this.interval);
  }
}
