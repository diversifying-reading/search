<Doctype HTML>
  <html>
    <head>
      <title>title</title>
    </head>
    
    <body>
      <?php
        open('sample.sqlite');


        }
        }

        $db = new MyDB();
        if(!$db) {
        echo $db->lastErrorMsg();
        }
        else {
        echo "Opened database successfully \n" ;
        }

        $sql =<<<eof
        select="" *="" from="" Sheet1;
        eof;

        $ret="$db-">query($sql);
        while($row=$ret->fetchArray(SQLITE3_ASSOC)){

        echo "ID = " . $row['ID'] . "\n";
        echo "Title of book = " . $row['Title']. " " . $row['Author'];
        }

        echo "Operation done successfully\n";
        $db->close();

      ?>
