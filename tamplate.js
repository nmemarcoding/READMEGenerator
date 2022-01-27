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
## License
* ${data.license}

## Features
    
If your project has a lot of features, list them here.
    
## How to Contribute
* ${data.contribute}
## Tests
* ${data.test}`
}