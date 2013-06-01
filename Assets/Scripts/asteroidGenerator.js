#pragma strict

var asteroidPrefab:Rigidbody;

var firstWave:int;
var secondWave:int;
var thirdWave:int;
var fourthWave:int;
static var level:int;
static var levelcount:int;


var counter:int=0;

function createAsteroids(numberOfAsteroids:int){

	
	var xpos:int=0;
	var ypos:int=0;
	var zpos:int=2;
	
	for(counter = 0; counter<numberOfAsteroids; counter++){
	
		xpos = Random.Range(borderController.leftMost, borderController.rightMost);
		ypos = Random.Range(borderController.bottomMost, borderController.topMost);
		
		Instantiate(asteroidPrefab, Vector3(xpos,ypos,zpos), Quaternion.identity);
		
		
	}

}

function Start () {

	level = Application.loadedLevel - 1;

	createAsteroids(firstWave);
	yield WaitForSeconds(3);
	createAsteroids(secondWave);
	yield WaitForSeconds(5);
	createAsteroids(thirdWave);
	yield WaitForSeconds(10);
	createAsteroids(fourthWave);
	

}

function Update () {

	if (GameObject.FindGameObjectsWithTag("asteroid").Length == 0) {
				
		level = Application.loadedLevel;
		levelcount = level + 1;  
				
		Application.LoadLevel(levelcount);
		print(levelcount);
				
	}


}

