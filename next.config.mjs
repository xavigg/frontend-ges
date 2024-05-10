/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn-xiaomi.waugi.com.ar',
          // Opcional: puedes incluir el pathname para especificar patrones más detallados
          // pathname: '/path/de/tus/imagenes/*',
        },
      ]
    }
};

export default nextConfig;
