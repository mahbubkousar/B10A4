function sendNotification(email) {
	if (email.indexOf("@") === -1) {
		return "Invalid Email";
	}
	let messageparts = email.split("@");
	let userName = messageparts[0];
	let DomainName = messageparts[1];
	return `${userName} sent you an email from ${DomainName}`;
}
