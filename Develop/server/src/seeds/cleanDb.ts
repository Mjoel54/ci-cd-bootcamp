import models from "../models/index.js";
import db from "../config/connection.js";

export default async (modelName: "Question", collectionName: string) => {
  try {
    const modelDb = models[modelName]?.db?.db;
    if (!modelDb) {
      throw new Error(`Database for model ${modelName} is not initialized`);
    }

    let modelExists = await modelDb
      .listCollections({
        name: collectionName,
      })
      .toArray();

    if (modelExists.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
};
