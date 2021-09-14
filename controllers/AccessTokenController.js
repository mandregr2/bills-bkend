const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');


const getSecret = (req, res) =>{
   const accessTokenSecret = 'praticaProfissional';
   return accessTokenSecret;
}

module.exports = {
   getSecret,
}