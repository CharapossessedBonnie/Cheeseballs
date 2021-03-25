function preload(){
    powderImg = loadImage("Images/PowdertheCheeseball.jpg");
    forest1 = loadImage("Images/ForestBackground1.jpg");
    forest2 = loadImage("Images/ForestBackground2.jpg");

}

function setup(){
    createCanvas(1500, 700);



    powder = createSprite(450, 450, 10, 10);
    powder.addImage(powderImg);
    powder.scale = 0.2;

}

function draw(){
    background(forest1);

    if(keyDown('w')){
        powder.y = powder.y-2;
    }
    if(keyDown('a')){
        powder.x = powder.x-2;
    }
    if(keyDown('s')){
        powder.y = powder.y+2;
    }
    if(keyDown('d')){
        powder.x = powder.x+2;
    }

    if(powder.x > 1500){
        background(forest2);

        powder1 = createSprite(450, 450, 10, 10);
        powder1.addImage(powderImg);
        powder1.scale = 0.2;

        powder.destroy();
    }


    drawSprites();
}