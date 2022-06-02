import "dotenv/config";
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

const PORT: number = +(process.env.PORT || 3000);

export { PORT };
