const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'server/media/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), (req, res) => {
    res.send("File uploaded successfully.");
});

app.use('/media', express.static(path.join(__dirname, 'media')));

app.listen(PORT, () => {
    console.log(`RipFlex server running on http://localhost:${PORT}`);
});
