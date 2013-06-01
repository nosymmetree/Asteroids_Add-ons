#pragma strict

function Start () {

}

function Update () {


//enable borders using the borders function in BorderController
		borderController.EnableBorders(transform);
	

		transform.Rotate(Vector3.forward * -100 * Input.GetAxis("Horizontal") * Time.deltaTime);
		
		
		if (Input.GetKey(KeyCode.Space)){
				
					transform.Translate(Vector3.up * playerController.turboSpeed * Input.GetAxis("Vertical") * Time.deltaTime);
				
				}else{
				
					transform.Translate(Vector3.up * playerController.normalSpeed * Input.GetAxis("Vertical") * Time.deltaTime);	
				
				}
		
		

}