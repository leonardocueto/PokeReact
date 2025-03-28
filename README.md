# React Pokémon App

## Description

This application is a native React implementation using TypeScript and the
[PokeAPI](https://pokeapi.co/) to fetch data about Pokémon. The entire
development was done without external libraries, including navigation, which was
implemented natively with React and the browser's API.

## Features

-   **Native Navigation:** The app implements a navigation system without
    external dependencies, using only React and the browser's API capabilities.
-   **API Consumption:** It connects to the PokeAPI to fetch information about
    Pokémon, such as names, images, types, abilities, and more.
-   **Favorites:** Users can add Pokémon to a favorites list, which can be
    accessed in a dedicated tab.
-   **Infinite Scroll:** The Pokémon list implements an infinite scroll system
    to dynamically load more data as the user scrolls.
-   **Reactive Interface:** The interface dynamically updates based on user
    interactions and data fetched from the API.

## Project Structure

```
react-pokemon/
├── public/
├── src/
│   ├── components/   # Reusable components of the application
│   ├── pages/        # Main pages of the application
│   ├── hooks/        # Custom hooks for reusable logic
│   ├── utils/        # Helper functions and utilities
│   ├── App.tsx       # Root component of the application
│   ├── index.tsx     # Application entry point
├── README.md         # Project documentation
```

## Installation and Execution

1. Clone this repository:

```bash
git clone <REPOSITORY_URL>
cd react-pokemon
```

2. Install dependencies (even though no external libraries are used, this step
   ensures React and TypeScript are set up):

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open the application in your browser at `http://localhost:3000`.

## Usage

1. When the application starts, a list of Pokémon fetched from the PokeAPI is
   displayed.
2. You can scroll down to load more Pokémon thanks to the infinite scroll
   system.
3. You can select a Pokémon to view more details, such as its stats, abilities,
   and type.
4. You can add Pokémon to a favorites list, which can be accessed in the
   favorites tab.
5. Navigation between views is smooth thanks to the native navigation system
   implemented with React and the browser's API.

## Technologies Used

-   **React:** Main library for building the user interface.
-   **TypeScript:** Language used for the application logic, providing static
    typing.
-   **PokeAPI:** Data source for Pokémon information.
-   **HTML5 and CSS3:** For the structure and styles of the application.

## Live Application

You can access the deployed application here:
[React Pokémon App](https://poke-react-tau.vercel.app/) React Pokémon App
