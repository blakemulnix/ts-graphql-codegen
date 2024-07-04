import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "../apollo-prisma-server/src/schema.graphql",
  documents: ["./**/*.{ts,tsx}"],
  generates: {
    "./__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  // ignoreNoDocuments: true
};

export default config;
