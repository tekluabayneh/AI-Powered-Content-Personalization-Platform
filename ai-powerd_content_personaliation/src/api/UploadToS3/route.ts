import { NextRequest, NextResponse } from "next/server"
export default function GET(request:NextRequest,response:NextResponse){

    return new NextResponse("item is uploaded", {
        status:200,
    })


}
