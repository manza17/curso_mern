# Curso MERN

### Curso acerca de MERN (Mongo, Express, ReactJS y Node)

## **Dependencias:**

### Locales:

- Express: Entorno de trabajo utilizado para desarrollar aplicaciones web y Apis.

- Dotenv: Modulo que permite cargar las variables de entornor desde un archivo .env.

### Desarrollo:

- Nodemon: Demonio que monitorea cualquier cambio en el codigo fuente y reinicia automaticamente el servidor al detectar un cambio.

- TypeScript: Traduce de un codigo fuente a otro que es comprensible por el lenguaje o framework (node)

- @types/*: modulo que sirve para cargar todos los tipos definidos cuando se usa typescript en *. 

- Concurrently: Utilizado para ejecutar varios scripts en paralelo.

- Eslint: Es una herramienta utilizada para analizar el codigo estatico para identificar patrones problemáticos que se encuentran en el codigo.

- Jest: Utilizado para realizar test unitario.

- Supertes: Utilizado para realizar test para probar servicios http.

- ts-node: Para indicarle a jest que la prueba se hacen sobre el mismo ts y no sobre la transpilación

- serve: Para visualizar el coverage

## **Scripts**

- _Build:_ Se utiliza para transpilar el codigo en ts a js utilizando el archivo tsconfig.

- _Start:_ Se utiliza para ejecutar el codigo transpilado.

- _dev:_ Tiene dos funcionalidades que se ejecutan en paralelo:

> npx tsc --watch: Lo que hace es monitorear cada cambio y al detectar alguno se debe transpilar el código.

> nodemon: Se utiliza para que cada vez que se detecte un cambio, reinicie el servidor para incorporar los cambios producidos.

- _test:_ Se utiliza para correr los test

- _serve:coverage:_ Se utiliza para correr los test y generar el resporte de los mismos.

## Variables de entorno
### Las variables de entornos que hay que crear estan especificadas en el archivo .env.example. Hasta el momento, sólo se configuró el puerto
