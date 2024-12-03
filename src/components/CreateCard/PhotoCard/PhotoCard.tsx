// export function PhotoCard() {
//   return (
//     <div>
//       {/* Header */}
//       <h1>Upload and Display Image</h1>
//       <h3>using React Hooks</h3>

//       {/* Conditionally render the selected image if it exists */}
//       {selectedImage && (
//         <div>
//           {/* Display the selected image */}
//           <img
//             alt="not found"
//             width={"250px"}
//             src={URL.createObjectURL(selectedImage)}
//           />
//           <br /> <br />
//           {/* Button to remove the selected image */}
//           <button onClick={() => setSelectedImage(null)}>Remove</button>
//         </div>
//       )}

//       <br />

//       {/* Input element to select an image file */}
//       <input
//         type="file"
//         name="myImage"
//         // Event handler to capture file selection and update the state
//         onChange={(event) => {
//           console.log(event.target.files[0]); // Log the selected file
//           setSelectedImage(event.target.files[0]); // Update the state with the selected file
//         }}
//       />
//     </div>
//   );
// }

type PhotocardProps = {
  test: string;
  imageUrls: string[];
  handleAdd: (image: string) => void;
  handleRemoveImage: (index: number) => void;
};

export function PhotoCard({
  test,
  imageUrls,
  handleAdd,
  handleRemoveImage,
}: PhotocardProps) {
  // Define a functional component named UploadAndDisplayImage
  // Define a state variable to store the selected image

  // Return the JSX for rendering

  if (imageUrls.length === 0) {
    return (
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor={test}
          className="flex flex-col items-center justify-center w-full rounded-xl cursor-pointer bg-orange-100 h-96"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6 ">
            <svg
              className="w-8 h-8 mb-4 text-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm">
              <span className="font-semibold">
                Upload a delicious photo of the dish
              </span>
            </p>
            <p className="text-xs ">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input
            id={test}
            type="file"
            className="hidden"
            onChange={(event) => {
              if (event.target.files) {
                handleAdd(URL.createObjectURL(event.target.files[0]));
              }
            }}
          />
        </label>
      </div>
    );
  }

  return (
    <div>
      {/* Conditionally render the selected images if they exists */}
      {imageUrls.length > 0 &&
        imageUrls?.map((imageUrl, index) => {
          return (
            <div
              key={imageUrl}
              className="flex justify-center relative flex-col items-center  "
            >
              {/* Display the selected image */}
              <div className="h-[300px] overflow-hidden flex items-center">
                <img className="w-full" alt="not found" src={imageUrl} />
              </div>
              {/* Button to remove the selected image */}
              <div className="flex  absolute top-0 right-0">
                <button
                  type="button"
                  className=" flex justify-center cursor-pointer border-2  bg-white hover:bg-transparent  hover:border-2 hover:bg-gray-200 text-gray-400 hover:text-white font-Nunito font-semibold text-2xl px-[8px] rounded-lg"
                  onClick={() => handleRemoveImage(index)}
                >
                  x
                </button>
                <div className="flex">
                  <label htmlFor={test}>
                    <input
                      className="hidden "
                      id={test}
                      type="file"
                      onChange={(event) => {
                        if (event.target.files) {
                          console.log(event.target.files[0]); // Log the selected file
                          handleAdd(URL.createObjectURL(event.target.files[0]));
                        }
                      }}
                    />
                  </label>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
