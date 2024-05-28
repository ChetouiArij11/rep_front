# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.



# lancement de build jenkins automatiquement 

![alt text](image-7.png)


## install le ngrok 
![alt text](image-8.png)

## lancer le terminal de ngrok 
![alt text](image-11.png)

![alt text](image-10.png)

## webhook du github 
![alt text](image-12.png)

## dans pipeline cocher GitHub hook trigger for GITScm polling
![alt text](image-13.png)

## check pour le dernier push 
![alt text](image-14.png)
![alt text](image-15.png)
![alt text](image-16.png)
![alt text](image-17.png)
![alt text](image-18.png)


# deploy stage 

## kubernets commandes :
```
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl apply -f ingress.yaml
kubectl get svc frontend-service

```

![alt text](image.png)
![alt text](image-1.png)


## mise a jour  demi final :

![alt text](image-2.png)

![alt text](image-3.png)


## test phase  e2e doc : 

```
node .\testaccpage.js
```

![alt text](image-4.png)

![alt text](image-6.png)

![alt text](image-5.png)

# Video Tutoriel
## Vidéo Test 

[Regardez la vidéo](./testPRV.js%20-%20frontend%20-%20Visual%20Studio%20Code%202024-05-29%2000-43-46.mp4)
