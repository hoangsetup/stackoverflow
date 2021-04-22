import newrelic from 'newrelic'

class Controller {
  index() {
    // some stuff here
    newrelic.incrementMetric('hello', 1)
  }
}

export default new Controller()

