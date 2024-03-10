import Head from "next/head";

const PageHead = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title} || AI-Zade</title>
        <meta name="description" content="Page Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
    </>
  );
};

export default PageHead;
