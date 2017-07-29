<?php
//Load the Curl Interface
require_once('base.php');

$base = new Base();



$queryString = '?cat=2001001001&area=6001001001&fmt=8&cols=J,JOB,NAME';

if(isset($_GET['C'])){
    
    $case = $_GET['C'];

    switch($case)
    {

        case 'c':
        case 'C':
            $queryString = '?cat=2001001001&area=6001001001&fmt=8&cols=J,JOB,NAME';
            break;

        case 'd':
        case 'D':
            $queryString = '?cat=2001001001&area=6001001001&fmt=8&cols=J';
            break;




    }




}







$data = $base->query($queryString);

//echo 'check';
$base->dd($data);
//$base->toss($data);


//echo 'try';