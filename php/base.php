<?php
//Base.php 
//Hanles the query Request
// $url = "http://www.104.com.tw/i/apis/jobsearch.cfm?cat=2001001001&area=6001001001&fmt=8&
// cols=J,JOB,NAME";

class base
{
    public function query($queryString){

        $host = 'http://www.104.com.tw/i/apis/jobsearch.cfm';
        //$queryString = '?cat=2001001001&area=6001001001&fmt=8&cols=J,JOB,NAME';
        //$queryString = urlencode($queryString);

        $url = $host . $queryString;

        try {
            $ch = curl_init();

            if (FALSE === $ch)
                throw new Exception('failed to initialize');

            curl_setopt($ch, CURLOPT_URL, $url); 
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            //curl_setopt(/* ... */);

            $content = curl_exec($ch);

            if (FALSE === $content)
                throw new Exception(curl_error($ch), curl_errno($ch));

            // ...process $content now
        } catch(Exception $e) {

            trigger_error(sprintf(
                'Curl failed with error #%d: %s',
                $e->getCode(), $e->getMessage()),
                E_USER_ERROR);

        }

        return $content;
    
    }// end of function

    public function dd($data){

        echo '<pre>';
        echo print_r($data);
        echo '</pre>';
    }

    //Toss Out data;
    public function toss($data){
        header('Content-Type: application/json');
        echo json_encode($data);
    }

} //end of class



