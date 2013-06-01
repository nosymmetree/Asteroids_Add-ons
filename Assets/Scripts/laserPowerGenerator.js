#pragma strict

var powerLaser:Rigidbody;

function Start () {

	//invoke repeating
	InvokeRepeating("createPower", 20.0,20.0);

}

function createPower(){
	
	//position of powerup, Rightmost, y = 0, z = 1, rotation 0
	Instantiate(powerLaser,Vector3(borderController.rightMost,0,2),Quaternion.identity);

}

function Update () {

	

}