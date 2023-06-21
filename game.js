const canvas = document.querySelectorAll('.canvas')
const ctx = canvas.getContext('2d');

const canvasWidth = 1024
const canvasHeight = 576

canvas.width = canvasWidth
canvas.height = canvasHeight 

let prevtime = 0 

animate()

function animate(){
    window.requestAnimationFrame(animate)

    ctx.fillStyle='black'
    ctx.fillRect(0,0, canvasWidth, canvasHeight)

    player.draw()

    let delta = (performance.now() - prevtime) / 1000
    let fps = 1 /delta

    prevtime = performance.now()
}