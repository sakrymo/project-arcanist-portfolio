const readline = require('readline')
const path = require('path')
const execSync = require('child_process').execSync
const { spawnSync } = require('child_process')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// rl.question('Filename:', filename => {
//   // const ext = path.extname(filename).substring(1) || 'mp4'
//   // const fname = path.basename(filename, path.extname(filename) || '.mp4')

//   // console.log(ext)
//   // console.log(fname)

//   execSync('ffmpeg -i input.mp4 -t 5 -c:v libx265 -preset veryslow -r 30 -an -vf scale=808x632:flags=lanczos:force_original_aspect_ratio=increase,crop=808:632 output-twenty.mp4', (err, stdout, stderr) => {
//     console.log(err)
//     console.log(stderr)
//     console.log(stdout)
//   })
// })

// rl.question('Filename:', filename => {
//   // const ext = path.extname(filename).substring(1) || 'mp4'
//   // const fname = path.basename(filename, path.extname(filename) || '.mp4')

//   // console.log(ext)
//   // console.log(fname)
//   spawnSync('ffmpeg -i input.mp4 -t 5 -c:v libx265 -preset veryslow -r 30 -an -vf scale=808x632:flags=lanczos:force_original_aspect_ratio=increase,crop=808:632 output-twenty.mp4', ['test'], { shell: true }
//   )
// })

spawnSync('ffmpeg -i input.mp4 -t 5 -c:v libx265 -preset veryslow -r 30 -an -vf scale=808x632:flags=lanczos:force_original_aspect_ratio=increase,crop=808:632 output-twenty.mp4', ['test'], { shell: true })
