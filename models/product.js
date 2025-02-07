const fs = require("fs");
const path = require("path");

const getProductsFromFile = () => {
  const p = path.join(
    path.dirname(require.main.filename),
    "data",
    "products.json"
  );

  return new Promise((resolve) => {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        resolve([]); // Return empty array if file doesn't exist
      } else {
        try {
          resolve(JSON.parse(fileContent)); // Parse JSON safely
        } catch (error) {
          resolve([]); // Handle JSON parsing errors
        }
      }
    });
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  async save() {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );

    try {
      const products = await getProductsFromFile(); // ✅ Reuse the function
      products.push(this);

      fs.writeFile(p, JSON.stringify(products, null, 2), (err) => {
        if (err) {
          console.error("Error writing file:", err);
        }
      });
    } catch (error) {
      console.error("Error saving product:", error);
    }
  }

  static async fetchAll() {
    return getProductsFromFile(); // ✅ Reuse the function
  }
};
