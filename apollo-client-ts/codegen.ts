import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "../apollo-prisma-server/src/schema.graphql",
  documents: ["./**/*.ts"],
  generates: {
    "./__generated__/": {
      preset: "client",
    },
  },
};

export default config;
