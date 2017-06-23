<?php

$recepient = "slava91billion@gmail.com";
$sitename = "Название сайта";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$topic = trim($_POST["topic"]);
$text = trim($_POST["msg"]);
$message = "Name: $name \nE-mail: $email \nTopic: $topic \nText: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");