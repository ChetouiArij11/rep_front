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

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## status de rendevous 
```
        <div class="products-row">
          <button class="cell-more-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
          </button>
            <div class="product-cell image">
              <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="product">
              <span>Ocean</span>
            </div>
          <div class="product-cell category"><span class="cell-label">Category:</span>Furniture</div>
          <div class="product-cell status-cell">
            <span class="cell-label">Status:</span>
            <span class="status active">Active</span>
          </div>
          <div class="product-cell sales"><span class="cell-label">Sales:</span>11</div>
          <div class="product-cell stock"><span class="cell-label">Stock:</span>36</div>
          <div class="product-cell price"><span class="cell-label">Price:</span>$560</div>
        </div>






           <li class="nav-item ">
              <a class="nav-link" href="javascript:void(0);" routerLink="acc"><i class="fas fa-first-aid"></i>  <a *ngIf="isLoggedIn" class="nav-link" href="javascript:void(0);" routerLink="profilemedecin">
                <i class="far fa-user"></i> Mon compte
            </a>
            <a *ngIf="!isLoggedIn" class="nav-link" href="javascript:void(0);" routerLink="login">
                <i class="far fa-address-book"></i> Se connecter
            </a>
          </li>
```
## install minikube :
```
docker run --rm -it --net=host --name=minikube gcr.io/k8s-minikube/kicbase:v0.0.23 sh -c "sudo /usr/local/bin/kubectl proxy --accept-hosts='.*' --address='0.0.0.0' --port=8001 --context=minikube"

```

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
