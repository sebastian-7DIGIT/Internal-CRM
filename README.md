# Welcome

Main repository for the Internal CRM tool

## Installation

This is the budle for the Ineternal CRM task containing the client and server.



```
To start the development of the task you will need to first fork the current repository.

Then clone the forked repo on your local machine using the following command:

git clone <git_repo>
```

## Run the client

- Open a new terminal and navigate to the root of the project.

```
cd client
npm i
npm run dev
```

## Run the server

- Open a new terminal and navigate to the root of the project.

```
cd server
npm i
npm run dev
```

Notes:

1. The server contains two auto generated files for logging purposes:
   - `uncaughtExceptions.log` (contains any raised exceptions)
   - `logfile.log` 

## Guidelines for writing a commit message when committing changes to any of the git submodules

- Create: `[commit message]` (create a new component)
- Add: `[commit message]` (addition to an existing component)
- Fix: `[commit message]` (fix a bug within an existing component)
- Refactor: `[commit message]` (refactor an existing component)
