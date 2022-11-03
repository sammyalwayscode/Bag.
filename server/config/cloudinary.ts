import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "samolorunda",
  api_key: "871341554644239",
  api_secret: "Mt_S1riHhh5g9plWHVdpiHyyv58",
  secure: true,
});

export default cloudinary;

// exports.uploads = () => (file: any, folder: any) => {
//   return new Promise((resolve) => {
//     cloudinary.uploader.upload(
//       file,
//       (result: any) => {
//         resolve({
//           url: result.url,
//           id: result.public_id,
//         });
//       },
//       {
//         resource_type: "auto",
//         folder: folder,
//       }
//     );
//   });
// };
