
import dotenv from "dotenv";
dotenv.config();

import { PutObjectCommand, S3Client, waitUntilObjectExists } from "@aws-sdk/client-s3";

const client = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const updateFile = async (BucketName: string, keyName: string, newContent: string) => {
  try {
    const params = {
      Bucket: BucketName,
      Key: keyName,
      Body: newContent,
      ContentType: "application/json",
    };

    // Upload / overwrite file
    const putCommand = new PutObjectCommand(params);
    const result = await client.send(putCommand);
    console.log("PutObject result:", result);


    // Wait until the object is confirmed to exist
    await waitUntilObjectExists({ client }, { Bucket: BucketName, Key: keyName });
    console.log(`File "${keyName}" now exists in bucket "${BucketName}"`);


  } catch (error: any) {
    console.error("Error updating file:", error.name, error.message);
  }

};

export default updateFile;
