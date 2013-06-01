#pragma strict

function Start () {

	transform.position.x = Random.Range(borderController.leftMost ,borderController.rightMost);

}

function Update () {

	//calling the function EnableBorders from the script borderController
	borderController.EnableBorders(this.transform);

	//random movement horizaontally and vertically
	transform.Translate(Vector3.down * 20 * Time.deltaTime);
}

