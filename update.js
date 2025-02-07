module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: "git pull"
    }
  }, {
    method: "shell.run",
    params: {
      path: "app",
      message: "git pull"
    }
  }, {
    method: "shell.run",
    params: {
      venv: "env",                // Edit this to customize the venv folder path
      path: "app/rnd/autogpt_server",                // Edit this to customize the path to start the shell from
      message: [
        "poetry lock",
        "poetry config virtualenvs.in-project true",
        "poetry install",
        "poetry run prisma generate",
        "poetry run prisma migrate dev --name init",
      ]
    }
  },]
}
