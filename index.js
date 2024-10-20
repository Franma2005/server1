const express = require("express");
const app = express();
const port = 3000;

/**
 * Detail: if I define this const here we only get an aleatory number,
when we start the server
*/
// const number = parseInt([Math.random() * 10]);

/**
 * The server ejecute first this method with all the urls
 */
app.use(express.json());

/**
 * I make an http method, this method is the post which recive a json object
 * and then I send the json object whith a new number
 */
app.post("/number", async (req, res) => {
    let json = req.body;
    json.number.push(parseInt([Math.random() * 10]));
    console.log(json);
    const response = await fetch("http://localhost:3001/number", {method:"POST", headers: {
        "Content-Type": "application/json",
        }, body:JSON.stringify(json)
    });

    json = await response.json();
    res.send(json);
});

/**
 * This method is
 */
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});