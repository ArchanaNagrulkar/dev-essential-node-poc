# dev-essential-node-poc

(Steps to follow to run Application:

    Git clone
    Connect to mongodb create employee database containing employees collection
    Run Npm install​
    Then `Npm run start OR  nom start`

)
Server will start running at http://localhost:4000

You can run those APIS in postman:
1. Register employee
Url: localhost:4000/api/employee/register
Payload:{
    "name":"Archana",
    "email":"arch@test.com",
    "password":"1234",
    "employee_id":"P123123",
    "designation":"SSD"
}
2. Login employee
Url: localhost:4000/api/employee/login
Payload:{
        "email":"arch@test.com",
      "password":"1234",
}
3.Get ALl Employee
Url: localhost:4000/api/employee
Pass headers
Authorization:Bearer {{Access_token}}. // Access token you will get in response of login API.

4. Get perticular employee
Url.localhost:4000/api/employee/{{id}}
Pass headers
Authorization:Bearer {{Access_token}}. // Access token you will get in response of login API.

5. Delete individual employee record
Url. localhost:4000/api/employee/{{id}}
Pass headers
Authorization:Bearer {{Access_token}}. // Access token you will get in response of login API.
