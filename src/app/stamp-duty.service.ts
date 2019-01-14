import { Injectable } from '@angular/core';
import { StampDuty } from './stamp-duty';

@Injectable({
	providedIn: 'root'
})
export class StampDutyService {
	constructor() {}

	purchaseType: string = '';
	houseValue: number = null;
	results: {};
	resultsHistory: Object[] = [];

	// rules according purchase type
	firstTimeBuyerTaxRules = [
		{
			fromAmount: 0,
			toAmount: 300000,
			taxPercent: 0
		},
		{
			fromAmount: 300001,
			toAmount: 500000,
			taxPercent: 5
		}
	];
	generalTaxRules = [
		{
			fromAmount: 0,
			toAmount: 125000,
			taxPercent: 0
		},
		{
			fromAmount: 125001,
			toAmount: 250000,
			taxPercent: 2
		},
		{
			fromAmount: 250001,
			toAmount: 925000,
			taxPercent: 5
		},
		{
			fromAmount: 925001,
			toAmount: 1500000,
			taxPercent: 10
		},
		{
			fromAmount: 1500001,
			toAmount: 5000000,
			taxPercent: 12
		}
	];
	specialTaxRules = [
		{
			fromAmount: 0,
			toAmount: 125000,
			taxPercent: 3
		},
		{
			fromAmount: 125001,
			toAmount: 250000,
			taxPercent: 5
		},
		{
			fromAmount: 250001,
			toAmount: 925000,
			taxPercent: 8
		},
		{
			fromAmount: 925001,
			toAmount: 1500000,
			taxPercent: 13
		},
		{
			fromAmount: 1500001,
			toAmount: 5000000,
			taxPercent: 15
		}
	];

	// check which rule use according purchase type and house value
	calculate(purchaseType: string, houseValue: number) {
		this.purchaseType = purchaseType;
		this.houseValue = houseValue;
		const { firstTimeBuyerTaxRules, generalTaxRules, specialTaxRules } = this;
		let rules: Object[];
		switch (this.purchaseType) {
			case 'First time buyer': {
				rules = this.houseValue > 500000 ? generalTaxRules : firstTimeBuyerTaxRules;
				break;
			}
			case 'Home mover': {
				rules = generalTaxRules;
				break;
			}
			case 'Additional property': {
				rules = specialTaxRules;
				break;
			}
		}

		if (rules) {
			this.buildTaxResult(this.houseValue, rules);
		}
	}

	// calculate the appropriate tax and breakdown
	buildTaxResult(houseValue, results) {
		let portion: number = 0;
		let totalTaxAmount: number = 0;
		for (const result of results) {
			if (houseValue >= result.fromAmount && houseValue <= result.toAmount) {
				// when the houseValue matches the rule
				result.taxableAmount = houseValue - portion;
				result.taxAmount = result.taxableAmount * result.taxPercent / 100;
				totalTaxAmount = totalTaxAmount + result.taxAmount;
				break;
			} else {
				// if the houseValue is greater than the rule
				result.taxableAmount = result.toAmount - portion;
				result.taxAmount = result.taxableAmount * result.taxPercent / 100;
				totalTaxAmount = totalTaxAmount + result.taxAmount;
				portion = result.toAmount;
			}
		}

		this.results = new StampDuty(totalTaxAmount, this.purchaseType, this.houseValue, results);

		// last entry always on top
		this.resultsHistory.unshift(this.results);
	}

	// get results
	getResults() {
		return this.results;
	}

	// get results history
	getHistory() {
		return this.resultsHistory;
	}
}
