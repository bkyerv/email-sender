export default {
	async fetch(request: Request) {
		const send_request = new Request('https://api.mailchannels.net/tx/v1/send', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				personalizations: [
					{
						to: [{ email: '<test-address>@gmail.com', name: 'Test Recipient' }],
					},
				],
				from: {
					email: '<test-address>@<domain-for-which-txt-record-has-been-set>',
					name: 'Workers - MailChannels integration',
				},
				subject: 'Look! No servers',
				content: [
					{
						type: 'text/plain',
						value: 'And no email service accounts and all for free too!',
					},
				],
			}),
		});

		const response = await fetch(send_request);
		return response;
	},
};
