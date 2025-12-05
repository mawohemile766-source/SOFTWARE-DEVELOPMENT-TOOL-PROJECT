const express = require("express");
const cors =require("cors");
const { OAuth2Client} =  require("google-auth-library");

const app = express()
app.use(express.json());
app.use(cors());
const client = new OAuth2Client("172963971660-44jiecvlnp6msgfpeu096nd3a8sh05rh.apps.googleusercontent.com");

app.post("google- login", async (req, res) =>{
    const { idToken} = req.body;
    try {
        const ticket = await client.verifyIdToken({
            idToken,
            audience: "172963971660-44jiecvlnp6msgfpeu096nd3a8sh05rh.apps.googleusercontent.com"
            });
            const payload = ticket.getPayload();
            res.json({
                success: true,
                user: {
                email:payload.emai,
                name: payload.name,
                picture: payload.picture
                }   
        });
        
    } catch (err) {
        res.json({ success: false, message: "Token verification failed"});
    }

});

app.listen(3000, () => console.log("Server running on port 3000"));