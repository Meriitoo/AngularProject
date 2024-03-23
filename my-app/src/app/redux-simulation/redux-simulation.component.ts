import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-redux-simulation',
  templateUrl: './redux-simulation.component.html',
  styleUrls: ['./redux-simulation.component.css'],
})
export class ReduxSimulationComponent {
  firstName: string = '';
  lastName: string = '';
  telephone: string = '';

  isValidGuess: boolean = true;
  isWinner: boolean = false;
  chances: number = 3; 


  constructor(private apiService: ApiService, private toastService: ToastService) {}

  guessNumber(): void {
    if (this.chances === 0) {
      this.toastService.showInfo('You have used all your chances.');
      return;
    }
  
    const guessedNumberInput = <HTMLInputElement>document.getElementById('guessedNumber');
    const guessedNumber = parseInt(guessedNumberInput.value.trim());
  
    if (!guessedNumberInput.value.trim()) {
      this.toastService.showError('Please enter a number.');
      return;
    }
  
    if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 10) {
      this.toastService.showError('Please enter a valid number between 1 and 10.');
      return;
    }
  
    const successNumber = Math.floor(Math.random() * 2) + 1;
  
    if (guessedNumber === successNumber) {
      this.isWinner = true;
      this.chances = 0; 
    } else {
      this.chances--;
  
      if (this.chances === 0) {
        this.toastService.showInfo('Sorry, you have used all your chances. Better luck next time!');
      } else {
        this.toastService.showInfo(`Sorry, wrong guess! You have ${this.chances} ${this.chances === 1 ? 'chance' : 'chances'} left.`);
      }
    }
  
    guessedNumberInput.value = '';
  }
  

  registerWinner() {
    if (!this.firstName || !this.lastName || !this.telephone) {
      this.toastService.showInfo('Please fill in all fields.');
      return;
    }

    let bodyData = {
      "firstName": this.firstName,
      "lastName": this.lastName,
      "telephone": this.telephone,
    };

    this.apiService.registerWinner(bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      this.firstName = '';
      this.lastName = '';
      this.telephone = '';
    });
  }

}
