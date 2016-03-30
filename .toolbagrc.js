'use strict'

const StatsCollector = require('toolbag-plugin-stats-collector')
const UdpReporter = require('toolbag-plugin-udp-reporter')

module.exports = (defaults, done) => {
  done(null, {
    plugins: [
      {
        plugin: UdpReporter,
        options: {
          id: 'udp reporter',
          socketType: 'udp4',
          port: 5001,
          host: 'localhost'
        }
      },
      {
        plugin: StatsCollector,
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
