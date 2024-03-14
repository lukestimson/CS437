import express, { Request, Response } from "express";
import cors from "cors";
import { connect } from "./mongoConnect";
import profiles from "./profiles";
import { Profile } from "./models/profile";


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// and add this after all the app.use() statements
connect("LukesCLuster"); // db name here

app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello, World");
});

// the route to get a single profile, given a userid
app.get("/api/profiles/:userid", (req: Request, res: Response) => {
    const { userid } = req.params;

    profiles
        .get(userid)
        .then((profile: Profile) => res.json(profile))
        .catch((err) => res.status(404).end());
});

// create a profile
app.post("/api/profiles", (req: Request, res: Response) => {
    const newProfile = req.body;

    profiles
        .create(newProfile)
        .then((profile: Profile) => res.status(201).send(profile))
        .catch((err) => res.status(500).send(err));
});

// in src/index.ts, after our previous routes
app.put("/api/profiles/:userid", (req: Request, res: Response) => {
    const { userid } = req.params;
    const newProfile = req.body;

    profiles
        .update(userid, newProfile)
        .then((profile: Profile) => res.json(profile))
        .catch((err) => res.status(404).end());
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});