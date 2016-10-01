'use strict';

const rev = require('../reverse_text');

function ReverseTextController() {}

ReverseTextController.prototype.reverseText = (req, res) => {
  let text = req.query.text;
  res.json({
    processed_at: new Date(),
    text: rev(text)
  });
};

module.exports = new ReverseTextController();
