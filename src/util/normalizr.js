import { normalize, schema } from "normalizr";

export const normaliseArray = (data) => {
  const product = new schema.Entity("products");
  const productsSchema = new schema.Array(product);
  const productData = normalize(data, productsSchema);

  return productData;
};

export const normalise = (data) => {
  const productSchema = new schema.Entity("product");
  return normalize(data, productSchema);
};
