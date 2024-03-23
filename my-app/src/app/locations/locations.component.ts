import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastService } from '../toast.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  LocationArray: any[] = [];
  currentLocationID = "";

  meetingPlace: string = "";
  meetingTime: string = "";
  mettingTopic: string = "";

  constructor(private http: HttpClient, private toastService: ToastService,private apiService: ApiService, ) {}

  ngOnInit(): void {
    this.getAllLocation();
  }


  getAllLocation() {
    this.apiService.getAllLocation().subscribe(
      (resultData: any) => {
        console.log(resultData);
        this.LocationArray = resultData.data;
      },
      (error) => {
        console.error(error);
        this.toastService.showError('Failed to load locations');
      }
    );
  }
  

  setDelete(data: any) {
    this.apiService.setDelete(data).subscribe(
      (resultData: any) => {
        console.log(resultData); // Log the response data
        this.toastService.showSuccess('Location Deleted!'); // Show success message
        this.getAllLocation(); // Refresh the list of locations
      },
      (error) => {
        console.error(error); // Log any errors
        this.toastService.showError('Failed to delete location'); // Show error message
      }
    );
  }
  

  setUpdate(data: any) {
    this.meetingPlace = data.meetingPlace;
    this.meetingTime = data.meetingTime;
    this.mettingTopic = data.mettingTopic;
    this.currentLocationID = data._id;
    this.toastService.showInfo('Editing location...');
  }

  UpdateRecords() {
    let bodyData = {
      "meetingPlace": this.meetingPlace,
      "meetingTime": this.meetingTime,
      "mettingTopic": this.mettingTopic,
    };

    this.apiService.UpdateRecords(this.currentLocationID, bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      this.toastService.showSuccess('Location Updated!');
      this.getAllLocation();
    })
  }

  save() {
    if (!this.meetingPlace || !this.meetingTime || !this.mettingTopic) {
      this.toastService.showError('Please fill in all fields.');
      return; 
    }
  
    if (this.currentLocationID === '') {
      this.register();
    } else {
      this.UpdateRecords();
    }
  }

  register() {
    let bodyData = {
      "meetingPlace": this.meetingPlace,
      "meetingTime": this.meetingTime,
      "mettingTopic": this.mettingTopic,
    };

    this.apiService.register(bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      this.toastService.showSuccess('Location Registered Successfully');
      this.meetingPlace = '';
      this.meetingTime = '';
      this.mettingTopic = '';
      this.getAllLocation();
    })
  
  }
}
