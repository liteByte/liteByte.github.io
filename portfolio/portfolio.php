<?php

$project_name = $_GET["project"];

$img_1 = "projects/" . $project_name . "/img/1.png";
$img_2 = "projects/" . $project_name . "/img/2.png";
$subtitle = read_from_file("projects/" . $project_name . "/data/subtitle.txt");
$case = read_from_file("projects/" . $project_name . "/data/case.txt");
$stack = read_from_file("projects/" . $project_name . "/data/stack.txt");

function read_from_file($filename) {
   $file = fopen("$filename", "r") or die("Unable to open file!");
   return(fread($file, filesize("$filename")));
}

?>

<!DOCTYPE html>
<html lang="en">
   <head>
      <title>liteByte | Software Development</title>
      <meta name="description" content="We are a software company focused on web and mobile development. At liteByte we value functionality, creativity and design.">
      <meta name="keywords" content="liteByte, Web Development, Software Development, Golang, NodeJS, Angular, React, Android, iOS">
      <meta name="author" content="liteByte">
      <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=0">
      <meta charset="UTF-8">
      <meta name="theme-color" content="#3f3f3f">
      <meta name="msapplication-navbutton-color" content="#4285f4">
      <meta name="apple-mobile-web-app-capable" content="yes">
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
      <link href="favicon.png" rel="icon" type="image/vnd.microsoft.icon">
      <link href="https://fonts.googleapis.com/css?family=Muli:300,400,400i,600|Poiret+One" rel="stylesheet">
      <link rel="stylesheet" href="portfolio.css">
   </head>
   <body>
   		<div class="container">
            <div class="left">
               <img class="img-project" src="<?=$img_1;?>">
               <img class="img-project" src="<?=$img_2;?>">
            </div>
            <div class="right">
               <div class="right-container">
               <div class="title"><?=$project_name;?></div>
               <div class="subtitle"><?=$subtitle;?></div>

               <div class="section-container">
                  <div class="section-title">CASE</div>
                  <div class="section-content"><?=$case;?></div>
               </div>

               <div class="section-container">
                  <div class="section-title">STACK</div>
                  <div class="section-content"><?=$stack;?></div>
               </div>
               </div>
            </div>
         </div>

         <div class="related-container">
            <div class="work">
               <h3 class="related-subtitle">Related works</h3>
            <div>
            <div class="related-img-container">
               <article onclick="window.location = 'portfolio.php?project=logitbot'">
                   <img src="../src/services/portfolio/logitbot.png" alt="Example website">
               </article>
               <article onclick="window.location = 'portfolio.php?project=pyramis'">
                   <img src="../src/services/portfolio/pyramis.png" alt="Example website">
               </article>
               <article onclick="window.location = 'portfolio.php?project=xposure'">
                   <img src="../src/services/portfolio/xPosure.png" alt="Example website">
               </article>
               <article onclick="window.location = 'portfolio.php?project=electrolaf'">
                   <img src="../src/services/portfolio/electrolaf.png" alt="Example website">
               </article>
            </div>
         </div>

      	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
   </body>
</html>
