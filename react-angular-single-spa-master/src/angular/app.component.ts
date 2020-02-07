import { Component, ChangeDetectorRef, Inject } from '@angular/core';
import e from '../event-bus';

@Component({
  selector: 'app-root',
  templateUrl: 'src/angular/app.component.html',
  styleUrls: ['src/angular/app.component.css']
})
export default class AppComponent {
  message: string = ""
  showForm = false;

  constructor(@Inject(ChangeDetectorRef) private changeDetector: ChangeDetectorRef) { }

  ngAfterContentInit() {
    e.on('message', message => {
      this.message = message.text
      if (this.message.length > 0) {
        this.showForm = true;
      }
      this.changeDetector.detectChanges()
      // this.returnMessageToReactWhenReceived()
    })
  }

  disableForm() {
    this.showForm = false;
  }

  returnMessageToReactWhenReceived(obj: any) {
    e.emit('received', { text: obj })
  }
}
