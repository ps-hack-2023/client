# client
The pretty side of things

# skeleton 
## TODO: delete and add useful stuff here fr fr

setup using: 
 - https://neutrinojs.org/packages/react/

neutrinojs makes things simple *knock on wood* I haven't touched a react frontend for a few years, this seems like something the kids would use nowadays

# requirements
To run this you will need a whole lot of stuff, i.e.:
- npm 

# installation
The process is very difficult, you need to run:
`npm install`

# usage
This step is extremely difficult, please run:
`npm start`

# development

## VSCode
If using in a multi-root workspace, i.e. with multiple repos, use this in your `.vscode/settings.json`
```json
{
    "eslint.options": {
        "configFile": ".eslintrc.js"
    },
    "eslint.workingDirectories": [
        "./client"
    ],
    "typescript.validate.enable": false,
    "javascript.validate.enable": false
}
```
Reccomended extensions:
- ESLint

## Building

To generate `build` folder with the final static files use:
`npm run build`

