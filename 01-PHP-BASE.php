<?php
//定义变量
$num =10;

//打印内容
echo $num;

//定义数组
$arr  = array(1,3,5);

//打印数组或对象或集合
print_r($arr);

//定义字典（对象）
$dict = array("name"=>"lbw","age"=>"21");
print_r($dict);
echo "<br>";
echo $dict["name"];

//循环语句,count($arr)获取arr数组的长度
for($i = 0; $i < count($arr); $i++){
    echo $arr[i];
    echo "<br>";
}
