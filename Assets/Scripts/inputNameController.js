#pragma strict

var style:GUISkin;
static var playerName = "";
var checkname: boolean = false;


function Start () {

}

function Update () {

}

function OnGUI(){
	
	//a label with an embedded image
	//GUI.DrawTexture(Rect(0,0,851,315),logo);
	
	GUI.Label(Rect(Screen.width/2-100, Screen.height/2,200,30), "Enter Your Name:");
	playerName = GUI.TextField(Rect(Screen.width/2 + 20,Screen.height/2,200,25),	playerName,40);
	
	if(playerName != "" && GUI.Button(Rect(Screen.width/2 -75,Screen.height/2 + 120,150,50),"Start")){
					
			Application.LoadLevel(2);
		
		}
	
	
	

	

}