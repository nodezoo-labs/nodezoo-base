'use strict'

const plugins = require('toolbag-plugins')

module.exports = (defaults, done) => {
  done(null, {
    plugins: [
      {
        plugin: plugins.UdpReporter,
        options: {
          id: 'udp reporter',
          socketType: 'udp4',
          port: 5001,
          host: 'localhost'
        }
      },
      {
        plugin: plugins.StatsCollector,
        options: {
          enabled: true,
          period: 1000,
          eventLoopLimit: 30,
          features: {
            process: true,
            system: true,
            cpu: true,
            memory: true,
            gc: true,
            handles: true,
            requests: true,
            eventLoop: true,
            meta: {
              tags: [
                'base',
                'nodezoo'
              ]
            }
          }
        }
      }
    ]
  })
}
