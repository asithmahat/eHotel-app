import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { AddHotelModel } from './add-hotel.model'; 

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {

  formValue!: FormGroup;
  hotelModelObj: AddHotelModel = new AddHotelModel();
  hotelData!: any;
  showAdd!: boolean;
  showUpdate!: boolean;

  constructor(private formBuilder: FormBuilder,
    private api : ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      uid:[],
      hotelName: [''],
      location: [''],
      price: ['']
    })
    this.getAllHotels();
  }
  clickAddHotel(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  postHotelDetails() {
    this.hotelModelObj.uid = 3;
    this.hotelModelObj.hotelName = this.formValue.value.hotelName;
    this.hotelModelObj.location = this.formValue.value.location;
    this.hotelModelObj.price = this.formValue.value.price;

    this.api.postHotel(this.hotelModelObj) //postHotel from api.service
    .subscribe(res=>{
      console.log(res);
      alert("Hotel Aded");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllHotels();
    },err=>{
      alert("Something went wrong Try again")
    })
  }

  getAllHotels() {
    this.api.getHotel()
    .subscribe(res=>{
      this.hotelData = res;
    })
  }

  deleteHotelListing(row: any) {
    this.api.deleteHotel(row.id)
    .subscribe(res=>{
      alert("Hotel Listing Deleted");
      this.getAllHotels();
    })
  }
  onEdit(row: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.hotelModelObj.id = row.id;
    this.formValue.controls['hotelName'].setValue(row.hotelName);
    this.formValue.controls['location'].setValue(row.location);
    this.formValue.controls['price'].setValue(row.price);
  }
  updateHotelListing() {
    this.hotelModelObj.hotelName = this.formValue.value.hotelName;
    this.hotelModelObj.location = this.formValue.value.location;
    this.hotelModelObj.price = this.formValue.value.price;

    this.api.updateHotel(this.hotelModelObj, this.hotelModelObj.id)
    .subscribe(res=>{
      alert("Listing Updated");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllHotels();
    })
  }
}
