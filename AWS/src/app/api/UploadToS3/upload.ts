import dotenv from "dotenv"
dotenv.config()

import {PutObjectCommand, CreateBucketCommand, S3Client, waitUntilBucketExists, } from "@aws-sdk/client-s3";

const client = new S3Client({
  region: "us-east-1", 
    credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
})

export const CreateBucket= async (bucketName:string) => { 
try {

const {Location} = await client.send( new CreateBucketCommand({Bucket:bucketName}) )

        // @ts-expect-error client nedd to be anotate so for now leaveing it as is
await waitUntilBucketExists({client},{Bucket:bucketName})
 console.log(`Bucket created at: ${Location}`); 


}catch (err:any) {
    if (err.name === "BucketAlreadyExists") {
      console.error("Bucket name already taken by another account.");
        throw err
    } else if (err.name === "BucketAlreadyOwnedByYou") {
      console.log("Bucket already exists in your account.");
      throw err;
    } else {
      throw err;
    }
  }}


export const UploadeToS3 = async (bucketName:string, keyName:string, jsonString:string) => { 
    const params = {
    Bucket: bucketName,          
    Key: keyName,               
    Body: jsonString,          
    ContentType: "application/json", 
  };
try {

const result = await client.send(new PutObjectCommand(params))  
    console.log(`Successfully uploaded ${keyName} to ${bucketName}, this is the result: ${result}`);
        return result 
  } catch (err) {
    console.error("Error uploading JSON:", err);
      throw err;
    }
}
