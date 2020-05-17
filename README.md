# L C Mills Consulting Website
A static website hosted in S3

## Requirements
Built using NodeJs with dependencies managed using NPM

## Development
All dependencies can be installed using ```npm i```
[Grunt-bake](https://www.npmjs.com/package/grunt-bake) is used to assemble pages and [Webpack](https://webpack.js.org/) to create the publishable bundle

## Deployment
Deployment target is Amazon S3 which requires an account with access to the bucket. Running ```aws configure``` and adding the access key may be required.

The site must first be built locally by running ```npm run build```
Once built the contents of ```/dist``` are then publishable to S3 by running ```npm run deploy```
