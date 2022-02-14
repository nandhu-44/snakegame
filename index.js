const app = require('express')()
const path = require('path')
const child = require('child_process')

app.get('/', function (req, res) {
    res.send('Your game should be up and running by now')
    const subprocess = runScript()
    res.set('Content-Type', 'text/plain');
    subprocess.stdout.pipe(res)
    subprocess.stderr.pipe(res)
  })

app.listen(3000, async()=>{
    console.log("Listening to port 3000")
})

function runScript(){
    return child.spawn('python', [
      "-u", 
      path.join(__dirname, 'main.py'),
      "--b", "..",
    ]);
}