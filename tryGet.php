<?php
$url = "http://www.104.com.tw/i/apis/jobsearch.cfm?cat=2001001001&area=6001001001&fmt=4&
cols=J,JOB,NAME";
$data = file_get_contents($url);
echo 'trying: use FileGetContents';
var_dump($data);
?>