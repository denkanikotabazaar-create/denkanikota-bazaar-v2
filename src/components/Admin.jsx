import React, { useState } from "react";

export default function Admin() {
  const [categories, setCategories] = useState([
    "Vegetables",
    "Fruits",
    "Flowers",
  ]);

  const [newCategory, setNewCategory] = useState("");

  function addCategory() {
    if (newCategory.trim() === "") {
      return;
    }

    setCategories([...categories, newCategory]);
    setNewCategory("");
  }

  function deleteCategory(index) {
    const updated = [...categories];
    updated.splice(index, 1);
    setCategories(updated);
  }

  return (
    <div>
      <h2>🛡️ Admin Panel</h2>

      <input
        placeholder="New category"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
      />

      <button onClick={addCategory}>
        Add
      </button>

      <br />
      <br />

      {categories.map((item, index) => (
        <div
          key={index}
          style={{
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #dddddd",
            borderRadius: "10px",
          }}
        >
          {item}

          <button
            style={{ marginLeft: "10px" }}
            onClick={() => deleteCategory(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
