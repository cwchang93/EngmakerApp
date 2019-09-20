// next.config.js
const path = require('path');
const merge = require('webpack-merge');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withLess = require('@zeit/next-less');
const lessToJS = require('less-vars-to-js');

const fs = require('fs');
const root = path.resolve('./');
const common = require(path.resolve(root, 'config/webpack.commons.js'));
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.NODE_ENV === 'production',
});
const ENV = process.env.NODE_ENV === 'production';
// Where your antd-custom.less file lives
const themeVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8'));

module.exports = withBundleAnalyzer(
    withCSS(
        withSass(
            withLess({
                distDir: ENV === 'production' ? 'proBuild' : '.next',
                generateInDevMode: false,

                lessLoaderOptions: {
                    modifyVars: themeVariables, // make your antd custom effective
                    javascriptEnabled: true,
                    localIdentName: '[local]___[hash:base64:5]',
                },
                // exportPathMap: function() {
                //     return {
                //         '/': { page: '/' },
                //     };
                // },
                webpack(config, { isServer }) {
                    if (isServer) {
                        const antStyles = /antd\/.*?\/style.*?/;
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

                    // 除外 generate 的 templates
                    // config.module.rules.push({
                    //     test: /\/config\/generate\/.*.tsx$/,
                    //     loader: 'ignore-loader',
                    // });

                    const mergeConfig = merge(common, config);
                    return mergeConfig;
                },
            }),
        ),
    ),
);