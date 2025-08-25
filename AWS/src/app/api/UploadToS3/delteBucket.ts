 
import dotenv from "dotenv"
dotenv.config()

import {DeleteObjectCommand, S3Client, waitUntilObjectNotExists} from "@aws-sdk/client-s3"

const delteFile = async (BucketName:string, keyName:string) => { 
try {
   const client = new S3Client({
  region: "us-east-1", 
    credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
})


const params ={Bucket:BucketName, key:keyName } 

const command = new DeleteObjectCommand(params)

  await waitUntilObjectNotExists({client},{params})

    const result = await client.send(command) 

 console.log(`File "${keyName}" deleted successfully from ${BucketName} and the result ${result}`);
} catch (error) {
    if ( error instanceof S3ServiceException && error.name === "NoSuchBucket") {
      console.error(
        `Error from S3 while deleting object from ${BucketName}. The bucket doesn't exist.`,
      );
    } else if (error instanceof S3ServiceException) {
      console.error(
        `Error from S3 while deleting object from ${BucketName}.  ${error.name}: ${error.message}`,
      );
    } else {
      throw error;
    }
    console.log(error)    
}

} 

export default delteFile
