function loadImages(){
  succession = loadImage("https://www.bungie.net/common/destiny2_content/icons/f189251cfb9815df1f3f6063867d0957.jpg");
  trustee = loadImage("https://www.bungie.net/common/destiny2_content/icons/3c02f8982f3f444a84a961572669213b.jpg");
  legacysOathCloak  = loadImage("https://www.bungie.net/common/destiny2_content/icons/c1422e3664478a35b960bdb801001260.jpg");
  legacysOathStrides = loadImage("https://www.bungie.net/common/destiny2_content/icons/f1fdb2cbbbebc0bdcc38c7b02c1f9b36.jpg");
  legacysOathGrips = loadImage("https://www.bungie.net/common/destiny2_content/icons/f4bac3f5c3a735dd0788539600fb6c04.jpg");
  legacysOathBond = loadImage("https://www.bungie.net/common/destiny2_content/icons/7cc19cbefc988499b0faac30ea1fd192.jpg");
  legacysOathBoots = loadImage("https://www.bungie.net/common/destiny2_content/icons/434ddd1074f935e0a975ec8929efd8be.jpg");
  legacysOathGloves = loadImage("https://www.bungie.net/common/destiny2_content/icons/a7092ad81df38b5dd568d4176cee3001.jpg");
  legacysOathMark = loadImage("https://www.bungie.net/common/destiny2_content/icons/142e7b6946a3b29386931d5c613a5b9d.jpg");
  legacysOathGreaves = loadImage("https://www.bungie.net/common/destiny2_content/icons/c02578408e785b7e48dd4bc8486b346f.jpg");
  legacysOathGauntlets = loadImage("https://www.bungie.net/common/destiny2_content/icons/55947464ab5dc1974beec1c77d27ba56.jpg");
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadImages();
  bgimg = loadImage("Images/squared2.png");
  headerFontBold = loadFont("Fonts/NeueHaasDisplayBold.ttf");
  headerFont = loadFont("Fonts/NeueHaasDisplayRoman.ttf");
  bodyFont = loadFont("Fonts/AGaramondPro-Regular.otf");
  accentFont = loadFont("Fonts/Cromwell HPLHS.ttf");
  grid = width/10;
  ShadowOffset = grid/10;
  ScrollFactor = 0;
  selectedClass = "Hunter";
  selectedRaid = "dsc";
  selectedMode = "lootTable"
  menuOpen = false;
  MaxScrollDistance = -1;
}

function draw() {
  
  grid = width/10;
  ShadowOffset = grid/10;
  background(100);
  imageMode(CENTER);
  if(height>width)image(bgimg,width/2,height/2,(bgimg.width+200)/(bgimg.height/height),(bgimg.height+200)/(bgimg.height/height));
  else image(bgimg,width/2,height/2,(bgimg.width+200)/(bgimg.width/width),(bgimg.height+200)/(bgimg.width/width))
  if(selectedClass == "Hunter"&&selectedRaid == "dsc"&&selectedMode == "lootTable")dscHunterLoot();
  else if(selectedClass == "Warlock"&&selectedRaid == "dsc"&&selectedMode == "lootTable")dscWarlockLoot();
  else if(selectedClass == "Titan"&&selectedRaid == "dsc"&&selectedMode == "lootTable")dscTitanLoot();
  menu();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked(){
  //menuClickEvent(width/10);
}

function mousePressed(){
   menuClickEvent(width/10);
}

function mouseWheel(event) {
  ScrollFactor += event.delta/-5;
  if(ScrollFactor>0)ScrollFactor=0;
  if(ScrollFactor<(MaxScrollDistance*-1)&&MaxScrollDistance!=-1)ScrollFactor = MaxScrollDistance*-1;
}

function menuClickEvent(grid){
  if(mouseX>=0&&mouseY>=0&&mouseX<=grid&&mouseY<=grid)menuOpen = !menuOpen;
  else if(mouseX>=grid&&mouseY>=0&&mouseX<=grid*4&&mouseY<=grid)selectedClass = "Hunter";
  else if(mouseX>=grid*4&&mouseY>=0&&mouseX<=grid*7&&mouseY<=grid)selectedClass = "Warlock";
  else if(mouseX>=grid*7&&mouseY>=0&&mouseX<=grid*10&&mouseY<=grid)selectedClass = "Titan";
}

function menu(){
  rectMode(CORNER);
  fill(200);
  stroke(175);
  strokeWeight(grid/36);
  rect(0,0,grid,grid);
  stroke(125);
  strokeWeight(grid/12);
  line(grid/6,((grid/18)*5),grid-(grid/6),((grid/18)*5));
  line(grid/6,((grid/18)*9),grid-(grid/6),((grid/18)*9));
  line(grid/6,((grid/18)*13),grid-(grid/6),((grid/18)*13));
  strokeWeight(grid/36);
  stroke(175);
  fill(200);
  rect(grid,0,grid*3,grid);
  rect(grid*4,0,grid*3,grid);
  rect(grid*7,0,grid*3,grid);
  fill(125);
  textAlign(CENTER, CENTER);
  noStroke();
  textSize(grid/1.5);
  textFont(headerFont);
  text("Hunter",grid*2.5,grid/2);
  text("Warlock",grid*5.5,grid/2);
  text("Titan",grid*8.5,grid/2);
}

function testBase(){
  rectMode(CORNER);
  noStroke();
  fill(0);
  rect((width/10),((width/10)*2)+ScrollFactor,(width/10)*2,(width/10)*2);
  rect((width/10)*4,((width/10)*2)+ScrollFactor,(width/10)*2,(width/10)*2);
  rect((width/10)*7,((width/10)*2)+ScrollFactor,(width/10)*2,(width/10)*2);
  stroke(0,100);
  strokeWeight(width/100);
  fill(0,0,0,0)
  rect((width/10)+(width/100),((width/10)*2)+ScrollFactor+(width/100),((width/10)*2)-(width/100),((width/10)*2)-(width/100));
  imageMode(CORNER);
  image(succession,(width/10),((width/10)*2)+ScrollFactor,(width/10)*2,(width/10)*2)
  
}

function dscHunterLoot(){
  const boxScale = grid*2;
  MaxScrollDistance = 0;
  
  seperatorLine(1.15,grid/10);
  title("Security",2,grid/1.5);
  title("(First Encounter)",2.75,grid/2);
  seperatorLine(2.8,grid/10);
  
  item(trustee,1,3,boxScale);
  item(legacysOathCloak,4,3,boxScale);
  item(legacysOathStrides,7,3,boxScale);
  item(legacysOathGrips,1,6,boxScale)
}

function dscWarlockLoot(){
  const boxScale = grid*2;
  MaxScrollDistance = 0;
  
  seperatorLine(1.15,grid/10);
  title("Security",2,grid/1.5);
  title("(First Encounter)",2.75,grid/2);
  seperatorLine(2.8,grid/10);
  
  item(trustee,1,3,boxScale);
  item(legacysOathBond,4,3,boxScale);
  item(legacysOathBoots,7,3,boxScale);
  item(legacysOathGloves,1,6,boxScale)
}

function dscTitanLoot(){
  const boxScale = grid*2;
  MaxScrollDistance = 0;
  
  seperatorLine(1.15,grid/10);
  title("Security",2,grid/1.5);
  title("(First Encounter)",2.75,grid/2);
  seperatorLine(2.8,grid/10);
  
  item(trustee,1,3,boxScale);
  item(legacysOathMark,4,3,boxScale);
  item(legacysOathGreaves,7,3,boxScale);
  item(legacysOathGauntlets,1,6,boxScale)
}

function item(itemImage,posX,posY,scl){
  rectMode(CORNER);
  noStroke();
  fill(0);
  rect(grid*posX,grid*posY+ScrollFactor,scl,scl);
  stroke(0,100);
  strokeWeight(ShadowOffset);
  fill(0,0,0,0);
  rect((grid*posX)+ShadowOffset,(grid*posY)+ShadowOffset+ScrollFactor,scl-ShadowOffset,scl-ShadowOffset);
  imageMode(CORNER);
  image(itemImage,grid*posX,(grid*posY)+ScrollFactor,scl,scl);
}

function title(dispText,posY,textScl){
  fill(200,225,255);
  textAlign(CENTER, CENTER);
  noStroke();
  textSize(textScl);
  textFont(headerFont);
  text(dispText,width/2,(grid*posY)-(grid/2));
}

function seperatorLine(posY,scl){
  strokeWeight(scl);
  stroke(200,225,255);
  line(grid/5,grid*posY,width-(grid/5),grid*posY)
}