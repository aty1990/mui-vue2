var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const IS_ENV = process.env.NODE_ENV == 'production'

var plugins = []

plugins.push(new webpack.optimize.CommonsChunkPlugin('common'))

// 引入jquery
plugins.push(new webpack.ProvidePlugin({
    jQuery : 'jquery',
    $ : 'jquery'
}))

if (IS_ENV) { 
    // 生产环境
    plugins.push(new webpack.DefinePlugin({
        'process.env': { //设置成生产环境
            NODE_ENV: '"production"'
        }
    }))
    // 自动补全
    plugins.push(new webpack.LoaderOptionsPlugin({
       options: {
            vue: {
                postcss: [
                    require('autoprefixer')({
                        browsers: [
                            'last 3 versions',
                            'ie >= 8',
                            'ff >= 30',
                            'chrome >= 31'
                        ]
                    })
                ]
            }
       }
    }))
    // 压缩代码
    plugins.push(new webpack.optimize.UglifyJsPlugin({ 
        compress: {
            warnings: false
        }
    }))
}

plugins.push(
    new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
        filename: './index.html', //生成的html存放路径，相对于 path
        title :'vue2+mui移动框架',
        template: './src/app/app.html' //html模板路径
    })
)

module.exports = {
    entry: {
        build:'./src/main.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                // vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader",
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'file-loader',
                query: {
                  name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins,
    resolve: {
        extensions: ['.js', '.vue', '.jsx', '.less', '.css'], //后缀名自动补全
        alias: {
          'vue$': 'vue/dist/vue',
          'assets' : path.resolve(__dirname ,"src/assets"),
          'pages' : path.resolve(__dirname ,"src/pages"),
          'components' : path.resolve(__dirname ,"src/pages/components"),
          'jquery': 'jquery' 
        }
    },
    
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    devtool: '#eval-source-map'
   
}
