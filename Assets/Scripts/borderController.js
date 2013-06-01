#pragma strict

static var leftMost: int;
static var rightMost: int;
static var topMost: int;
static var bottomMost: int;


function Start () {

}

function Update () {

	//calculate borders
	
	//leftMost border 
	leftMost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).x;
	
	//rightMost the x position of the right most border RELATIVE to the cener.
	rightMost = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,0,0)).x;
	
	//topMost the y position of the 
	topMost = Camera.main.ScreenToWorldPoint(Vector3(0, Screen.height, 0)).y;
	
	//bottomMost
	bottomMost = Camera.main.ScreenToWorldPoint(Vector3(0, 0, 0)).y;
}


static function EnableBorders(object:Transform){
	
	//if the object leaves the screen to the left
	if(object.position.x < leftMost){
	
		object.position.x = rightMost;
	
	}
	
	//if object leaves the screen to the right
	if(object.position.x > rightMost){
	
		object.position.x = leftMost;
	
	}
	
	//if object leaves the screen to the top
	if(object.position.y > topMost){
	
		object.position.y = bottomMost;
	
	}
	
	if(object.position.y < bottomMost){
	
		object.position.y = topMost;
	
	}	
			

}