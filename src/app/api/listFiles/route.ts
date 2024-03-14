import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: NextRequest) {
  const directoryPath = path.join(process.cwd(), "public", "files");
  try {
    const files = fs.readdirSync(directoryPath).map((file) => ({ file }));
    return new NextResponse(JSON.stringify(files), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Files could not be read" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
