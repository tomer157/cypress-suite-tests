// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'


const xlsx = require('node-xlsx').default; 
const fs = require('fs'); // for file
const path = require('path'); // for file path
module.exports = (on, config) => {
   on('task', { parseXlsx({ filePath }) 
   { return new Promise((resolve, reject) =>
     { try 
      {
         const jsonData = xlsx.parse(fs.readFileSync(filePath)); 
         resolve(jsonData);
         } catch (e) 
         {
            reject(e);
         } });
       }}); } 
// Alternatively you can use CommonJS syntax:
// require('./commands')
