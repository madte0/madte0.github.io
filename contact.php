<?php
  $name = $_REQUEST['name'] ;
  $email = $_REQUEST['email'] ;
  $message = $_REQUEST['message'] ;

  mail( "ateo05@gmail.com", "WEB MAGNETIC",
    $message, "From: $email" );
?>