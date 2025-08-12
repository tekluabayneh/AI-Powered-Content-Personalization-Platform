import stream from "stream";
import { IncomingForm } from "formidable";
import path from "path";
import { NextResponse } from "next/server";

export const config = {
  api: {
    bodyParser: false,
  },
};

async function parseForm(req: Request) {
  const form = new IncomingForm({
    keepExtensions: true,
    uploadDir: path.join(process.cwd(), "public", "uploads"),
  });

  return new Promise<{ fields: any; files: any }>((resolve, reject) => {
    const chunks: Uint8Array[] = [];

    const reader = req.body?.getReader();
    if (!reader) return reject(new Error("No request body"));

    // Read the entire stream
    function read() {
      reader?.read().then(({ done, value }) => {
        if (done) {
          const buffer = Buffer.concat(chunks);

          const readable = new stream.Readable();
          readable.push(buffer);
          readable.push(null);

          // Override the headers so formidable can parse it
          (readable as any).headers = Object.fromEntries(req.headers);

          form.parse(readable, (err, fields, files) => {
            if (err) reject(err);
            else resolve({ fields, files });
          });
          return;
        }
        chunks.push(value);
        read();
      });
    }
    read();
  });
}

export async function POST(req: Request) {
  try {
    const { files } = await parseForm(req);
        console.log(files)
    const uploadedFile = Array.isArray(files.file) ? files.file[0] : files.file;
    const filename = path.basename(uploadedFile?.filepath);

    return NextResponse.json({ message: "Upload successful", filename , files});
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ message: "Upload error" }, { status: 500 });
  }
}




