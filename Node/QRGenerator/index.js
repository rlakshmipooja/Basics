import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type in your URL:",
      name: "url",
    },
  ])
  .then((answers) => {
    const url = answers.url;
    var qr_svg = qr.image(url, { type: "png" });
    qr_svg.pipe(fs.createWriteStream("qr_image.png"));

    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("QR code saved as qr_image.png and URL saved in URL.txt");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment");
    } else {
      console.error("Something went wrong", error);
    }
  });
