export const getCloudinaryImageUrl = (publicId: string): string => {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`;
  const options = {
    quality: "auto",
    fetch_format: "auto",
    dpr: "auto",
  };
  const query = new URLSearchParams(options).toString();
  return `${baseUrl}/${publicId}?${query}`;
};
