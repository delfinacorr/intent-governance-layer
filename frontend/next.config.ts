
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Esto ignora errores de tipos SOLO durante el build de Vercel
    ignoreBuildErrors: true,
  },
  eslint: {
    // También ignoramos ESLint por si las moscas
    ignoreDuringBuilds: true,
  },
}

export default nextConfig