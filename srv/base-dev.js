'use strict'

var opts = {
  mesh: {
    base: true
  }
}

require('seneca')()
  .use('mesh', opts.mesh)
