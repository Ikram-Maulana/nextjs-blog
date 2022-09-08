import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm <b>Ikram</b>. A Full-stack web developer and UI designer. I
          am someone who is very interested in the world of IT and the creative
          industry, where I can explore and imagine expressing my ideas
          visually. I am very happy to learn new things to add insight and feel
          challenged to learn it.
        </p>
      </section>
    </Layout>
  );
}
