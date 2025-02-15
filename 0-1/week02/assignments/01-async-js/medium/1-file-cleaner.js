const fs = require("fs");
const filePath = "1-file.txt";

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("uncleaned data: ", data);

  const cleanedData = data.replace(/\s+/g, " ").trim(); // using regular expressions to identify more spaces
  console.log("cleaned data: ", cleanedData);
  fs.writeFile(filePath, cleanedData, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`File ${filePath} has been cleaned`);
    }
  });
});
