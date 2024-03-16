import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const isDevelopment = process.env.NODE_ENV === "development";

  let directoryPath = isDevelopment
    ? path.join(process.cwd(), "public", "files")
    : "/mnt/HC_Volume_100473672/dumps-server";

  try {
    const rawDirectoryPath = path.join(directoryPath, "raw");
    const convertedDirectoryPath = path.join(directoryPath, "converted");

    const rawFiles = getFilesFromDir(rawDirectoryPath);
    const convertedFiles = getFilesFromDir(convertedDirectoryPath);

    const files = {
      raw: rawFiles,
      converted: convertedFiles,
    };

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

function getFilesFromDir(directoryPath: string) {
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

  return files;
}
