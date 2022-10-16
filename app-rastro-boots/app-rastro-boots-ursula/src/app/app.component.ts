//////////////////////////////////////////////////////////
// TODOs.- Optimize code to save size. It sounds like we //
// are almost double of our budget.						//
// current built size = 3.88 KB							//
// budget built size = 2.00 KB							//
//////////////////////////////////////////////////////////


import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {															
  	causeInterfaceText: string = "¿Cuál es la causa?" 		// just as example to be improved in order to localize interface
  	myCause: string = "";									// linked to the textarea updatable both sides
  	isAnEmotionClicked: boolean = false;					// stores if any amotion is clicked or not
  	myEmotion: string = "";									// stores the value of the clicked emotion
  	isMyCauseEmpty: boolean = true;							// stores if there is reason for the emotion written down or there is not
  	isMyEmotionRegistered: boolean = false;					// stores if the amotion and its cause are registered or they are not
  	currentRegisterDate: number = Date.now();				// just as an aux to activate or deactivate the interface in case of happines indicator is set to yes or no
  	firstRegisterDate: number = Date.now();					// just as an aux to activate or deactivate the interface in case of happines indicator is set to yes or no
  	isHappinessClicked: boolean = false;					// stores whether day is yet to be repeated or it is not
  	happinessValue: string = "maybe";						// default value of happiness indicator (everyday is by default candidate to be repeated or not)
  	
  	//////////////////////////////////////////////////////////
  	// return the stored value of the emotion. By default 	//
  	// is ""												//
  	//////////////////////////////////////////////////////////
  	getMyEmotion() {
		return this.myEmotion;
	}
	
	//////////////////////////////////////////////////////////
	// sets the value to be stored in myEmotion				//
	//////////////////////////////////////////////////////////
	setMyEmotion(myEmotion: string) {
		this.setIsAnEmotionClicked(true);
		this.myEmotion = myEmotion;
	}
	
	//////////////////////////////////////////////////////////
	// returns wether is an emotion clicked or not			//
	//////////////////////////////////////////////////////////
	public getIsAnEmotionClicked() {
		return this.isAnEmotionClicked;
	}
	
	//////////////////////////////////////////////////////////
	// sets wether is an emotion clicked or not				//
	//////////////////////////////////////////////////////////
	public setIsAnEmotionClicked(myValue: boolean) {
		this.isAnEmotionClicked = myValue;
	}
	
	//////////////////////////////////////////////////////////
	// returns whether there is something written as cause	//
	// down													//
	//////////////////////////////////////////////////////////
	public getIsMyCauseEmpty() {
		if (this.myCause == "") {
			this.isMyCauseEmpty = true;
		} else {
			this.isMyCauseEmpty = false;
		}
		return this.isMyCauseEmpty;
	}	
	
	//////////////////////////////////////////////////////////
	// sets myCause and linked text area to ""				//
	//////////////////////////////////////////////////////////
	public setIsMyCauseEmpty() {
		this.myCause = "";
		this.isMyCauseEmpty = true;
	}
	
	//////////////////////////////////////////////////////////
	// TOBEDISSCUSSED: store emotion and its cause either 	//
	// in local MySQL of AWebServer or through REST API		//
	//////////////////////////////////////////////////////////
	public registerMyEmotion() {
		this.currentRegisterDate = Date.now();
		this.myEmotion = "";
		this.myCause = "";
  		this.isAnEmotionClicked = false;
  		this.isMyCauseEmpty = true;
  		this.isMyEmotionRegistered = true;
	}
	
	//////////////////////////////////////////////////////////
	// returns wether an emotion is yet registered			//
	//////////////////////////////////////////////////////////
	public getIsMyEmotionRegistered() {
		return this.isMyEmotionRegistered;
	}
	
	//////////////////////////////////////////////////////////
	// sets wether an emotion is yet registered			//
	//////////////////////////////////////////////////////////
	public setIsMyEmotionRegistered(myValue: boolean) {
		this.isMyEmotionRegistered = myValue;
	}
	
	//////////////////////////////////////////////////////////
	// returns wether a day is to be repeated (default is	// 
	// maybe)												//
	//////////////////////////////////////////////////////////
	public getIsHappinessClicked() {
		return this.isHappinessClicked;
	}
	
	//////////////////////////////////////////////////////////
	// sets wether a day is to be repeated (default is		// 
	// maybe)												//
	//////////////////////////////////////////////////////////
	public setIsHappinessClicked(value: string) {
		this.isHappinessClicked = true;
	}
	
	//////////////////////////////////////////////////////////
	// gets the happiness value, so if a day is marked to  	//
	// be repeated or it is not								//
	//////////////////////////////////////////////////////////
	public getHappynessValue() {
		return this.happinessValue;
	}
	
	//////////////////////////////////////////////////////////
	// sets hapiness value either YES or MAYBE or NO		//
	//////////////////////////////////////////////////////////
	public setHappynessValue(myValue: string) {
		this.isHappinessClicked = true;
		this.happinessValue = myValue;
	}
	
	//////////////////////////////////////////////////////////
	// resets all the attributes to their default values	//
	//////////////////////////////////////////////////////////
	public resetAll() {
		this.myEmotion = "";
		this.myCause = "";
  		this.isAnEmotionClicked = false;
  		this.isMyCauseEmpty = true;
  		this.isMyEmotionRegistered = false;
	}
}