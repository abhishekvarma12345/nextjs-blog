import Link from 'next/link';
import Layout from '../../components/layout';
import Head from 'next/head';

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>
                    first post
                </title>
            </Head>
            <h1>First Post</h1>
            <Link href="/">Back to home</Link>
        </Layout>
    );

}