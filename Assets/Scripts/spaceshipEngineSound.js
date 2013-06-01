#pragma strict

var spaceshipSound:AudioClip;

var pitch : float;

var timeToDecrease = 5;


function Start () {
		
		GetComponent(AudioSource).clip = spaceshipSound;
		GetComponent(AudioSource).Play();
		audio.loop = true;
		audio.volume = 0.5;
		audio.pitch = 1;

}

function Update () {

		if(Input.GetKey(KeyCode.UpArrow)){
			
       		 audio.pitch += Time.deltaTime*0.5;
		
		}else if(Input.GetKey(KeyCode.Space)&&Input.GetKeyDown(KeyCode.UpArrow)){
		
			audio.pitch = 4;
		
		}else{
		
			audio.pitch = 1;
			
		
		}

		
		
}