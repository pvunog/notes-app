import StorageStack from "./StorageStack";
import ApiStack from "./ApiStack";

export default function main(app) {

  // Set default runtime for all functions
  app.setDefaultFunctionProps({
    runtime: "nodejs12.x"
  });

  const storageStack = new StorageStack(app, "storage");

  new ApiStack(app, "api", {
    table: storageStack.table,
  });

}
