const express = require('express');
const router = express.Router();
const onSocks = require('../handlers/socks');

router.route('/')
  .post(onSocks.store)
  .get(onSocks.all)

router.route('/:id')
  .get(onSocks.show)
  .put(onSocks.update)
  .delete(onSocks.delete)

module.exports = router;
