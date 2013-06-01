#pragma strict

function Start () {

	transform.position.y = Random.Range(borderController.topMost ,borderController.bottomMost);

}

function Update () {

	//calling the function EnableBorders from the script borderController
	borderController.EnableBorders(this.transform);

	//random movement horizaontally and vertically
	transform.Translate(Vector3.right * 10 * Time.deltaTime);
}

