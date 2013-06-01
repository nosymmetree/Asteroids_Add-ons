#pragma strict

var power:Rigidbody;

function Start () {

	//invoke repeating
	InvokeRepeating("createPower", 1.0,20.0);

}

function createPower(){
	
	//position of powerup, Rightmost, y = 0, z = 1, rotation 0
	Instantiate(power,Vector3(borderController.rightMost,0,1),Quaternion.identity);

}

function Update () {

	

}