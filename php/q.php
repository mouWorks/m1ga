<?php
//Load the Curl Interface
require_once('base.php');

$base = new Base();
//$queryString = '?cat=2001001001&area=6001001001&fmt=8&cols=J,JOB,NAME'; //Default;

//Default:: Output is JSON and Order
$queryString = '?fmt=8&order=6&sltp=S&asc=1'; 

//Limit Salary

//Show the Salary
$queryString .= '&cols=J,JOB,NAME,SAL_MONTH_LOW,ADDR_NO_DESCRIPT,PERIOD,WELFARE,JOBNO';

//地區Array
$areaArray = array(
    6001001000,//台北市 /
    6001002000,//新北市 /
    6001004000,//基隆市
    6001005000,//桃園市
    6001006001,//新竹市
    6001006000,//新竹縣市
    6001007000,//苗栗縣
    6001008000,//台中市
    6001010000,//彰化縣
    6001011000,//南投縣
    6001012000,//雲林縣
    6001013001,//嘉義市
    6001013000,//嘉義縣市
    6001014000,//台南市
    6001016000,//高雄市
    6001018000,//屏東縣
    6001003000,//宜蘭縣
    6001019000,//台東縣
    6001020000,//花蓮縣
    6001021000,//澎湖縣
    // 'u' => 6001022000,//金門縣
    // 'v' => 6001023000,//連江縣
);

//職類Array
$catArray = array(
    'a' => 2001000000, //經營 / 人資類
    'b' => 2004000000, //行銷企劃 / 專案管理類
    'c' => 2006000000, //餐飲旅遊類
    'd' => 2010000000, //操作維修 / 技術類
    'e' => 2012000000, //營建 / 製圖類
    'f' => 2014000000, //文字工作 / 傳媒類
    'g' => 2016000000,// 學術教育 / 輔導類
    'h' => 2009000000,// 生產製造 / 品管類
    'i' => 2003000000,// 財會 / 金融類
    'j' => 2005000000,// 客服 / 業務 / 貿易類
    'k' => 2007000000,// 資訊軟體系統類
    'l' => 2011000000,// 資材 / 物流 / 運輸類
    'm' => 2013000000,// 藝術設計類
    'n' => 2015000000,// 醫療 / 保健類
    'o' => 2008000000,// 研發相關類
    'p' => 2017000000,// 軍警消 / 保全類
    'q' => 2018000000,// 其他職類
);

//Mount Area
if(isset($_GET['area'])){
    
    $area = $_GET['area'];
    $areaCode = $areaArray[$area];
    $queryString = $queryString . '&area=' . $areaCode;
}

//Mount JobCat
if(isset($_GET['cat'])){
    
    $cat = $_GET['cat'];
    $catCode = $catArray[$cat];
    $queryString = $queryString . '&cat=' . $catCode;
}

//Mount Role: 0 | Junior, 1 | Senior
if(isset($_GET['role'])){
    
    $role = $_GET['role'];

    //newbie
    if ( 0 == $role){
        $queryString .= '&exp_all=2&exp=0,-1';
    }

    //Seasoned
    if ( 1 == $role){
        $queryString .= '&exp_all=1&exp=2';
    }
}

if(isset($_GET['slmin'])){
    $queryString .= '&slmin=' . $_GET['slmin'];
}

if(isset($_GET['slmax'])){
    $queryString .= '&slmax=' . $_GET['slmax'];
}

//$base->dd($queryString);
$data = $base->query($queryString);
//echo 'check';
//$base->dd($data);
$base->toss($data);
//echo 'try';