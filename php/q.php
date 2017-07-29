<?php
//Load the Curl Interface
require_once('base.php');

$base = new Base();
$queryString = '?cat=2001001001&area=6001001001&fmt=8&cols=J,JOB,NAME'; //Default;

if(isset($_GET['case'])){
    
    $case = $_GET['C'];

    switch($case)
    {

        case 'c':
        case 'C':

            $queryString = '?cat=2001001001&area=6001001001&fmt=8&cols=J,JOB,NAME';
            break;

        case 'd':
        case 'D':

            $queryString = '?cat=2007001006&area=6001001000&fmt=8&cols=J&sltp=S&slmin=22000&slmax=81000';
            break;

        case 'e':
        case 'E':

            $queryString = 'cat=2001001000&major=3001001000&fmt=8&cols=JOBNO,NAME,JOB';
            break;



    }




}


$base->dd($queryString);




$data = $base->query($queryString);

//echo 'check';
$base->dd($data);
//$base->toss($data);


//echo 'try';