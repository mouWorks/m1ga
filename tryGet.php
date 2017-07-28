<?php
$url = "http://www.104.com.tw/i/apis/jobsearch.cfm?cat=2001001001&area=6001001001&fmt=8&
cols=J,JOB,NAME";
$data = file_get_contents($url);
$data = json_decode($data, TRUE);
///echo $data;

//var_dump($data);

//echo json_encode($data);

echo json_encode($data);

?>