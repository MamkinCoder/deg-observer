export type FileFormats = "raw" | "converted";

export type FilesTwoColumns = {
  [K in FileFormats]: File[];
};

export type File = {
  file: string;
  description: string;
};
