import express from "express";
import routes from "./routes";

const PORT: number = 3000;

const app: express.Application = express();

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
