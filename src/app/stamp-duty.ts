export class StampDuty {
	totalTaxAmount: number;
	purchaseType: string;
	houseValue: number;
	breakdown?: any;

	constructor(totalTaxAmount, purchaseType, houseValue, breakdown = {}) {
		this.totalTaxAmount = totalTaxAmount;
		this.purchaseType = purchaseType;
		this.houseValue = houseValue;
		this.breakdown = breakdown;
	}
}
