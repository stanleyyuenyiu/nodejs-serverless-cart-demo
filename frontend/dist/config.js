var awsConfig = {
	API:{
		endpoints: [
            {
                name: "products",
                //endpoint: "https://avmb5qwel5.execute-api.ap-southeast-1.amazonaws.com/v1",
                //region: "ap-southeast-1"
                endpoint: "{ApiBaseUrl}",
                region: "{Region}"
            },
            {
                name: "cart",
                //endpoint: "https://avmb5qwel5.execute-api.ap-southeast-1.amazonaws.com/v1",
                //region: "ap-southeast-1"
                endpoint: "{ApiBaseUrl}",
                region: "{Region}"
            }
        ]
	},
	Auth:{
		//identityPoolId: "ap-southeast-1:860e1722-a3eb-44cb-9850-9d7eaf57aa20", 
        //region: "ap-southeast-1"
        identityPoolId: "{CognitoId}", 
        region: "{Region}"
	}
}

var customers = [
        {"user": "FORD", "password":"123456"},
        {"user": "APPLE", "password":"123456"},
        {"user": "NIKE", "password":"123456"},
        {"user": "UNILEVER", "password":"123456"}
    ]
