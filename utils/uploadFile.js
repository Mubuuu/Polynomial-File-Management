import { google } from "googleapis";
export const uploadFileToDrive = async (file) => {
  try {
    const drive = google.drive({ version: "v3", auth });
    const fileMetadata = {
      name: file.originalname,
      parents: [process.env.DRIVE_PATH],
    };
    const media = {
      mimeType: file.mimeType,
      body: fs.createReadStream(file.path),
    };
    const response = await drive.files.create({
      requestBody: fileMetadata,
      media,
    });
    return response;
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};
