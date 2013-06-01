#pragma strict
private var horizontalSpeed:int=3;
private var verticalSpeed:int=3;

var bossHealth:int= 10;

// materials array for the asteroid
var asteroidMaterial:Material[];

var blastSounds:AudioClip[];



function Start () {


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
	
	
	if(other.tag == "laser") {
			
		bossHealth--;
		playerController.laserHits++;
		Destroy(other.gameObject);

		
		if(bossHealth <= 0){
		
			this.renderer.material = asteroidMaterial[1];
			Invoke("RemoveFromScene", 0.2);
			
			Application.LoadLevel(8);

			
			
		}
		
		AudioSource.PlayClipAtPoint(blastSounds[ Random.Range(0,blastSounds.Length)], transform.position,1);
	
	}
	
	if(other.tag == "spaceship") {
	
		//this.renderer.material = playerController.playerMaterial[1];			
		AudioSource.PlayClipAtPoint(blastSounds[ Random.Range(0,blastSounds.Length)], transform.position,1);
		yield WaitForSeconds(1);
		Application.LoadLevel(8);

	
	}
	
}

function RemoveFromScene() {
	Destroy(gameObject);
}


function OnGUI(){
 	
 
 	
	GUI.Label(Rect(0,40,150,50),"Boss Health: "+bossHealth);
	
	

}
