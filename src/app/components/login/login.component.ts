import { Component, OnInit } from '@angular/core';
import 'cross-fetch/polyfill';
import { CognitoIdentityProviderClient, AddCustomAttributesCommand } from "@aws-sdk/client-cognito-identity-provider";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  poolData = {
    UserPoolId: 'us-east-1_gni3fuj3g', // Your user pool id here
    ClientId: '87aj6hp232d86j8m3it88e7aq', // Your client id here
  };
  userPool: any;

  constructor() { }

  ngOnInit(): void {

  }

 login(){
  const client = new CognitoIdentityProviderClient({ region: "us-east-1" });

  var authenticationData = {
    Username: 'dion',
    Password: '123456',
  };
  var authenticationDetails = new AuthenticationDetails(
    authenticationData
  );
  var userData = {
    Username: 'dion',
    Pool: this.userPool,
  };
  var cognitoUser = new CognitoUser(userData);
cognitoUser.authenticateUser(authenticationDetails, {
	onSuccess: function(result) {
		var accessToken = result.getAccessToken().getJwtToken();

		//POTENTIAL: Region needs to be set if not already set previously elsewhere.
		AWS.config.region = 'us-east-1';

		AWS.config.credentials = new AWS.CognitoIdentityCredentials({
			IdentityPoolId: '...', // your identity pool id here
			Logins: {
				// Change the key below according to the specific region your user pool is in.
				'cognito-idp.us-east-1.amazonaws.com/us-east-1_gni3fuj3g': result
					.getIdToken()
					.getJwtToken(),
			},
		});
	},

	onFailure: function(err) {
		alert(err.message || JSON.stringify(err));
	},
});
 }

}
