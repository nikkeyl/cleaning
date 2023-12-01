import StylelintWebpackPlugin from 'stylelint-webpack-plugin'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ESLintWebpackPlugin from 'eslint-webpack-plugin'
import { plugins } from '../settings/plugins.js'
import { path } from '../settings/path.js'

const config = {
    mode: 'production',
    cache: {
        type: 'filesystem'
    },
    optimization: {
        minimizer: [
            new plugins.TerserPlugin({
                extractComments: false
            })
        ]
    },
    output: {
        filename: 'app.min.js',
        path: path.built,
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'string-replace-loader',
                        options: {
                            search: '@content',
                            replace: '../content',
                            flags: 'g'
                        }
                    }, {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 0,
                            sourceMap: false,
                            modules: false,
                            url: {
                                filter: url => {
                                    if (url.includes('content') || url.includes('fonts')) {
                                        return false
                                    }
                                    return true
                                }
                            }
                        }
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                outputStyle: 'expanded'
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new StylelintWebpackPlugin({
            fix: true
        }),
        new ESLintWebpackPlugin({
            fix: true
        }),
        new plugins.FileIncludeWebpackPlugin({
            source: path.srcFolder,
            destination: '../',
            htmlBeautifyOptions: {
                'indent-with-tabs': true,
                'indent_size': 4
            },
            replace: [
                {
                    regex: '../content', to: 'content'
                }, {
                    regex: '@content', to: 'content'
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: '../css/style.css'
        }),
        new plugins.CopyPlugin({
            patterns: [
                {
                    from: `${path.root}/static`, to: '../static',
                    noErrorOnMissing: true
                }, {
                    from: `${path.root}/favicon.svg`, to: '../',
                    noErrorOnMissing: true
                }
            ]
        }),
        new FaviconsWebpackPlugin({
            logo: `${path.root}/favicon.svg`,
            outputPath: `../`,
            cache: true,
            favicons: {
                orientation: null,
                theme_color: null,
                background: null,
                start_url: null,
                display: null,
                lang: null,
                dir: null,
                icons: {
                    appleStartup: false,
                    favicons: false,
                    windows: false,
                    android: false,
                    yandex: false,
                    appleIcon: [
                        'apple-touch-icon-180x180.png'
                    ]
                    // android: [
                    //     'android-chrome-192x192.png',
                    //     'android-chrome-512x512.png'
                    // ]
                }
            }
        }),
    ],
    resolve: {
        extensions: [
            '.scss',
            '.css',
            '.js'
        ],
        alias: {
            '@scss': `${path.root}/scss`,
            '@js': `${path.root}/js`
        }
    }
}

export default config