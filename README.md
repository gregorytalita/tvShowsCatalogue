# TV shows catalogue

This project was developed using React.js.
To initialize the project you first have to install the dependencies by running:

        yarn install

And after that it's ready to start:

        yarn start

## Project structure

The project is divided into 3 main parts: Components, Containers and Core

        ├── README.md
        ├── package.json
        ├── public
        ├── src
        │   ├── components
        │   ├── containers
        │   ├── contexts
        │   ├── core

Where on components you are able to find React components that are independent from the other
parts of the application, making it reusable and scalable. Each component has it's unit tests
taking into consideration different scenarios based on it's props.
The components were developed using Material-ui library, due it's one of the biggest components library in react,
it is maintained and has a big community and documentation it follows Material design guidelines for development.
Another library used is styled-components, which is a "styling library". It mainly help keeping the style logic
inside the styles instead of inserting many conditional classes on your component.

        ├── components
        │   ├── AppBar
        │   ├── CardsRow
        │   ├── DetailsDrawer
        │   ├── DetailsTemplate
        │   ├── GenreChips
        │   ├── Rate
        │   ├── ShowCard
        │   ├── Template
        │   ├── TemplateRoute
        │   └── index.js

The containers are the pages itself, where the App is the main router ( and the only one in this case ),
Dashboard is the initial page and SearchResult is the page that is redirected.

        ├── containers
        │   ├── App
        │   ├── Dashboard
        │   └── SearchResult

In the core we can find things that helps us all around the application, like: api functions,
constants, functions and theme.

        ├── core
        │   ├── api
        │   ├── constants
        │   ├── functions
        │   └── theme
