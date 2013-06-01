#pragma strict



function Start () {
//print("test");

	if (Screen.fullScreen == true){
	  	Screen.SetResolution(1500,500,true,60);
	  	}else{
	  		
	  		Screen.SetResolution(1500,500, false,60);
	  	
	  	}
}

function Update () {

}
