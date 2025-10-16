"use server";

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  UpdateCommand,
  QueryCommand,
  DeleteCommand,
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
  credentials: {
    accessKeyId: process.env.DYNAMODB_ID as string,
    secretAccessKey: process.env.DYNAMODB_SECRET as string,
  },
});
const docClient = DynamoDBDocumentClient.from(client);

const dynamodb = docClient.send.bind(docClient);

export {
  dynamodb,
  GetCommand,
  PutCommand,
  UpdateCommand,
  QueryCommand,
  DeleteCommand,
};
