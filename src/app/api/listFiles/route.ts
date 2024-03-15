import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: NextRequest) {
  const directoryPath = path.join(process.cwd(), "public", "files");

  try {
    const fileNames = fs
      .readdirSync(directoryPath)
      .filter((file) => path.extname(file) !== ".txt");
    const files = fileNames.map((file) => {
      const descriptionFilePath = path.join(directoryPath, `${file}.txt`);
      let description = "";

      try {
        description = fs.readFileSync(descriptionFilePath, "utf8");
      } catch (err) {
        console.error("Описание не найдено для файла: " + file);
      }

      return { file, description };
    });

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

export const dynamic = "force-dynamic";
