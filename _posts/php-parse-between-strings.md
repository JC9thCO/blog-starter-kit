---
title: 'PHP - parse a string between two strings'
excerpt: 'This is a handy little function to strip out a string between two specified pieces of text.'
coverImage: '/assets/blog/php-parse-between-strings/cover.jpg'
date: '2006-03-31T05:35:07.322Z'
author:
  name: Justin Cook
  picture: '/assets/blog/authors/jc.jpg'
ogImage:
  url: '/assets/blog/php-parse-between-strings/cover.jpg'
---

This is a handy little function to strip out a string between two specified pieces of text. This could be used to parse XML text, bbCode, or any other delimited code/text for that matter. 

## Here's the code

```
function get_string_between($string, $start, $end){
	$string = " ".$string;
	$ini = strpos($string,$start);
	if ($ini == 0) return "";
	$ini += strlen($start);   
	$len = strpos($string,$end,$ini) - $ini;
	return substr($string,$ini,$len);
}

$fullstring = "this is my [tag]dog[/tag]";
$parsed = get_string_between($fullstring, "[tag]", "[/tag]");

echo $parsed; // (result = dog)
```