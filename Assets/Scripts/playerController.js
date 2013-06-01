#pragma strict

//PLAYER CONTROLLER (ROTATION + FORWARD OR BACKWARDS)

//public var playerName;

static var normalSpeed:int = 10;
static var turboSpeed:int = 30;

//this is the slot for the laser prefab
var laserPrefab:Rigidbody;

//start time initiallized to float and set to zero
var startTime:float=0.0;
var currentTime:float=0.0;
var elapsedTime:int=0;

public var powerSound:AudioClip;

public var powerLaserSound:AudioClip;  

// this will be used to see how many shots are fired
static var laserShots: int = 0;

//a static var is declared because will be programmed with another script inside the game
static var laserHits:int = 0;

//Shots Missed
static var laserMiss:int = 0;

//health
static var health:int = 10;

// this gameover variable is set to false so when it is true them game will be over...
var gameover:boolean = false;

// this is an array of sounds created for the laser
public var laserSounds:AudioClip[];

var playerMaterial:Material[];



function Start () {
	
	// starting the time
	startTime = Time.time;
	
	//resetting all these parameters at start
	health = 10;
	laserHits = 0;
	laserMiss = 0;
	laserShots = 0;
	bulletController.laserSpeed = 30;
	
	

}

function Update () {

	currentTime = Time.time;
	
	if (elapsedTime < 60){
	
		
		//il-hin li ghadda nahdmuh hekk:
		elapsedTime = currentTime - startTime;
	

		//enable borders using the borders function in BorderController
		borderController.EnableBorders(transform);
	
		//rotation of the player
		transform.Rotate(Vector3.forward * -100 * Input.GetAxis("Horizontal") * Time.deltaTime);
		
		//speed / turbo speed while holding space
		if (Input.GetKey(KeyCode.Space)){
		
			transform.Translate(Vector3.up * turboSpeed * Input.GetAxis("Vertical") * Time.deltaTime);
			print(normalSpeed);
		
		}else{
		
			transform.Translate(Vector3.up * normalSpeed * Input.GetAxis("Vertical") * Time.deltaTime);	
		
		}
		
		//fire at left apple key
		if(Input.GetKeyDown(KeyCode.LeftControl)){
			
			//create a bullet at th position of the spaceship
			Instantiate(laserPrefab,transform.position,transform.rotation);
			//the laser shot counter 
			laserShots++;
			//audiosource for the laser being shot
			GetComponent(AudioSource).clip = laserSounds[ Random.Range(0,laserSounds.Length)];
			GetComponent(AudioSource).Play();
		
		}
		
		
	
	}else{
		
		gameover = true;
		//game over
		print("game over");
	
	}
	
	if (health <= 0 || elapsedTime == 60) {
		
		Application.LoadLevel(8);
		
	}
	
	
}

function OnGUI(){
 	
 	//calculating shots missed
 	laserMiss = laserShots - laserHits;
 	
	GUI.Label(Rect(0,5,150,50),"Elapsed Time: "+elapsedTime);
	GUI.Label(Rect(200,5,150,50),"Score: "+laserHits);
	GUI.Label(Rect(400,5,150,50),"Health: "+health);
	GUI.Label(Rect(600,5,150,50),"Shots Fired: "+laserShots);
	GUI.Label(Rect(800,5,150,50),"Shots Missed: "+laserMiss);
	GUI.Label(Rect(1000,5,150,50),"Player Name: "+inputNameController.playerName);
	GUI.Label(Rect(1200,5,150,50),"Level: "+asteroidGenerator.level);
	
	

}

function OnTriggerEnter(other:Collider){
	
	if (other.gameObject.tag == "asteroid"){
		
		//reduce health
		health = health - 3;
	
	}
	
	if (other.gameObject.tag == "miniAsteroid"){
		
		//reduce health
		health = health - 1;
	
	}
	
	if (other.gameObject.tag == "boss"){
		
		this.renderer.material = playerMaterial[1];
	
	}
	
	if(other.gameObject.tag == "power"){
	
		
		//destroys whatever it touches, the power
		Destroy(other.gameObject);
		
		//increment the health if the health is less than 100
		if(playerController.health < 100){
			
			//increments the health by 10 each time a bullet hits the power up
			playerController.health+=10;	
			
		}
		
		
			
		
		
		// the sound that will play when the player hits the power up
		//GetComponent(AudioSource).clip = powerSound;
		//GetComponent(AudioSource).Play();
		
		AudioSource.PlayClipAtPoint(powerSound, transform.position,0.5);
		
	}
	

	if (health <= 0 || elapsedTime == 60) {
		
		//game over
		Application.LoadLevel(8);
		
	}
	
	if(other.gameObject.tag == "powerlaser"){
			
			bulletController.laserSpeed = 120;
			Destroy(other.gameObject);
			AudioSource.PlayClipAtPoint(powerLaserSound, transform.position,0.5);
			
		
	}
			
	


}



