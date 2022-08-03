function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "shubham9638464483@gmail.com",
	Password : "Shubham123@",
	To : 'shuklas506@gmail.com',
	From : "shubham9638464483@gmail.com",
	Subject : "Given",
	Body : "Completed",
	}).then(
		message => alert("mail sent successfully")
	);
}