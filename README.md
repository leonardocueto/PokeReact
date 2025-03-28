# React Pokémon App

## Descripción

Esta aplicación es una implementación nativa de React que utiliza TypeScript y
la [PokeAPI](https://pokeapi.co/) para obtener datos sobre Pokémon. Todo el
desarrollo se realizó sin librerías externas, incluyendo la navegación, que fue
implementada de forma nativa con React y la API del navegador.

## Características

-   **Navegación nativa:** La aplicación implementa un sistema de navegación sin
    dependencias externas, utilizando únicamente las capacidades de React y la
    API del navegador.
-   **Consumo de API:** Se conecta a la PokeAPI para obtener información sobre
    los Pokémon, como nombres, imágenes, tipos, habilidades, entre otros.
-   **Favoritos:** Los usuarios pueden agregar Pokémon a una lista de favoritos,
    que se puede consultar en una pestaña dedicada.
-   **Scroll infinito:** La lista de Pokémon implementa un sistema de scroll
    infinito para cargar dinámicamente más datos a medida que el usuario se
    desplaza.
-   **Interfaz Reactiva:** La interfaz se actualiza dinámicamente en función de
    las interacciones del usuario y los datos obtenidos de la API.

## Estructura del Proyecto

```
react-pokemon/
├── public/
├── src/
│   ├── components/   # Componentes reutilizables de la aplicación
│   ├── pages/        # Páginas principales de la aplicación
│   ├── hooks/        # Hooks personalizados para lógica reutilizable
│   ├── utils/        # Funciones auxiliares y helpers
│   ├── App.tsx       # Componente raíz de la aplicación
│   ├── index.tsx     # Punto de entrada de la aplicación
├── README.md         # Documentación del proyecto
```

## Instalación y Ejecución

1. Clona este repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
cd react-pokemon
```

2. Instala las dependencias (aunque no se usan librerías externas, este paso
   asegura que React y TypeScript estén configurados):

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm start
```

4. Abre la aplicación en tu navegador en `http://localhost:3000`.

## Uso

1. Al iniciar la aplicación, se muestra una lista de Pokémon obtenida de la
   PokeAPI.
2. Puedes desplazarte hacia abajo para cargar más Pokémon gracias al sistema de
   scroll infinito.
3. Puedes seleccionar un Pokémon para ver más detalles, como sus estadísticas,
   habilidades y tipo.
4. Puedes agregar Pokémon a una lista de favoritos, que se puede consultar en la
   pestaña de favoritos.
5. La navegación entre vistas se realiza de forma fluida gracias al sistema de
   navegación nativo implementado con React y la API del navegador.

## Tecnologías Utilizadas

-   **React:** Biblioteca principal para la construcción de la interfaz de
    usuario.
-   **TypeScript:** Lenguaje utilizado para la lógica de la aplicación,
    proporcionando tipado estático.
-   **PokeAPI:** Fuente de datos para la información de los Pokémon.
-   **TypeScript:** Base del lenguaje para la implementación.
-   **HTML5 y CSS3:** Para la estructura y estilos de la aplicación.
