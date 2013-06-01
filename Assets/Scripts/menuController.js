#pragma strict

var logo:Texture2D;
var style:GUISkin;

function Start () {

}

function Update () {

}

function OnGUI(){
	
	//a label with an embedded image
	//GUI.DrawTexture(Rect(0,0,851,315),logo);
	
	if (GUI.Button(Rect(Screen.width/2-100,Screen.height/2 + 50,200,50),"New Game")){
	
		//start a new game by loading a new scene
		Application.LoadLevel(1);
	
	}
	
	// css style mathematics is used for the positioning and sizing of the buttons with the help of Screen.width/height
	if (GUI.Button(Rect(Screen.width/2 -75,Screen.height/2 + 120,150,50),"Exit")){
		
		Application.Quit();
		//start a new game by loading a new scene
		//Application.LoadLevel(1);
	
	}

}