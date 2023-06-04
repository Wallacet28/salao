<!DOCTYPE html>
<html>
<head>
	<title>Exibir Dados do Formulário</title>
</head>
<body>

<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$nome = $_POST['nome'];
	$email = $_POST['email'];
	$telefone = $_POST['telefone'];
	$data = $_POST['data'];
	$hora = $_POST['hora'];
	$servico = $_POST['servico'];
	$mensagem = $_POST['mensagem'];

	echo "<h1>Dados do Formulário</h1>";
	echo "<p>Nome: $nome</p>";
	echo "<p>Email: $email</p>";
	echo "<p>Telefone: $telefone</p>";
	echo "<p>Data: $data</p>";
	echo "<p>Hora: $hora</p>";
	echo "<p>Serviço: $servico</p>";
	echo "<p>Mensagem: $mensagem</p>";
}
?>

</body>
</html>