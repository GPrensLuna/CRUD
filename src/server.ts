import express, { json, Request, Response } from "express";

const app = express();

const PORT = 3000;

app.use(json());

app.get("/", (req: Request, res: Response) => {
    res.json(
        "hola mundo?, no tengo que subir y bajar el server cada que hago un cambio"
    );
});

app.listen(PORT, () => {
    console.log(`server run en el tal ves si  http://localhost:${PORT}`); // *--> se utilizan las `para poder ejecutar código
    console.log("server run en el ${PORT}");
    console.log('server run "en" el ${PORT}');
});
