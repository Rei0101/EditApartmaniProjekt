<html>

<body>

<center><h1>HVALA NA PRIJAVI ZA POSAO!<br>VAŠA PRIJAVA JE PRIMLJENA U NAŠU BAZU PODATAKA I UZETI ĆEMO JE U OBZIR.</h1></center>
<?php

if(isset($_POST["ime"]) || isset($_POST["prez"]) || isset($_POST["tel"])){
		$ime = $_POST["ime"];
		$prez = $_POST["prez"];
		$tel = $_POST["tel"];
		
		
		$con = mysqli_connect("localhost", "root", "", "zaposlenici");
		$ubaci = "INSERT INTO noveprijave(ime, prez, tel) VALUES('$ime', '$prez', '$tel')";
		
		$result = mysqli_query($con, $ubaci);
		
		
		mysqli_close($con);
}

?>

</body>
</html>