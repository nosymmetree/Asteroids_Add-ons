#pragma strict

function Start () {

}

function Update () {

		//rotation of the background
		transform.Rotate(Vector3.up * -3 * Input.GetAxis("Horizontal") * Time.deltaTime);
		
		//speed / turbo speed while holding space
		if (Input.GetKey(KeyCode.Space)){
		
			transform.Translate(Vector3.right * playerController.turboSpeed/10 * Input.GetAxis("Vertical") * Time.deltaTime);
		
		}else{
		
			transform.Translate(Vector3.right * playerController.normalSpeed/10 * Input.GetAxis("Vertical") * Time.deltaTime);	
		
		}
		

}