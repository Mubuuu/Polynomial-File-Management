import { google } from "googleapis";
import credentials from "../credentials.json" assert { type: "json" };

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: [process.env.SCOPES],
});

const drive = google.drive({ version: "v3", auth });

export const shareFileWithGmailUsers = async (req, res) => {
  const { fileId, emailAddresses } = req.body;
  console.log(fileId);
  console.log(emailAddresses);

  const permissionIDs = {};
  for (let i = 0; i < emailAddresses.length; i++) {
    const response = await drive.permissions.create({
      fileId: fileId,
      requestBody: {
        role: "reader", 
        type: "user",
        emailAddress: emailAddresses[0],
      },
      sendNotificationEmail: true, 
    });
    permissionIDs[emailAddresses[i]] = `Permission id : ${response.data.id}`;
  }
  res.json(permissionIDs);
};
