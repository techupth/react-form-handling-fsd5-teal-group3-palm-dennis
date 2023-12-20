import { useState } from "react";

function ProductForm() {
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault;
    alert(
      `Form submitted \n You're data is \n Name: ${productName} \n Price: ${productPrice} \n Image: ${productImage} \n Description: ${productDescription}`
    );
    e.target.reset;
  };
  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(e) => {
              e.preventDefault();
              setProductName(e.target.value);
            }}
            value={productName}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(e) => {
              e.preventDefault();
              setProductImage(e.target.value);
            }}
            value={productImage}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(e) => {
              e.preventDefault();
              setProductPrice(e.target.value);
            }}
            value={productPrice}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(e) => {
              e.preventDefault();
              setProductDescription(e.target.value);
            }}
            rows={4}
            cols={30}
            value={productDescription}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
