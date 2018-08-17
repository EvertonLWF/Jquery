<?php 
	// $p = $_POST;
	// $p['qt_nome'] = strlen($_POST['nome']);
	// echo json_encode($_POST);
	// echo json_encode($p);
$nome = $_POST['nome'];
$senha = $_POST['senha'];
$array = array('status'=>'');
if($nome == 'feijo' && $senha == '123'){
	$array['status']='OK';
}
echo json_encode($array);
?>