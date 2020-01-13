<?
$CONNECT = mysqli_connect('host','userName','userPass','dataBaseName');
mysqli_query($CONNECT, "SET NAMES 'utf8' COLLATE 'utf8_general_ci'");
mysqli_query($CONNECT, "SET CHARACTER SET 'utf8'");
if ( !$CONNECT ) exit('MySQL error');
?>
