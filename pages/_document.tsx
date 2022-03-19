import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Kaushan+Script&family=Shadows+Into+Light&family=Shizuru&family=Syne+Mono&display=swap"
                    rel="stylesheet" />

                <meta
                    name='description' content='developer looking for a job'
                />
                <meta
                    name='keywords'
                    content='Full Stack Web Developer, Frontend, React, Redux, Express'
                />
            </Head>
            <body className='bg-gradient-to-r from-blue to-green-400 dark:from-dark-500 dark:to-dark-700 dark:text-white'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
