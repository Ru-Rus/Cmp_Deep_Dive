import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from "@angular/core";

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
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<"online" | "offline" | "unknown">("online");
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      console.log(this.currentStatus);
    });
  }

  ngOnInit() {
    const interval = setInterval(() => {
      const RnD = Math.random();
      // RnD + .858489654;
      // RnD/.435;
      if (RnD < 0.5) {
        this.currentStatus.set("offline");
      } else if (RnD > 0.9) {
        this.currentStatus.set("online");
      } else {
        this.currentStatus.set("unknown");
      }
      console.log(this.currentStatus);
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  // ngOnDestroy(): void {
  //     clearTimeout(this.interval);
  // }
}
