import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:4000/graphql",
  generates: {
    'types/graphql.ts': { plugins: ['typescript', 'typescript-operations'] },
  },
  documents: ["./**/*.ts"]
};

export default config;
