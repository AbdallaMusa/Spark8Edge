export const config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  environment: process.env.NODE_ENV || 'development',
  isVercel: !!process.env.VERCEL,
  isOrchid: !!process.env.ORCHID_ENV,
};