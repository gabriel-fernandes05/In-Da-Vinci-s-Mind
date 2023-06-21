class sprite{
    constructor({position, dimensions}) {
        this.position = position
        this.whidth = dimensions.whidth
        this.height = dimensions.height
    }

    draw(){
        ctx.fillStyle = 'white'
        ctx.fillRect(this.position.X, this.position.Y, this.whidth, this.height)
    }
}

const player = new sprite({
    position:{
    X:100,
    Y: 0
},
 dimensions:{
    whidth:50, 
    height:150
}
})