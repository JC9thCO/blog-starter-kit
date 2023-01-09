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