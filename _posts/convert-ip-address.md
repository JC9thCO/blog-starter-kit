---
title: 'Convert an IP address to IP number with PHP, ASP, C# and VB.Net'
excerpt: 'Here are the functions in PHP, ASP, C# and VB.Net to convert and IP address from dot format to IP number format.'
coverImage: '/assets/blog/convert-ip-address/earthlights.jpg'
date: '2006-11-28T05:35:07.322Z'
author:
  name: Justin Cook
  picture: '/assets/blog/authors/jc.jpg'
ogImage:
  url: '/assets/blog/convert-ip-address/earthlights.jpg'
---

So you've retrieved the visitor's IP address. If you're just logging or tracing it, that's all you need to do. However, if you want to match it to an IP location database, you can't search by the IP in the IPV4 format. It needs to be converted to its IP number equivalent (it is just more efficient to store and search between a range of numbers in database). Here are the functions in PHP, ASP, C# and VB.Net to convert and IP address from dot format to IP number format.

Each function is based on the fact that IP addresses (IPV4) are divided into 4 sub-blocks. Each sub-block has a different weight number, each powered by 256. Here's the math:

IP Number = (16777216*a) + (65536*b) + (256*c) + (d (1))
– where the IP Address = a.b.c.d

And here are the functions that implement that math:

## PHP Code

```
function ip_address_to_number($IPaddress)
{
    if ($IPaddress == "") {
        return 0;
    } else {
        $ips = split ("\.", "$IPaddress");
        return ($ips[3] + $ips[2] * 256 + $ips[1] * 256 * 256 + $ips[0] * 256 * 256 * 256);
    }
}
```

## ASP Code

```
Function IPAddressToNumber(IPaddress)
  Dim i, pos, PrevPos, num
  If IPaddress = "" Then
    IPAddressToNumber = 0
  Else
    For i = 1 To 4
        pos = InStr(PrevPos + 1, IPaddress, ".", 1)
        If i = 4 Then 
            pos = Len(IPaddress) + 1
        End If
        num = Int(Mid(IPaddress, PrevPos + 1, pos - PrevPos - 1))
        PrevPos = pos
        IPAddressToNumber = ((num Mod 256) * (256 ^ (4 - i))) + IPAddressToNumber
    Next
  End If
End Function
```

## C# Code

```
public double IPAddressToNumber(string IPaddress)
{
    int i;
    string [] arrDec;
    double num = 0;
    if (IPaddress == "")
    {
       return 0;
    }
    else
    {
       arrDec = IPaddress.Split('.');
       for(i = arrDec.Length - 1; i >= 0 ; i --)
       {
          num += ((int.Parse(arrDec[i])%256) * Math.Pow(256 ,(3 - i )));
       }
       return num;
    }
}
```

## VB.Net Code
```
Public Function IPAddressToNumber(ByVal IPaddress As String) As Double
    Dim arrDec() As String
    Dim i As Integer
    Dim intResult As Long
    If IPaddress = "" then
       IPAddressToNumber = 0
    Else
       arrDec = IPaddress.Split(".")
       For i = arrDec.Length - 1 To 0 Step -1
          intResult = intResult + ((Int(arrDec(i)) Mod 256) * Math.Pow(256, 3 -i))
       Next
       IPAddressToNumber = intResult
    End If
End Function
```