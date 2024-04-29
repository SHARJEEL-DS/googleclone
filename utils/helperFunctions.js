const url = "https://random-words5.p.rapidapi.com/getRandom";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "07611baa4cmsh15ebb59b25072ffp179c96jsn169d0fbc99c5",
    "X-RapidAPI-Host": "random-words5.p.rapidapi.com",
  },
};

export async function getRandomWord() {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    // console.log(result);
    return result;
    console.log(result);
  } catch (error) {
    console.error("random word api error", error.message);
  }
}

const downloadImage = async (imageUrl, imageName) => {
  try {
    // Fetch the image as a blob
    const response = await fetch(imageUrl);
    const blob = await response.blob();

    // Create a FileReader to read the blob as a data URL
    const reader = new FileReader();
    reader.onloadend = () => {
      // Create an anchor element
      const link = document.createElement('a');
      link.href = reader.result; // Set the data URL as the href
      link.download = imageName;

      // Append the anchor to the document
      document.body.appendChild(link);

      // Trigger a click on the anchor to initiate the download
      link.click();

      // Remove the anchor from the document
      document.body.removeChild(link);
    };

    // Read the blob as a data URL (in this case, converting to a JPG format)
    reader.readAsDataURL(blob);
  } catch (error) {
    console.error('Error downloading image:', error);
  }
};

export { downloadImage };
