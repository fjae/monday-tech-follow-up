import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
	
	
	//////////////////////////////////////////////////////////////////////////
	// Preparar y adaptar toda la lógica de Activación/Desactivación de los //
	// botonoes y la CAJA DE TEXTO UNICA									//
	//////////////////////////////////////////////////////////////////////////
	myEmotions: string[] = ["Enfado",
							"Tristeza",
							"Miedo",
							"Disfrute",
							"Inter&eacute;s",
							"Sorpresa",
							"Desagrado",
							"Verg&umacr;enza"];
	myEmotionsBoolean: boolean[] = [false, 
									false, 
									false, 
									false, 
									false, 
									false, 
									false, 
									false];
  	public causeText: string = "¿Cuál es la causa?"
  	public myCause: string = "";
  	
  	getMyEmotion(myEmotion: string) {
		return this.myEmotionsBoolean[this.myEmotions.indexOf(myEmotion)];
	}
	
	setMyEmotion(myEmotion: string, myValue: boolean) {
		for(var index in this.myEmotions){
			this.myEmotionsBoolean[index] = false;
		}
		this.myEmotionsBoolean[this.myEmotions.indexOf(myEmotion)] = myValue;
  		this.myCause = "";
	}
	
	getIsAnger() {
		let myConst: string = "Enfado";
		return this.myEmotionsBoolean[this.myEmotions.indexOf(myConst)];	
	}
	
	setIsAnger(myValue: boolean) {
		let myConst: string = "Enfado";
		this.setMyEmotion(myConst, myValue);
	}
	
	getIsSadness() {
		let myConst: string = "Tristeza";
		return this.myEmotionsBoolean[this.myEmotions.indexOf(myConst)];
	}
	
	setIsSadness(myValue: boolean) {
		let myConst: string = "Tristeza";
		this.setMyEmotion(myConst, myValue);
	}
	
	getIsFear() {
		let myConst: string = "Miedo";
		return this.myEmotionsBoolean[this.myEmotions.indexOf(myConst)];
	}
	
	setIsFear(myValue: boolean) {
		let myConst: string = "Miedo";
		this.setMyEmotion(myConst, myValue);
	}
	
	getIsJoy() {
		let myConst: string = "Disfrute";
		return this.myEmotionsBoolean[this.myEmotions.indexOf(myConst)];
	}
	
	setIsJoy(myValue: boolean) {
		let myConst: string = "Disfrute";
		this.setMyEmotion(myConst, myValue);
	} 
	
	getIsInterest() {
		let myConst: string = "Inter&eacute;s";
		return this.myEmotionsBoolean[this.myEmotions.indexOf(myConst)];
	} 
	
	setIsInterest(myValue: boolean) {
		let myConst: string = "Inter&eacute;s";
		this.setMyEmotion(myConst, myValue);
	}
	
	getIsSurprise() {
		let myConst: string = "Sorpresa";
		return this.myEmotionsBoolean[this.myEmotions.indexOf(myConst)];
	}
	
	setIsSurprise(myValue: boolean) {
		let myConst: string = "Sorpresa";
		this.setMyEmotion(myConst, myValue);
	}
	
	getIsDisgust() {
		let myConst: string = "Desagrado";
		return this.myEmotionsBoolean[this.myEmotions.indexOf(myConst)];
	}
	
	setIsDisgust(myValue: boolean) {
		let myConst: string = "Desagrado";
		this.setMyEmotion(myConst, myValue);
	}
	
	getIsShame() {
		let myConst: string = "Verg&umacr;enza";
		return this.myEmotionsBoolean[this.myEmotions.indexOf(myConst)];
	}
	
	setIsShame(myValue: boolean) {
		let myConst: string = "Verg&umacr;enza";
		this.setMyEmotion(myConst, myValue);
	}
	
	getMyCause() {
		return this.myCause;
	}
	
	setMyCause(myValue: any) {
		this.myCause = myValue;
	}
	
	isMyCauseEmpty() {
		 if (this.myCause == "") {
			return true;
		} else {
			return false;
		}
	}
	
	onCauseChange () {
		//TODO
	}
	
	resetAll() {
		this.myCause = "";
	}
}

