Utilisation de terraform.


1-creer table dynamodb nom a personaliser, et key de partition : connectionId

2-creation function lambda (4) codes joints au projet

- une pour connect
- une pour disconnect
- une pour default
- une pour sendmessage

3-creation apigateway  websoket avec 4 routes :
$request.body.action

- $connect
- $disconnect
- $default
- sendMessage

  lambda integration en liant les fonctions crées précedement



4- test
postman new websocket test, 
connect
wss://<id api>.execute-api.us-east-1.amazonaws.com/<stage>/
send
{"action": "sendMessage", "message": "hello, everyone!"}
