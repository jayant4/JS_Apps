import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// get config vars
dotenv.config();

// access config var
process.env.TOKEN_SECRET;

export function generateAccessToken(username) {
    return jwt.sign({ username, expiresIn: "20d" }, process.env.TOKEN_SECRET);
}

export function authenticateToken(req, res, next) {
    const token = req.headers['jwt']
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        console.log(err)

        if (err) return res.sendStatus(403)

        req.user = user

        next();
    })
}