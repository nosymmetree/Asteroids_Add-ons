#pragma strict

// laser speed variable
static var laserSpeed:int=30;
// the power up sound if it is destroyed by the laser
var powerDestroyedSound:AudioClip;
// the sound of when the laser hits the asteroid
//var asteroidHitSound:AudioClip;

var miniAsteroidPrefab:Rigidbody;



function Start () {

	


}

function Update () {
	
	//all the bullet needs is forward motion - the KeyCode to trigger the bullets is set in the playerController script
	transform.Translate(Vector3.up * laserSpeed * Time.deltaTime);
	
}

// when the laser exits the scene
function OnBecameInvisible(){
	
	//tried this line to determine the shots missed
	//playerController.laserMiss++;
	
	Destroy(this.gameObject);
	
	

}

function	OnTriggerEnter(other:Collider){

	// I created a Split() function in the asteroidController script and replaced and achieved the same results using less code
	
	/*if(other.gameObject.tag == "asteroid"){
		
		//creates s3 small asteroids
		Instantiate(miniAsteroidPrefab, transform.position, Quaternion.identity);
		Instantiate(miniAsteroidPrefab, transform.position, Quaternion.identity);
		Instantiate(miniAsteroidPrefab, transform.position, Quaternion.identity);
	
		//destroys bullet
		Destroy(this.gameObject);		
		
		//destroys whatever it touches, the asteroid
		Destroy(other.gameObject);
				
		//increments the score every time a bullet hits an asteroid
		playerController.laserHits++;
		
		//AudioSource.PlayClipAtPoint(asteroidHitSound, transform.position, 0.4);
	
	}
	
	// this is the code i was trying to declare the shots missed
	/*else{
	
		playerController.laserMiss++;
	
	}*/
	
	
	
	
	
	if(other.gameObject.tag == "power"){
	
		//destroys bullet
		Destroy(this.gameObject);
		
		//destroys whatever it touches, the asteroid
		Destroy(other.gameObject);
		AudioSource.PlayClipAtPoint(powerDestroyedSound, transform.position, 1);
			
		}
	
	//this code was cmodified and scripted in the asteroid controller using the laser tag
	/*if(other.gameObject.tag == "miniAsteroid"){
	
		//destroys bullet
		Destroy(this.gameObject);
		
		//increments the score every time a bullet hits an asteroid
		playerController.laserHits++;
		
		Destroy(other.gameObject);
		AudioSource.PlayClipAtPoint(powerDestroyedSound, transform.position, 0.4);
			
		}*/
	
	
	

}	