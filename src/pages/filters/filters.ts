import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { FullCountriesCities } from 'full-countries-cities';
/**
 * Generated class for the FiltersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filters',
  templateUrl: 'filters.html',
})
export class FiltersPage {
	public countries = [];

  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  		// var countriesNames = require ('full-countries-cities').getCountryNames();

  		// for (var idx in countriesNames) {
  		// 	this.countries.push(countriesNames[idx]);
  		// }

  	}



  	ionViewDidLoad() {
    	console.log('ionViewDidLoad FiltersPage');
  	}

}
