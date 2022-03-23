<?php 

//Incluir a conexão
include("conexao.php");

//Obter dados
$obterDados = file_get_contents("php://input");

//Extrair os dados no JSON
$extrair = json_decode($obterDados);

//Separar os dados do JSON
$nomeCurso = $extrair->cursos->nomeCurso;
$valorCurso = $extrair->cursos->valorCurso;

//SQL
$sql = "INSERT INTO cursos (nomeCurso, valorCurso) VALUES ('$nomeCurso', '$valorCurso')";
mysqli_query($conexao, $sql);

//Exportar os dados cadastrados
$curso = [
    'nomeCurso' => $nomeCurso,
    'valorCuros' => $valorCurso
];

json_encode(['cursos'=>$cursos]);

?>