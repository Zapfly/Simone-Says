import Phaser from 'phaser';
import face from './Assets/My Face.png'


const titleScreen = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    physics: {
        default: 'arcade'
    },
    width: 800,
    height: 600,
    scene: [{
        preload: preload,
        create: create
    }]
};

function preload () {
    this.load.image('face', face)
};

function create () {
    console.log(this.physics)
    const face = this.physics.add.image(400, 300, 'face');
    // face.anchor.setTo(0.5)
    face.setScale(0.25)
    face.body.collideWorldBounds=true
    face.body.setBounce(1, 1)
    const randomVelo = () => {
        return (Math.random() - 0.5) * 200;
    }

    face.setVelocityX(randomVelo());
    face.setVelocityY(randomVelo())
};

const game = new Phaser.Game(titleScreen);

console.log(game)
