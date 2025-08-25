import { NextRequest, NextResponse } from "next/server";
import {CreateBucket, UploadeToS3} from "./upload"

export async function POST(req:NextRequest, res:NextResponse) {
    if(!req.body){ return }
    const body =  await req.json()
  try {


const {quote} = body 
const jsonString = JSON.stringify({quote})
const bucketName = "my-json-bucket-day-one";
const keyName = `${quote.split(" ")[0]}.json`

const CreatBucketResult = await CreateBucket(bucketName);           
const result = await UploadeToS3(bucketName, keyName, jsonString); 

    return NextResponse.json({ message:`Successfully uploaded ${keyName} to ${bucketName}, this is the result: ${result} and the bucketCreateion result: ${CreatBucketResult}`})
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ message: "Upload error", erro:error}, { status: 500 });
  }
}



export async function PUT(req:Request, res:Response) { 
    if(!req.json) return 

const body = await req.json()
try {
   const {newFileName, newFile} = body 

    console.log(newFileName, newFile)
return NextResponse.json({message:"updated Successfully"}, {status:200})
} catch (error) {
    return NextResponse.json({ message: "update error", erro:error}, { status: 500 });
}


} 




