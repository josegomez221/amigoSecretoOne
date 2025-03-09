# amigoSecretoOne# Proyecto de Lista de Amigos

Este proyecto permite agregar nombres de amigos a una lista, mostrar los amigos registrados, y realizar un sorteo aleatorio para seleccionar un amigo. El proyecto está construido con HTML y JavaScript.

## Descripción

El sistema permite realizar las siguientes acciones:
- **Agregar un amigo**: El usuario puede ingresar el nombre de un amigo en un campo de texto, y este nombre se agrega a una lista de amigos.
- **Mostrar la lista de amigos**: Los amigos añadidos se muestran en una lista HTML.
- **Sorteo aleatorio**: El sistema puede realizar un sorteo aleatorio para seleccionar un amigo de la lista.

## Funcionalidades

1. **Agregar amigo**: Permite ingresar un nombre de amigo en un campo de texto. Si el campo está vacío, se muestra una alerta pidiendo que se ingrese un nombre. El nombre ingresado se agrega a un array llamado `amigos`, y se limpia el campo de texto.

2. **Mostrar amigos**: Muestra todos los amigos añadidos en una lista `<ul>` en la interfaz de usuario.

3. **Sorteo aleatorio**: Realiza un sorteo aleatorio de un amigo de la lista y muestra el nombre del amigo seleccionado.

## Instalación

1. Descarga o clona este repositorio.
2. Abre el archivo `index.html` en tu navegador para interactuar con la aplicación.

No es necesario ningún servidor, solo el archivo HTML y JavaScript para que funcione.

## Uso

1. **Agregar un amigo**:
   - Escribe el nombre de un amigo en el campo de texto y haz clic en el botón "Agregar Amigo". El nombre se añadirá a la lista.
   
2. **Ver la lista de amigos**:
   - La lista de amigos aparecerá automáticamente en la pantalla debajo del formulario de entrada.

3. **Sorteo de un amigo**:
   - Haz clic en el botón "Sortear Amigo" para seleccionar un amigo de manera aleatoria de la lista.

## Estructura del Proyecto

Este proyecto se compone de los siguientes archivos:

- **index.html**: Contiene la estructura HTML para mostrar la interfaz.
- **app.js**: Contiene el código JavaScript que maneja las funcionalidades de agregar amigos, mostrar la lista y realizar el sorteo.
- **style.css** (opcional): Puedes agregar este archivo si deseas estilizar el proyecto.