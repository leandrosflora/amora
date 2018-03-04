import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentBackEndName = 'Acerola';

  constructor(private toastr: ToastrService) {
    this.bootstrapEvironment();
  }

  bootstrapEvironment() {
    const selectedEvn: string = localStorage.getItem('selected-back-end');

    if (selectedEvn) {
      this.changeBackEnd(selectedEvn);
    } else {
      this.changeBackEnd('Acerola');
    }
  }

  changeBackEnd(be) {
    this.currentBackEndName = be;
    localStorage.setItem('selected-back-end', this.currentBackEndName);
    this.toastr.warning(`You are using ${this.currentBackEndName} now.`, 'Back-End changed!');
    switch (be) {
      case 'Manga':
        localStorage.setItem('back-end', environment.mangaApiUrl);
        break;
      case 'Acerola':
        localStorage.setItem('back-end', environment.acerolaApiUrl);
        break;
      case 'Castanha':
        localStorage.setItem('back-end', environment.castanhaApiUrl);
        break;
      default:
        break;
    }
  }
}
