# Employee management app :construction_worker_woman:

This project allows to query employees with their statuses, persisted in a PostgreSQL DB, that is accessed with GraphQL via Hasura. One can also delete and add new employees.

## Live Deploy

https://main--eloquent-meringue-3dd8b2.netlify.app/

## Local dev setup

clone this repo  
cd worker-status-app  
yarn install  
yarn dev

## Tech stack

React, Typescript, Apollo, Styled Components, React Testing Library, Lefthook, vite

## Features

The project uses Lefthook for enforcing ESlint rules, conventional commit message format, and runs tests and auto-prettify on commit.

## Important notes for improvement

1. The API key should be hidden. In a server-side rendered project with NextJS it wouldn't be an issue. In this case, using React, I would create a Netlify remote function for querying and hiding the API key. Since it's a demo project I haven't implemented it yet.
2. Apollo should update the cached data to reflect the changes immediately instead of waiting for the roundtrip request when executing a CRUD operation.
3. Variables such as common font sizes and colors should be extracted and based on Hex Color Codes.
4. There should be proper error handling, probably with react-error-boundary to handle API fetching issues.
5. There should be better test coverage.
6. Input field should clear after submitting a new employee.
