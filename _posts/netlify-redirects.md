---
title: 'Netlify ignores redirects in next.config.js'
excerpt: 'When deploying my site on Netlify, I couldn\'t get redirects to work in next.config.js. Here\'s how.'
coverImage: '/assets/blog/arrows.jpg'
date: '2023-01-10T15:35:07.322Z'
author:
  name: Justin Cook
  picture: '/assets/blog/authors/jc.jpg'
---

I recently migrated my old programming blog from Wordpress to the Jamstack, using a statically generated site running Next.js and deployed on Netlify. Since most of my programming articles were from 2006 or before, most were useless and received no traffic. 

Using Analytics, I filtered to organic landing pages for the last 6 months, and found it was only 4 articles that are still attracting search traffic. I decided to preserve those pages on the new site, and I'll soon set up a custom 404 for the deprecated articles. 

## Redirects not working
After recreating the articles on my new site, I tried to set up my redirects per the Next.js documentation. 

My next.config.js file looked like this:

```
/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
    async redirects() {
        return [
          {
            source: '/2006/12/27/automatic-cpanel-backup-domain-mysql-with-cron-php/',
            destination: '/posts/auto-cpanel-backup',
            permanent: true,
          },
          {
            source: '/2006/11/28/convert-an-ip-address-to-ip-number-with-php-asp-c-and-vbnet/',
            destination: '/posts/convert-ip-address',
            permanent: true,
          },
          {
            source: '/2006/07/17/upload-multiple-files-at-once-with-php/',
            destination: '/posts/upload-multiple-files',
            permanent: true,
          },
          {
            source: '/2006/03/31/php-parse-a-string-between-two-strings/',
            destination: '/posts/php-parse-between-strings',
            permanent: true,
          },
        ]
      },
  }
  
  module.exports = nextConfig
  ```

  I deployed to Netlify, tested the old URLs, and still only got 404s. 

  ### How Netlify does redirects
  After digging around, I found out that Netlify doesn't process redirects in the next.config.js file. Basically they use a special _redirects file in basic TSV format. 

  #### Setup steps
  1. Locate your publish folder
  2. Create a nee file called ```_redirects``` (no extension)
  3. Add your redirects, one per line. Only request URL and destination are required, but there a number of [other options](https://unsplash.com/photos/pKeF6Tt3c08) if you need. 

  My _redirects file now looks like this:
  ```
  /2006/12/27/automatic-cpanel-backup-domain-mysql-with-cron-php/                 /posts/auto-cpanel-backup
  /2006/11/28/convert-an-ip-address-to-ip-number-with-php-asp-c-and-vbnet/        /posts/convert-ip-address
  /2006/07/17/upload-multiple-files-at-once-with-php/                             /posts/upload-multiple-files
  /2006/03/31/php-parse-a-string-between-two-strings/                             /posts/php-parse-between-strings
  ```

* Cover image by [Photo by Brendan Church on Unsplash](https://unsplash.com/photos/pKeF6Tt3c08)