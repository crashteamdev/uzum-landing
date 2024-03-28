import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['ru', 'uz'],
    defaultLocale: 'ru'
});

export const config = {
    matcher: ['/', '/(ru|uz)/:path*']
};