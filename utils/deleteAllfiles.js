export async function deleteFiles(files) {
    try {
      const fileIds = files.map((file) => file.id);
      const requests = fileIds.map((id) => ({
        delete: {
          fileId: id,
        },
      }));
  
      await drive.files.batchDelete({
        requestBody: {
          requests,
        },
      });
  
      console.log('All files deleted successfully.');
    } catch (error) {
      console.error('Error deleting files:', error);
      throw error;
    }
  }