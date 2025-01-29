sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    pizza.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    info.startCountdown(3)
})
let pizza: Sprite = null
scene.setBackgroundColor(3)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . a a a a . . . . . . 
    . . . . a a d d d d a a . . . . 
    . . . a d d d d d d d d a . . . 
    . . a d d d d d d d b d d a . . 
    . a d d d d b d d d d d d d a . 
    . a b d d d d d b b d d d d a . 
    . a b b d d d d d d d d d d a . 
    . a c b b b d d d d d d d b a . 
    . . a c c b b b b b b b b a . . 
    . . . a a a a a a a a a a . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
pizza = sprites.create(img`
    . . . . a a a a a a a . . . . . 
    . . . a a a a a a a a a . . . . 
    . . a a a a a a a a a a a . . . 
    . a a a a a a a a a a a a a . . 
    . a a a a a a a a a a a a a . . 
    . a a a a 1 a a a 1 a a a a . . 
    . a a a 1 1 1 a 1 1 1 a a a . . 
    . a a 1 1 a 1 1 1 a 1 1 a a . . 
    . a a a 1 1 1 1 1 1 1 a a a . . 
    . . a a a 1 1 a 1 1 a a a . . . 
    . a 1 1 a a a a a a a 1 1 a . . 
    . . a a 3 a 1 1 1 a 3 a a . . . 
    . . . a a 3 a 3 a 3 a a . . . . 
    . . . a 3 a 3 a 3 a 3 a . . . . 
    . . . a 1 1 a . a 1 1 a . . . . 
    . . . . a a . . . a a . . . . . 
    `, SpriteKind.Food)
