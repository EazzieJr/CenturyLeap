module.exports= {
    plugins: [
        require('autoprefixer'),
        require('tailwindcss'),
        // require('@fullhuman/postcss-purgecss')({
        //     content: [
        //         './src/**/*.html',
        //         './src/**/*.js',
        //         './src/**/*.css',
        //     ],
        //     defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || {}
        // })
    ]
}