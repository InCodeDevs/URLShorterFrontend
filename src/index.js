const express = require('express');
const {
    urlServer
} = require('@incodelang/urlshorter')
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser());

urlServer({
    app: app,
    prefix: "url"
})

app.use(express.static(path.join(__dirname, "./public")))

app.listen(process.env.PORT || 3000, "0.0.0.0");