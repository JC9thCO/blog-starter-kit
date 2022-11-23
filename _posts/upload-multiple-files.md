---
title: 'Upload Multiple Files at Once with PHP'
excerpt: 'With PHP, it is fairly simple to include a file field in a form to upload one file. But what if you need to upload multiple files at one time?'
coverImage: '/assets/blog/upload-multiple-files/cover.jpg'
date: '2006-06-17T05:35:07.322Z'
author:
  name: Justin Cook
  picture: '/assets/blog/authors/jc.jpg'
ogImage:
  url: '/assets/blog/upload-multiple-files/cover.jpg'
---

With PHP, it's fairly simple to include a file field in a form to upload one file. But what if you need to upload multiple files at one time? (Like the attach file functionality in Gmail). This can be easily facilitated with the use of the 'for' loop. Here's the code to do it!

The first thing you'll need to do is prompt the user for how many files they need to upload. That will determine how many file fields we need to present. This method creates the fields on a second page, but I recommend you create the fields in real-time with DHTML, to prevent a post-back. But for this example, simplicity is key. Here's the first step, call it "prompt.html".

Note – we set the max to 9 to prevent server overloading. You can modify that if you need

## HTML Code

```
<html>
<head>
<title>Choose Number of Files to Upload</title>
</head>
<body>
<form name="form1" method="post" action="uploadForm.php">
  <p>How many files would you like to upload? (Max = 9).</p>
  <p>
    <input name="uploadsNeeded" type="text" id="uploadsNeeded" maxlength="1" />
  </p>
  <p>
    <input type="submit" name="Submit" value="Submit" />
  </p>
</form>
</body>
</html>
```
Here's the code for uploadForm.php, where it will create as many file fields as the user has specified.

```
<html>
<head>
<title>Upload files</title>
</head>
<body>

<form name="form1" enctype="multipart/form-data" method="post" action="uploadFiles.php">
  <p>
  <?
  $uploadsNeeded = $_POST&#91;'uploadsNeeded'&#93;;
  for($i=0; $i < $uploadsNeeded; $i++){
  ?>
    <input name="uploadFile<? echo $i;?>" type="file" id="uploadFile<? echo $i;?>" />
  </p>
  <? } ?>
  <p><input name="uploadsNeeded" type="hidden" value="<? echo $uploadsNeeded;?>" />
    <input type="submit" name="Submit" value="Submit" />
  </p>
</form>
</body>
</html>
```

## PHP Code

And finally, here's the code for 'uploadFiles.php', which loops through and processes each field;

```
<?
$uploadsNeeded = $_POST&#91;'uploadsNeeded'&#93;;
for($i = 0; $i < $uploadsNeeded; $i++){
$file_name = $_FILES&#91;'uploadFile'. $i&#93;&#91;'name'&#93;;
// strip file_name of slashes
$file_name = stripslashes($file_name);
$file_name = str_replace("'","",$file_name);
$copy = copy($_FILES&#91;'uploadFile'. $i&#93;&#91;'tmp_name'&#93;,$file_name);
 // prompt if successfully copied
 if($copy){
 echo "$file_name | uploaded sucessfully!<br>";
 }else{
 echo "$file_name | could not be uploaded!<br>";
 }
}
?>
```