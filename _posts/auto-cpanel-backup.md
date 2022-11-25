---
title: 'Automatic cPanel backup (domain & MySQL) with cron & PHP'
excerpt: 'Achedule cPanel backups to run at regular intervals with cron.'
coverImage: '/assets/blog/auto-cpanel-backup/monster.jpg'
date: '2006-12-27T05:35:07.322Z'
author:
  name: Justin Cook
  picture: '/assets/blog/authors/jc.jpg'
ogImage:
  url: '/assets/blog/auto-cpanel-backup/monster.jpg'
---

The situation is this: I use cPanel on my web hosting server. I use the cPanel backup tool to regularly backup my home directory (includes my web files, mail, etc), and my MySQL databases. I love the fact that you can use it to backup to a remote FTP server, and I do that on a fairly regular basis.

The major drawback is that you have to remember/schedule to perform this backup manually. This becomes especially difficult if you have multiple cPanel accounts. It would be amazing if you could just schedule the cPanel backup to run at regular intervals, perhaps with cron. Well, although there's no option for that in cPanel, the script below will allow you to do exactly that!

This backup script includes SSL support. This isn't necessary if you run the script on the server for which you're generating the backup; but the SSL support is very important if you're running the script somewhere else to connect to your cPanel hosting account.

## PHP Code

```
<?php

// PHP script to allow periodic cPanel backups automatically, optionally to a remote FTP server.
// This script contains passwords.  KEEP ACCESS TO THIS FILE SECURE! (place it in your home dir, not /www/)

// ********* THE FOLLOWING ITEMS NEED TO BE CONFIGURED *********

// Info required for cPanel access
$cpuser = "username"; // Username used to login to CPanel
$cppass = "password"; // Password used to login to CPanel
$domain = "example.com"; // Domain name where CPanel is run
$skin = "x"; // Set to cPanel skin you use (script won't work if it doesn't match). Most people run the default x theme

// Info required for FTP host
$ftpuser = "ftpusername"; // Username for FTP account
$ftppass = "ftppassword"; // Password for FTP account
$ftphost = "ftp.example.com"; // Full hostname or IP address for FTP host
$ftpmode = "ftp"; // FTP mode ("ftp" for active, "passiveftp" for passive)

// Notification information
$notifyemail = "you@example.com"; // Email address to send results

// Secure or non-secure mode
$secure = 0; // Set to 1 for SSL (requires SSL support), otherwise will use standard HTTP

// Set to 1 to have web page result appear in your cron log
$debug = 0;

// *********** NO CONFIGURATION ITEMS BELOW THIS LINE *********

if ($secure) {
   $url = "ssl://".$domain;
   $port = 2083;
} else {
   $url = $domain;
   $port = 2082;
}

$socket = fsockopen($url,$port);
if (!$socket) { echo "Failed to open socket connection... Bailing out!\n"; exit; }

// Encode authentication string
$authstr = $cpuser.":".$cppass;
$pass = base64_encode($authstr);

$params = "dest=$ftpmode&email=$notifyemail&server=$ftphost&user=$ftpuser&pass=$ftppass&submit=Generate Backup";

// Make POST to cPanel
fputs($socket,"POST /frontend/".$skin."/backup/dofullbackup.html?".$params." HTTP/1.0\r\n");
fputs($socket,"Host: $domain\r\n");
fputs($socket,"Authorization: Basic $pass\r\n");
fputs($socket,"Connection: Close\r\n");
fputs($socket,"\r\n");

// Grab response even if we don't do anything with it.
while (!feof($socket)) {
  $response = fgets($socket,4096);
  if ($debug) echo $response;
}

fclose($socket);

?>
```

To schedule the script to run regularly, save it as fullbackup.php in your top directory (not /public_html, which would be less secure).

## Cron job

Enter a new cron job like the following:

```
15 2 * * * /usr/local/bin/php /home/youraccount/fullbackup.php 
```