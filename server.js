let express = require('express');
const axios = require("axios");
let app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json({ limit: '10mb' }))
//TODO delete when finished
const cors = require('cors');
app.use(cors({
    origin: '*'
}));

const gmail = require("./routes/gmail");
const GmailController = require("./controllers/gmail/GmailController");

// body parser error catcher
app.use((err, req, res, next) => {
    if (err) {
        res.status(400).json({error : 'error parsing data'})
    } else {
        next()
    }
})
app.use(bodyParser.json()); //Make sure u have added this line
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());

app.use('/gmail', gmail);

app.get("/", (req, res) =>{
    res.send("<div id='click'><h5>Send Email API</h5></div>")
});



app.listen(8010, function () {
    console.log('Server started on port 8010');
});

