#pragma strict


private var horizontalSpeed:int=0;
private var verticalSpeed:int=0;

// materials array for the asteroid
var asteroidMaterial:Material[];

var blastSounds:AudioClip[];



function Start () {

	horizontalSpeed = Random.Range(-10,10);
	verticalSpeed = Random.Range(-10,10);

}

function Update () {
	
	//manipulating the mvement according to the tag
	if (this.tag != "explode") {
		//random movement horizaontally and vertically
		transform.Translate(Vector3.up * horizontalSpeed * Time.deltaTime);
		transform.Translate(Vector3.right * verticalSpeed * Time.deltaTime);
		
		//calling the function EnableBorders from the script borderController
		borderController.EnableBorders(this.transform);
	} else {
		transform.localScale += Vector3(5, 5, 0) * Time.deltaTime;
	}
}

// a function for elements to move randomly
function moveRandom()
{


	horizontalSpeed = Random.Range(-10,10);
	verticalSpeed = Random.Range(-10,10);

}

function	OnTriggerEnter(other:Collider){
	
	// stop here if it's not an asteroid
	if (this.tag == "explode") return;
	
	if(other.tag == "laser") {
				
		Destroy(other.gameObject);
		playerController.laserHits++;
		
		Split();
		this.tag = "explode";
		this.renderer.material = asteroidMaterial[1];
		Invoke("RemoveFromScene", 0.2);
		AudioSource.PlayClipAtPoint(blastSounds[ Random.Range(0,blastSounds.Length)], transform.position,1);
	
	}
	
	if(other.tag == "spaceship") {
				
		
		Split();
		this.tag = "explode";
		playerController.health = playerController.health - 3;
		this.renderer.material = asteroidMaterial[1];
		Invoke("RemoveFromScene", 0.2);
		AudioSource.PlayClipAtPoint(blastSounds[ Random.Range(0,blastSounds.Length)], transform.position,1);
	
	}
	
	
		
	//here i need the code to make the asteroids change directions when they collide
	if (other.gameObject.tag == "asteroid")
	{
	var otherAsteroidController:asteroidController;
		otherAsteroidController = other.gameObject.GetComponent("asteroidController");
		otherAsteroidController.moveRandom();
	}
}

//
function RemoveFromScene() {
	Destroy(gameObject);
}


function Split() {
	if (transform.localScale == Vector3(1, 1, 1)) return;
	
	for (var count = 0; count < 3; count++) {
		var asteroidMini = Instantiate(this.rigidbody, transform.position, Quaternion.identity);
		asteroidMini.transform.localScale = Vector3(1, 1, 1);
	}
}