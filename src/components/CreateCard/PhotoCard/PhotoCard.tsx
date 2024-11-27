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
import { useState } from "react";

export function PhotoCard() {
  // Define a functional component named UploadAndDisplayImage
  // Define a state variable to store the selected image
  const [selectedImage, setSelectedImage] = useState(null);

  // Return the JSX for rendering
  return (
    <div>
      {/* Conditionally render the selected image if it exists */}
      {selectedImage && (
        <div>
          {/* Display the selected image */}
          <img
            alt="not found"
            width={"352px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br /> <br />
          {/* Button to remove the selected image */}
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}

      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full rounded-xl cursor-pointer bg-salmon h-96"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm">
              <span className="font-semibold">Upload a recipe</span>
            </p>
            <p className="text-xs ">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={(event) => {
              console.log(event.target.files[0]); // Log the selected file
              setSelectedImage(event.target.files[0]);
            }}
          />
        </label>
      </div>
    </div>
  );
}
