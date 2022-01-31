// retun image link
const image = imageLink => {
        if (!imageLink) {
            return '';
        }
        return `${imageLink}`;
    }
    // retun license image link
const license = licenseName => {
    if (licenseName === "MIT") {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

    } else if (licenseName === "GPL") {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    } else if (licenseName === "IBM") {
        return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
    } else if (licenseName === "ISC") {
        return `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
    } else if (licenseName === "Apache") {
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }

}
module.exports = templateData => {
    const {...data } = templateData
    return `# ${data.projectName}
## Description
* ${data.description}
## Table of Contents
- [Installation](#installation) 
- [Usage](#usage) 
- [Credits](#credits) 
- [License](#license)
## Installation 
* ${data.install}
## Usage
* ${data.usingRepo}
## Credits
* ${data.userName} 
* ${data.email}
${image(data.image)}

## License
${license(templateData.license)}            
## How to Contribute 
* ${data.contribute}`
}