![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# **DOGS Up!** | Proyecto Individual

## **📌 OBJETIVOS**

### _Acerca de este proyecto..._

La idea de este proyecto es construir una Single Page Application utlizando las tecnologías: **React**, **Redux**, **Node**, **Express** y **Sequelize** a partir de la API [**TheDogApi**](https://thedogapi.com/) y en la que se pueda:

-  Buscar perros.
-  Visualizar la información de los perros.
-  Filtrarlos.
-  Ordenarlos.
-  Crear nuevos perros.

## Tecnologías utilizadas

- HTML, CSS, Javascript
- React - Redux
- Node.js - Express
- Sequelize
<br>
<br>

⚠️
**IMPORTANTE** ⚠️
Para poder utilizar la API es necesario crear una cuenta y obtener una ApiKey que luego deberá ser incluida en todos los request que hagamos. Esto se logra simplemente agregando **`?api_key={YOUR_API_KEY}`** al final de cada end-point. Agregar la clave en el archivo **`.env`** para que la misma no se suba al repositorio por cuestiones de seguridad.


<br />

## **📍 Features |** 

-  SearchBar: un input de búsqueda para encontrar razas de perros por nombre.
<br>
-  Botones/Opciones para **filtrar** por temperamentos, y por si su origen es de la API o de la base de datos.
-  Botones/Opciones para **ordenar** tanto ascendentemente como descendentemente las razas de perros por orden alfabético y por peso.
-  Paginado.

<br />

---

## **⚠️ IMPORTANTE**



Antes que nada, si queremos ver el proyecto en funcionamiento es necesario:

```bash
npm i         | para instalar las dependencias necesarias

npm start     | para levantar el proyecto * => esto debe acerse en una terminal destinada a la carpeta "api" destinada al servidor como también para la carpeta "client".
```

---
Para su correcto funcionamiento, deberás crear una base de datos y poder conectarla a través de sequelize.
Para esto, en la carpeta **`api`** deberás crear un archivo llamado: **`.env`** que tenga la siguiente forma:

   ```env
       DB_USER=usuariodepostgres
       DB_PASSWORD=passwordDePostgres
       DB_HOST=localhost
   ```

<br />

---



<br />



<br />
<div align="center">

### **Imágenes**:
</div>

![landingPage](https://user-images.githubusercontent.com/122935240/249170681-5016c1f2-57f5-4ab2-bcc1-7e0e73a49613.png)
![about](https://user-images.githubusercontent.com/122935240/249172874-d540946a-3ad0-4cf9-8a2e-599e861a59b9.png)
![home](https://user-images.githubusercontent.com/122935240/249170733-bf7e14c6-accf-41bd-8e7e-b40186ee831a.png)
![home2](https://user-images.githubusercontent.com/122935240/249170756-3d7bd2b6-be95-4c51-baeb-46d5a15a5581.png)
![detail](https://user-images.githubusercontent.com/122935240/249170779-8f7861fe-b4f4-4b8a-a1e0-8a893948e333.png)

<br />

---

<br />

### Bye !
<img src="./dogs.jpg" alt="" width="1000px" />
