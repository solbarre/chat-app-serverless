Utilisation de terraform.

![Texte alternatif](WebSocket_shema.png "shema")

1. https://developer.hashicorp.com/terraform/language/settings/
2. https://registry.terraform.io/providers/hashicorp/aws/latest/docs

## 1-creer table dynamodb nom à personnaliser, et key de partition : connectionId ##

## 2-creation function lambda (4) codes joints au projet ##
choisir nodejs16.x

- une pour connect
- une pour disconnect
- une pour default
- une pour sendmessage
le role sera indiqué avant le lab

- contexte
![Texte alternatif](Lambda-contexte.png "shema")


## 3-creation apigateway  websoket avec 4 routes prédefinies : ##
création api avec Route selection expression : $request.body.action

création des Routes prédéfinies :
- $connect
- $disconnect
- $default
- sendMessage

  lambda integration en liant les fonctions crées précedement

exemple route $connect
![Texte alternatif](APIGatewayRoutes.png "route")

- ajout de l'autorisation : lambda_permission (déclencheur)
- déclencheur exemple
![Texte alternatif](declencheurLambda.png "shema")


- ajout etape (stage)

## 4- test ##
postman new websocket test, 
- connect
- wss://<id api>.execute-api.us-east-1.amazonaws.com/<stage>/
- send
- {"action": "sendMessage", "message": "hello, everyone!"}
