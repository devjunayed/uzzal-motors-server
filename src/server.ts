import app from "./app";
import config from "./app/config";


async function main() {
  try {
    app.listen(config.port, () => {
      console.log(`Server is left running at ${config.port}`);
    });
  } catch (error) {
    console.log("This error occurred in server", error);
  }
}

main();

