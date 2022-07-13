<?php
class MyDB extends SQLite3
{
    function __construct()
    {
        $this->open('sample.sqlite');
    }
}

$db = new MyDB();
if(!$db)
{
    echo $db->lastErrorMsg();
}

$hId = $_GET['hId']; 

echo working
?>
