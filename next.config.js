// next.config.js
const path = require('path');
const merge = require('webpack-merge');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

const root = path.resolve('./');
const common = require(path.resolve(root, 'config/webpack.commons.js'));
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.NODE_ENV === 'production',
});

const ENV = process.env.NODE_ENV === 'production';

module.exports = withBundleAnalyzer(
    withCSS(
        withSass({
            distDir: ENV ? 'proBuild' : '.next',
            // generateInDevMode: false,

            // exportPathMap: function() {
            //     return {
            //         '/': { page: '/' },
            //     };
            // },
            webpack(config, { isServer }) {
                if (isServer) {
                    const antStyles = /antd\/.*?\/style\/css.*?/;
                    const origExternals = [...config.externals];
                    config.externals = [
                        (context, request, callback) => {
                            if (request.match(antStyles)) return callback();
                            if (typeof origExternals[0] === 'function') {
                                origExternals[0](context, request, callback);
                            } else {
                                callback();
                            }
                        },
                        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
                    ];

                    config.module.rules.unshift({
                        test: antStyles,
                        use: 'null-loader',
                    });
                }

                const mergeConfig = merge(common, config);
                return mergeConfig;
            },
        }),
    ),
);
