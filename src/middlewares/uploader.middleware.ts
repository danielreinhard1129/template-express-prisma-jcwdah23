import multer from "multer";

export class UploaderMiddleware {
  upload = () => {
    const storage = multer.memoryStorage();

    const limits = { fileSize: 2 * 1024 * 1024 }; // 2mb

    return multer({ storage, limits });
  };
}
