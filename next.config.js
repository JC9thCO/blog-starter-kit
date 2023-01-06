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
        ]
      },
  }
  
  module.exports = nextConfig