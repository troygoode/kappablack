import { DynamoDBAdapter } from "@auth/dynamodb-adapter";
import { DynamoDB, type DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const config: DynamoDBClientConfig = {
  credentials: {
    accessKeyId: process.env.AUTH_DYNAMODB_ID ?? "",
    secretAccessKey: process.env.AUTH_DYNAMODB_SECRET ?? "",
  },
  region: process.env.AUTH_DYNAMODB_REGION,
};

const client = DynamoDBDocument.from(new DynamoDB(config), {
  marshallOptions: {
    convertEmptyValues: true,
    removeUndefinedValues: true,
    convertClassInstanceToMap: true,
  },
});

const options = {
  tableName: process.env.AUTH_DYNAMODB_TABLE ?? "next-auth",
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DynamoDBAdapter(client, options),
  session: {
    strategy: "database",
  },

  providers: [
    Google({
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
});
