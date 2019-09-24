module.exports = {
    splitChunks: {
        cacheGroups: {
            plug: {
                name: 'plug',
                test: module => {
                    return /antd|@ant-design/.test(module.context);
                },
                chunks: 'initial',
                priority: 15,
            },
            // reactBase: {
            //     name: 'reactBase',
            //     test: module => {
            //         return /react|redux|prop-types/.test(module.context);
            //     },
            //     chunks: 'initial',
            //     priority: 15,
            // },
            // firebase: {
            //     name: 'firebase',
            //     test: module => {
            //         return /firebase|@firebase/.test(module.context);
            //     },
            //     chunks: 'initial',
            //     priority: 10,
            // },
            common: {
                name: 'common',
                chunks: 'initial',
                priority: 5,
                minChunks: 2,
            },
        },
    },
};
