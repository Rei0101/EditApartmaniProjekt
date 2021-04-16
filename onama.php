<html>
<head>
</head>
<body>
<?php

if(isset($_POST["ime"]) || isset($_POST["prezime"]) || isset($_POST["mail"])){
		$ime = $_POST["ime"];
		$prezime = $_POST["prezime"];
		$mail = $_POST["mail"];
		
		
		$con = mysqli_connect("localhost", "root", "", "zaposlenicibp");

		$ubaci = "INSERT INTO noveprijave(ime, prezime, mail) VALUES('$ime', '$prezime', '$mail')";
		
		$result = mysqli_query($con, $ubaci);
	
		mysqli_close($con);
}

?>
</body>
</html>