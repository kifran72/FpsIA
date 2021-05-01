import express from 'express';
import { index } from './src/index';
import Services from './src/services';
import * as dotenv from 'dotenv';
import chalk from 'chalk';
import { TwingLoaderFilesystem, TwingEnvironment } from 'twing';
import path from 'path';
import session from 'express-session';
const { NodeSSH } = require('node-ssh')
const app = express();
const PORT = 3000;
const services = new Services();
const loader = new TwingLoaderFilesystem("./src/templates");
const twing = new TwingEnvironment(loader);
const ssh = new NodeSSH();

//Config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "./src/public")));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
dotenv.config({ path: 'key.env' });

const password = process.env.PASSWORD;
ssh.connect({
    host: '81.185.106.245',
    username: 'iafps',
    port: 900,
    privateKey: './id_rsa',
    password
}).then((resp: any) => {
    if (resp) {
        let videoName = 'video.mp4';
        ssh.putFiles([{ local: './' + videoName, remote: '/ia' }]).then(function() {
            console.log("The File thing is done")
        }, function(error: any) {
            console.log("Something's wrong")
            console.log(error)
        });
        ssh.exec('python3 inference_video.py', ['--exp=1', '--video=' + videoName], {
            cwd: '/ia',
            onStdout(chunk: any) {
                console.log('stdoutChunk', chunk.toString('utf8'))
            },
            onStderr(chunk: any) {
                console.log('stderrChunk', chunk.toString('utf8'))
            },
        });

        ssh.getFile('./' + videoName, '/ia').then(function(Contents: any) {
            console.log("The File's contents were successfully downloaded")
        }, function(error: any) {
            console.log("Something's wrong")
            console.log(error)
        });
    }
})



// Applications
index.init(services);
index.routes(app, twing, services);

//Start server 
app.listen(PORT, () => { console.log(chalk.blue('Client web: http://localhost:' + PORT)); });