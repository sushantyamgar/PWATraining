const sites = require('./sites.js')
module.exports = {
    app: {
        // Customize how your 'site' and 'locale' are displayed in the url.
        url: {
            // Determine where the siteRef is located. Valid values include 'path|query_param|none'. Defaults to: 'none'
            // site: 'none',
            // Determine where the localeRef is located. Valid values include 'path|query_param|none'. Defaults to: 'none'
            locale: 'none'
            // This boolean value dictates whether or not default site or locale values are shown in the url. Defaults to: false
            // showDefaults: true
        },
        // The default site for your app. This value will be used when a siteRef could not be determined from the url
        defaultSite: 'RefArch',
        // Provide aliases for your sites. These will be used in place of your site id when generating paths throughout the application.
        // siteAliases: {
        //     RefArch: 'us'
        // },
        // The sites for your app, which is imported from sites.js
        sites,
        // Commerce api config
        commerceAPI: {
            proxyPath: `/mobify/proxy/api`,
            parameters: {
                clientId: '71e4d6f0-aba5-4d9a-b727-071468df2144',
                organizationId: 'f_ecom_zzrb_051',
                shortCode: 'kv7kzm78',
                siteId: 'RefArch'
            },
            ocapi: {
                baseTokenUrl: 'https://account.demandware.com/dw/oauth2/access_token',
                proxyPath: `/mobify/proxy/ocapi`,
                ocapi_clientId: 'f48932cc-1a97-48c4-ba2d-814b7cf6870d',
                ocapi_clientPwd: 'e6SG#(08st!dKp',
                api_version: 'v22_8'
            }
        },
        // Einstein api config
        einsteinAPI: {
            proxyPath: `/mobify/proxy/einstein`,
            einsteinId: 'undefined',
            siteId: 'RefArch'
        }
    },
    // This list contains server-side only libraries that you don't want to be compiled by webpack
    externals: [],
    // Page not found url for your app
    pageNotFoundURL: '/page-not-found',
    // Enables or disables building the files necessary for server-side rendering.
    ssrEnabled: true,
    // This list determines which files are available exclusively to the server-side rendering system
    // and are not available through the /mobify/bundle/ path.
    ssrOnly: ['ssr.js', 'ssr.js.map', 'node_modules/**/*.*'],
    // This list determines which files are available to the server-side rendering system
    // and available through the /mobify/bundle/ path.
    ssrShared: [
        'static/ico/favicon.ico',
        'static/robots.txt',
        '**/*.js',
        '**/*.js.map',
        '**/*.json'
    ],
    // Additional parameters that configure Express app behavior.
    ssrParameters: {
        ssrFunctionNodeVersion: '14.x',
        proxyConfigs: [
            {
                host: 'kv7kzm78.api.commercecloud.salesforce.com',
                protocol: 'https',
                path: 'api'
            },
            {
                host: 'zzrb-051.sandbox.us01.dx.commercecloud.salesforce.com',
                path: 'ocapi'
            },
            {
                host: 'api.cquotient.com',
                path: 'einstein'
            }
        ]
    }
}