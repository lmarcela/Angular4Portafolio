# Comandos de utilidad

Nota: Al crear repositorio en GitHub dice:  

    git init
	git add README.md
	git commit -m "first commit"
	git remote add origin https://github.com/lmarcela/Angular4Portafolio.git
	git push -u origin master
	…or push an existing repository from the command line

	git remote add origin https://github.com/lmarcela/Angular4Portafolio.git
	git push -u origin master
	…or import code from another repository
	You can initialize this repository with code from a Subversion, Mercurial, or TFS project.

## COMANDOS PARA GIT

    VERSION: git --version
    USUARIO: git config --global user.name "Marcela Malaver"
    EMAIL: git config --global user.email "marcela9409@gmail.com"
    ALIAS PARA LOGIN: git config --global alias.lg "log --oneline --decorate --all --graph"
    ALIAS PARA STATUS: git config --global alias.s "status -s"
    VER URL REPOSITORIO: git remote -v
    PONER URL REPOSITORIO: git remote add origin https://github.com/lmarcela/Angular4Portafolio.git
    SUBIR CAMBIOS: git push -u origin master

    VER ESTADO DE GIT: git s
    AÑADIR ARCHIVOS AL GIT: git add .
    CREAR COMMIT CON MENSAJE: git commit -m "ESTE ES MI MENSAJE"
    SUBIR AL REPOSITORIO (REVISAR PRIMERO URL DEL REPOSITORIO): git push -u origin master

	REVERSAR CAMBIOS EN EL GIT: git checkout -- .

## COMANDOS ANGULAR

    INICIAR SERVIDOR (EN LA CARPETA DEL PROYECTO): ng serve -o
    CREAR COMPONENTE: ng g c components/header
    CREAR COMPONENTE SIN CSS: ng g c components/footer -is
    CREAR COMPONENTE SIN ARCHIVOS CSS Y SPEC: ng g c components/portafolio --spec false -is
    CREAR SERVICIO SIN SPEC: ng g s services/information --spec false 
    PONER EN PRODUCCION: ng build --env=prod --prod
    HTTP-SERVER (SOLO LA PRIMERA VEZ): https://www.npmjs.com/package/http-server (npm install http-server -g)
    EN LA CARPETA DIST DEL PROYECTO: http-server -o 

## REVISAR UN ARCHIVO JSON
http://json.parser.online.fr/

## LINKS IMPORTANTES
https://www.udemy.com/html-hacia-angular/learn/v4/overview
https://firebase.google.com/
https://github.com/Klerith/portafolio
https://www.pixeden.com/html5-website-templates/urku-html5-portfolio-website
http://themes-pixeden.com/landing/urku/index.html

## DESPLEGAR PROYECTO EN GITPAGES
1. Generar carpeta dist (ng build --env=prod --prod)
2. Cambiar el nombre de la carpeta dist a docs
3. En la configuracion (Settings) del repositorio, ir a la seccion "GitHub Pages". En Source elegir "master branch /docs folder". Luego save.
4. El proyecto esta desplegado (Ej: https://lmarcela.github.io/Angular4Portafolio/#/home)


# Portafolio - README ORIGINAL

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
