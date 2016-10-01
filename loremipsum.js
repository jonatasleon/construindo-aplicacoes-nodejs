/**
 * loremipsum.js
 *
 * Faz uma requisição na api `http://loripsum.net/api` e
 * cria um arquivo com o nome e a quantidade de parágrafos
 * especificados
 *
 * Jonatas Leon, 3 de Agosto de 2016
 *
 */
'use strict';

const http = require('http');
const fs = require('fs');

let fileName = String(process.argv[2] || '').replace(/[^a-z0-9\.]/gi, '');
let numberParagraphs = String(process.argv[3] || '').replace(/[^\d]/g, '');

const USAGE = 'USO: node loremipsum {fileName} {numberParagraphs}';

if (!fileName || !numberParagraphs) {
  return console.log(USAGE);
}

http
  .get('http://loripsum.net/api/' + numberParagraphs, function(res) {
    let text = '';

    res.on('data', chunk => text += chunk);
    res.on('end', () => {
      fs.writeFile(fileName, text, () => {
        console.log(`Arquivo ${fileName} pronto!`);
      });
    });
  })
  .on('error', e => console.log('Got error: ' + e.message));
