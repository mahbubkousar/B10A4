function calculateFinalScore(obj) {
	if (typeof obj !== "object" || obj === null) {
		return "Invalid Input";
	}
	const { name, testScore, schoolGrade, isFFamily } = obj;

	let totalPoints = testScore + schoolGrade;

	if (isFFamily) {
		totalPoints += 20;
	}

	return totalPoints >= 80;
}
