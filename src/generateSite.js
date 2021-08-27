const fs = require('fs');
const outputWriteDir = './dist';
const outputCopyDir = './dist/css';

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync(outputWriteDir)){
            fs.mkdirSync(outputWriteDir, { recursive: true });
        }

        fs.writeFile(`${outputWriteDir}/index.html`, fileContent, err => {
            if(err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync(outputCopyDir)){
            fs.mkdirSync(outputCopyDir, { recursive: true });
        }

        fs.copyFile(`${outputCopyDir}/index.css`, './dist/index.css', err => {
            if(err) {
                reject(err)
                return;
            }
            
            resolve({
                ok: true,
                message: 'Style sheet copied successfully!'
            });
        });
    });
};

module.exports = { writeFile, copyFile }