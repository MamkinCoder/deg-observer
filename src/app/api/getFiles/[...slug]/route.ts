import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // Extract the file path from the request
  const filePath = request.nextUrl.pathname.split("/").slice(3).join("/");
  const directoryPath = path.join(process.cwd(), "public", "files");
  const fullPath = path.join(directoryPath, filePath);

  try {
    // Read the file
    const fileBuffer = fs.readFileSync(fullPath);
    // Set the appropriate content type based on the file extension
    const contentType =
      path.extname(fullPath) === ".jpg"
        ? "image/jpg"
        : "application/octet-stream";
    // Set the content disposition header to trigger download
    const headers = {
      "Content-Type": contentType,
      "Content-Disposition": `attachment; filename=${path.basename(fullPath)}`,
    };
    // Send the file as a response
    return new NextResponse(fileBuffer, { status: 200, headers });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "File could not be read" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

export const dynamic = "force-dynamic";
