function calculateTax(income, expense) {
	if (income < 0 || expense < 0 || expense > income) {
		return "Invalid Input";
	}
	let tax = (income - expense) * 0.2;
	return tax;
}
