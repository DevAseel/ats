import express, { Request, Response } from "express";
import cors from "cors";
import { PORT } from "./config";
import routes from "./router/routes";

const app: express.Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// // eslint-disable-next-line @typescript-eslint/no-var-requires
app.use("/api", routes);

app.get("", (req: Request, res: Response) => {
	res.status(200).send("Hello World");
});

app.listen(PORT, () => {
	console.log(`started at port ${PORT}`);
});
