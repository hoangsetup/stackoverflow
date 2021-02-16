const shelljs = require("shelljs")

if (!shelljs.which("serve")) {
  shelljs.echo("'serve' is missing, please run 'npm ci'")
  process.exit(1)
}

shelljs.exec("serve -s build -l 3000")
