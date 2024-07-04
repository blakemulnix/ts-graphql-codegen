# GraphQL, Apollo, Typescript, and Codegen Demo

This repository provides some example code illustrating how to use Apollo GraphQL Client to call a GraphQL API, both using plain JavaScript as well as using TypeScript with automatically generated types.

## Starting the Backend

This repository includes a GraphQL server built using Apollo GraphQL Server and Prisma ORM. For running locally, Prisma uses a SQLite file-based database.

To start the GraphQL server, run:

```bash
# Change into backend directory
cd apollo-prisma-server

# Install the required packages
npm i

# Start the server
npm run start
```

## JavaScript

Here are the commands run the Javascript example:

```bash
# Install the required packages
npm i

# Execute the script
npm run start
```

## TypeScript

Here are the commands run the TypeScript example:

```bash
# Install the required packages
npm i

# Execute the script
npm run start

# After making changes to any queries or mutations, you can regenerate types by running
npm run codegen
```

## Database Migrations

To make updates to the GraphQL server / database schema, first make changes to the GraphQL schema declaration in `src/graphql.schema`. Then run `npm run codegen` to regenerate the GraphQL types.

Then, update the database schema in `prisma/schema.prisma`. Then run the following:

```bash
# Generate a database migration
npx prisma migrate dev --name MyNewMigration

# Regenerate the Prisma client used to interact with the database
npx prisma generate
```

Then make the necessary updates to the GraphQL resolvers in `src/resolvers.ts`.