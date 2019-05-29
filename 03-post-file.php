<?php
print_r($_FILES);
$fileInfo = $_FILES["upFile"];
$fileName = $fileInfo["name"];
$filePath = $fileInfo["tmp_name"];
echo $fileName;
echo "<br>";
echo $filePath;

//将上传的文件移动
//两个参数，第一个是原始路径，第二个是新的路径，后面拼接文件名称，用.拼接，不能用+
/* 新的路径的格式为
同级：./文件夹名/.文件名
上级：../文件夹名/.文件名
*/
move_uploaded_file($filePath, "./images/" . $fileName);
