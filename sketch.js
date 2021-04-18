//Create variables here
var dog,happyDog,foodStock,dogI,database
var foodS,foodGG
var x =20

function preload()
{
	//load images here
  dogI = loadImage("Dog.png");
  happyDog = loadImage("happydog.png");
}

function setup() {
	createCanvas(1000, 500);
  database = firebase.database();
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  dog = createSprite(750,250,50,50);
  dog.scale = 0.3;
  dog.addImage(dogI)
  feed = createButton("Feed the dog");
  feed.position(700,95);
  
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800,95);
 // addFood.mousePressed(addFoods)
  foodGGG = new Game();
 // foodGGG.getState();
}


function draw() {  
  background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(x-1);
  dog.addImage(happyDog)
}
foodGGG.display();
  drawSprites();
  //add styles here
  text("foodStock: "+foodStock , 100,100)

}
function readStock(data){
  foodS = data.val();
}

function writeStock(){


}
function feedDog(){
  dog.addImage(happyDog);

  foodGGG.update(foodGGG.getState()-1);
database.ref('/').update({
  Food: foodGGG.getState()
})
}
