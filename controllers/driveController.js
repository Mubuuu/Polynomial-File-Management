import { google } from "googleapis";
import credentials from "../credentials.json" assert { type: "json" };
import { uploadFileToDrive } from "../utils/uploadFile.js";


const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: [process.env.SCOPES],
});

const drive = google.drive({ version: "v3", auth });

export const uploadFile = async (req, res) => {
  const { files } = req;
  if (!files) {
    return res.status(400).send("No file uploaded");
  }
  for (let f = 0; f < files.length; f++) {
    const size = files[f].size/(1024*1024)
    if(size>50){
      return res.json('File must be under 50mb')
    }
    const response = await uploadFileToDrive(files[f]);
  }
  res.json('File uploaded successfully')
};

export const getAllFiles = async (req, res) => {
  try {
    const response = await drive.files.list({
      pageSize: 1000,
      fields: "files(id, name)",
    });

    const files = response.data.files;
    res.json(files);
  } catch (error) {
    console.error("Error retrieving files:", error);
    res.status(500).send("Error retrieving files");
  }
};
