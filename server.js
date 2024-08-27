const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');

const app = express();
const port = 3005;

// Serve static files from the root directory
app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/calculate', (req, res) => {
    const data = req.body;
    console.log(`Received data: ${JSON.stringify(data)}`);

    const pythonProcess = spawn('python3', ['chmod_calculator.py']);

    let resultData = '';
    let errorData = '';

    pythonProcess.stdin.write(JSON.stringify(data));
    pythonProcess.stdin.end();

    pythonProcess.stdout.on('data', (data) => {
        resultData += data.toString();
    });

    pythonProcess.stderr.on('data', (data) => {
        errorData += data.toString();
    });

    pythonProcess.on('close', (code) => {
        if (code !== 0) {
            console.error(`Python process exited with code ${code}`);
            res.status(500).json({ error: errorData });
        } else {
            try {
                const resultJson = JSON.parse(resultData);
                console.log(`Python stdout: ${resultData}`);
                res.setHeader('Content-Type', 'application/json');
                res.json(resultJson);
            } catch (err) {
                console.error(`Error parsing JSON: ${err}`);
                res.status(500).json({ error: 'Error parsing JSON from Python script' });
            }
        }
    });
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
