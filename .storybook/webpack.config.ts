const merge = require('webpack-merge');
const Path = require('path');
const root = Path.resolve(__dirname, '../');

// const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const common = require(Path.resolve(root, 'config/webpack.commons.js'));

module.exports = ({ config }:{ config: any; mode?: any }) => {

    const rule = config.module.rules.find((r:any) =>
        r.test && r.test.toString().includes('svg') &&
        r.loader && r.loader.includes('file-loader')
    );
    rule.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;

    const mergeConfig = merge(common, config);
    
    mergeConfig.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
            presets: [require.resolve('babel-preset-react-app')],
            plugins: [["import", { libraryName: "antd", style: "css" }]]
        },
    });


    mergeConfig.module.rules.push({
        test: /\.s(a|c)ss$/,
        loader: [
            {
                loader: 'style-loader',
            },
            {
                loader: 'css-loader',
                options: {
                    localIdentName: '[local]',
                },
            },
            {
                loader: 'postcss-loader',
                options: {
                    plugins: function() {
                        return [require('autoprefixer')];
                    },
                },
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true,
                    sourceMapContents: false,
                },
            },
        ],
    });

    mergeConfig.resolve.extensions.push('.ts', '.tsx', '.css', '.scss', 'svg');

    // mergeConfig.plugins.push(
    //   new ForkTsCheckerWebpackPlugin({
    //     async: false,
    //     checkSyntacticErrors: true,
    //     formatter: require("react-dev-utils/typescriptFormatter")
    //   })
    // );

    return mergeConfig;
};
export {}