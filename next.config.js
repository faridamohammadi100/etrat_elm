
import withNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = withNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);