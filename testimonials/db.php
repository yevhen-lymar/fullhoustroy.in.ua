<?php
include_once("config.php");
if(isset($_POST['send-testimonial'])){
    
    $name = htmlspecialchars(trim($_POST['user-name']));
    $message = nl2br(htmlspecialchars(trim($_POST['message'])));
    $date = date("d.m.Y");
    if( empty($name) || empty($message) ) die("<h3>Заполните поля, пожалуйста</h3>");
   
    db_insert('user_name, message, date', "'".$name."','".$message."','".$date."'" );
    echo ' <div class="testimonial">
               <div class="user-data"><i class="fa fa-user"></i><span class="user">'.$name.'</span><i class="fa fa-calendar"></i><span class="date">'.$date.'</span>
               </div>
               <div class="testimonial-text">'.$message.'</div>
           </div>'; 
    exit();
}

function init(){
    global $link;
    $link = mysql_connect(DB_HOST, DB_USER, DB_PASSWORD)
        or die("Соединение с базой данных невозможно: " . mysql_error());
    mysql_select_db(DB_NAME) or die("Не могу подключиться к базе.");
    mysql_set_charset('utf8');
}

function db_select($param="*", $param2=''){
    global $link;
    init();
    
    $query = "SELECT $param FROM ".TABLE." ORDER BY id DESC   $param2";
    $res = mysql_query($query,$link);
    //print_r($query);
    
    if (!$res) {
        echo 'Ошибка запроса: ' . mysql_error();
        exit;
    }
     
    return $res;
    mysql_close($link);
}
function db_update($table, $params, $where){
    global $link;
    init();
    $query = "UPDATE ".TABLE." SET $params WHERE $where";
   // echo $query;
    $res = mysql_query($query,$link);
  
}
function db_insert($fields, $values){
    global $link;
    init();
    $query = "INSERT INTO ".TABLE." ($fields) VALUES ($values)";
   // echo $query;
    $res = mysql_query($query,$link);
    if ($res) return  mysql_insert_id();
    else {
        echo 'Ошибка запроса: ' . mysql_error();
        exit;
     }    
}
