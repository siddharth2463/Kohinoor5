class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
            player1=createSprite(1000,100)
   player1.addAnimation("player1",playerimg)
   player2=createSprite(100,100)
   player2.addAnimation("player2",playerimg2)
   player1.scale=0.5;
   player2.scale=0.5;
   players=[player1,player2]
       bush1=createSprite(200,200,10,10)
       bush1.addImage(bushImage)
       bush2=createSprite(900,500,10,10)
       bush2.addImage(bushImage)
       bush3=createSprite(900,200,10,10)
       bush3.addImage(bushImage)
       bush4=createSprite(100,500,10,10)
       bush4.addImage(bushImage)
       bush1.scale=0.6
       bush2.scale=0.6
       bush3.scale=0.6
       bush4.scale=0.6
       bulletGrp1=new Group()
       bulletGrp2=new Group()
        }
        play(){
            form.hide()
            drawSprites()
            Player.getPlayerInfo()
            Player.getBullet1()
            player.getPos()
            this.shoot1()
            Player.getBullet2()
            this.shoot2()
     
            if(allPlayers!==undefined){
                var index=0
                for(var plr in allPlayers){
                index=index+1
                players[index-1].x=allPlayers[plr].x
                players[index-1].y=allPlayers[plr].y
                if(index===player.index){
                    fill("red")
                }
                else(fill("black"))
                textSize(20)
                text(allPlayers[plr].name,players[index-1].x-100,players[index-1].y+300)
                }
            }
            if(keyDown(LEFT_ARROW)&& player.index!==null){
                if(player.index===1){
                    players[0].x-=3
                    player.updatePos(players[0].x,players[0].y)
                    player.getPos()
                }
                if(player.index===2){
                    players[1].x-=3
                    player.updatePos(players[1].x,players[1].y)
                    player.getPos()
                }
            }
            if(keyDown(RIGHT_ARROW)&& player.index!==null){
                if(player.index===1){
                    players[0].x+=3
                    player.updatePos(players[0].x,players[0].y)
                    player.getPos()
                }
                if(player.index===2){
                    players[1].x+=3
                    player.updatePos(players[1].x,players[1].y)
                    player.getPos()
                }
            }
            if(keyDown("space")){
                if(player.index===1){
                    this.spawnBullet1()
                     flag1=true
                }
                else if(player.index===2){
                    this.spawnBullet2()
                    flag2=true
                }
                player.getBullet()
                var bullet=createSprite(player.Bx,player.By)
            }
        }
        shoot1(){
            if(allBullets1!==undefined&& player.index===2){
                for(var Bcount in allBullets1){
                    var bullet=createSprite(0,0)
                    bullet.x=allBullets1[Bcount].Bx
                    bullet.y=allBullets1[Bcount].By
                    bullet.addImage(bullet2Img)
                    bullet.velocityX=-3
                }
            }
        }
        shoot2(){
            if(allBullets2!==undefined&& player.index===1){
                for(var Bcount in allBullets2){
                    var bullet=createSprite(0,0)
                    bullet.x=allBullets2[Bcount].Bx
                    bullet.y=allBullets2[Bcount].By
                    bullet.addImage(bullet1Img)
                    bullet.velocityX=+3
                }
            }
        }
        spawnBullet1(){
            var bullet=createSprite(player.x,player.y)
            bullet.addImage(bullet1Img)
            bullet.x=player.x
            bullet.y=player.y
            bullet.velocityX=-2
            bullet.lifetime=200
            bulletGrp1.add(bullet)
            player.updateBullet(bullet.x,bullet.y)
            player.count+=1
        }
        spawnBullet2(){
            var bullet=createSprite(player.x,player.y)
            bullet.addImage(bullet2Img)
            bullet.x=player.x
            bullet.y=player.y
            bullet.velocityX=+2
            bullet.lifetime=200
            bulletGrp2.add(bullet)
            player.updateBullet(bullet.x,bullet.y)
            player.count+=1
        }
    }