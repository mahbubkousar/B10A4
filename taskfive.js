function waitingTime(waitingTimes, serialNumber) {
	if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
		return "Invalid Input";
	}

	let totalTime = waitingTimes.reduce((sum, time) => sum + time, 0);
	let averageTime = Math.round(totalTime / waitingTimes.length);

	let peopleRemaining = serialNumber - 1 - waitingTimes.length;

	if (peopleRemaining <= 0) {
		return 0;
	}
	return peopleRemaining * averageTime;
}
