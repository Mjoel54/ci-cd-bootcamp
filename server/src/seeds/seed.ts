// import db from "../config/connection.js";
// import Question from "../models/Question.js";
// import cleanDB from "./cleanDb.js";

// import pythonQuestions from './pythonQuestions.json' assert { type: "json" };

// db.once('open', async () => {
//   await cleanDB('Question', 'questions');

//   await Question.insertMany(pythonQuestions);

//   console.log('Questions seeded!');
//   process.exit(0);
// });

import fs from "fs";
import path from "path";
import db from "../config/connection.js";
import Question from "../models/Question.js";
import cleanDB from "./cleanDb.js";

// Read JSON file manually instead of using `import`
const questionsFilePath = path.resolve("src/seeds/pythonQuestions.json");

const pythonQuestions = JSON.parse(fs.readFileSync(questionsFilePath, "utf-8"));

db.once("open", async () => {
  await cleanDB("Question", "questions");
  await Question.insertMany(pythonQuestions);

  console.log("✅ Questions seeded successfully!");
  process.exit(0);
});
