const fs = require('fs');
const outputWriteDir = './dist';            // Output directory
const outputCopyDir = './dist/css';         // Output directory for CSS file

// Function for creating the index.html file.
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync(outputWriteDir)){                        // Checks if folder structure exists, if not create first.
            fs.mkdirSync(outputWriteDir, { recursive: true });
        }

        fs.writeFile(`${outputWriteDir}/index.html`, fileContent, err => {      // Output string to html file.
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

// Function for copying the index.css file.
const copyFile = () => {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync(outputCopyDir)){                         // Checks if folder structure exists, if not create first.
            fs.mkdirSync(outputCopyDir, { recursive: true });
        }

        fs.copyFile('./src/css/index.css', `${outputCopyDir}/index.css`, err => {       // Copies existing css file to ./dist/css
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