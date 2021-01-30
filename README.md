# Simple Notification Service by Amazon (SMS). 

### This is a simple NodeJs app implemented in ExpressJs framework to test SMS messages provided by Simple Notification Service by Amazon.

## Installation & Configuration

#### Clone the repo
```
// open your terminal and clone the repo 
$ git clone https://github.com/baselka/sns-sms.git
```
### Extract project used packages

````
// inside the cloned project dir
$ npm install
````
### Create a new .env file in the root dir of the project and copy paste the following :

````
AWS_ACCESS_KEY_ID = <your_access_key_id>
AWS_SECRET_ACCESS_KEY = <your_secret_access_key>
AWS_REGION = <your_instance_region>
````

### Running the server

````
// Run the project 
$ nodemon server.js || $ node server.js
````
______________________________________

## 2. Routes / Endpoints

### Subscribe phone number to topic/channel .

```
Method: POST
URL: /sns/sms/subscribe
Body: { phone } // 9774998*** fromat
Response: { 
	success: true || false,
        code: 200 || any status code 
	data: {
		message: 'success or error message'
	}
}
```
### Send OTP to a subscribed number .

```
Method: POST
URL: /sns/sms/send
Body: { phone } // 9774998*** fromat
Response: { 
	success: true || false,
        code: 200 || any status code 
	data: {
		message: 'success or error message'
	}
}
```
