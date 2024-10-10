import Head from "next/head";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import Navbar from "@/components/navBar";
import Landing, { LandingProps } from "@/components/sections/landing";
import Work, { Project, WorkProps } from "@/components/sections/work";
import About, { AboutProps, interest as Interest, interestElement as InterestElement } from "@/components/sections/about";
import Contact, { ContactProps } from "@/components/sections/contact";
// import { doc, getDoc } from "firebase/firestore/lite";
// import { db } from "@/lib/firebase";

export async function getStaticProps() {
  // Get props for landing section
  // const landingProps = getDoc(doc(db, "sections", "landing")).then((doc) => {
  //   return {
  //     titles: doc.data()?.titles || ["Paul Maier"],
  //     welcomeText: doc.data()?.welcomeText || "Error fetching welcome text",
  //   };
  // }) as Promise<LandingProps>;
  const landingProps = Promise.resolve({
    titles: ["Uqon Studio", "- Purkonuddin"],
    welcomeText: "Under Construction and Development | Interior Contractor | Software Developer",
  }) as unknown as Promise<LandingProps>;

  // Get props for about section
  // const aboutProps = getDoc(doc(db, "sections", "about")).then((doc) => {
  //   return {
  //     title: (doc.data()?.title || "About me") as string,
  //     motivation: (doc.data()?.motivation ||
  //       "Error while fetching content") as string,
  //     interests: (doc.data()?.interests || []) as Interest[],
  //     education: (doc.data()?.education ||
  //       "Error while fetching content") as string,
  //   };
  // }) as Promise<AboutProps>;
  const aboutProps = Promise.resolve({
    title: "About me",
    motivation: "I'm interested in the IT field specifically in Programming, and also interested in the world of interior designer and contractor.",
    interests: [
      {
        elements:[
          {
            name: "Golang",
            experienced: true,
            new: true
          },
          {
            name: "Node.Js",
            experienced: true,
            new: false
          },
          {
            name: "React.Js",
            experienced: true,
            new: false
          },
          {
            name: "MySQL/Postgres",
            experienced: true,
            new: false
          },
          {
            name: "Firebase Database",
            experienced: true,
            new: false
          },
          {
            name: "Docker",
            experienced: false,
            new: true
          },
          {
            name: "Sketchup",
            experienced: true,
            new: false
          },
          {
            name: "AutoCAD",
            experienced: false,
            new: false
          }
        ] as unknown as InterestElement[],
      }
    ] as unknown as Interest[],
    education: "SD, SMP, SMK, D3, BootCamp IT ",
  }) as Promise<AboutProps>;

  // Get props for work section
  // const workProps = getDoc(doc(db, "sections", "work")).then((doc) => {
  //   return {
  //     title: (doc.data()?.title || "My recent projects") as string,
  //     projects: ((doc.data()?.projects || []) as Project[]).sort(
  //       (a, b) => (b.order || 0) - (a.order || 0)
  //     ),
  //   };
  // }) as Promise<WorkProps>;
  const workProps =  Promise.resolve({
    title: "My recent projects",
    projects: [
      {
        title: "Point Of Sales API Project",
        start: "2020",
        end: "2020",
        descr: "Building a Point of Sale (POS) API using Node.js and JavaScript involves creating a backend service that can handle various operations related to sales transactions, inventory management, customer data, and more. ",
        order: 1,
        link: {
          text: "Point Of Sales",
          href: "http://ok.com"
        }
      },
      { 
        title: "Cat Adoption Platform API", 
        start: "1", 
        end: "2", 
        descr: "A web application designed to connect potential cat adopters with available cats in shelters or foster homes. The platform aims to streamline the adoption process by providing detailed profiles of cats, facilitating communication between adopters and shelters, and managing adoption applications. Build using Golang and Gin Framework", 
        order: 2, 
        link: { 
          text: "Cat Adoption Platform API", 
          href: "http://ok.com" 
        } 
      },
    ] as unknown as Project[],

  }) as Promise<WorkProps>;

  // Get props for contact section
  // const contactProps = getDoc(doc(db, "sections", "contact")).then((doc) => {
  //   return {
  //     title: (doc.data()?.title || "Get in touch") as string,
  //     contact: {
  //       linkedin: (doc.data()?.contact?.linkedin || "") as string,
  //       github: (doc.data()?.contact?.github || "") as string,
  //       mail: (doc.data()?.contact?.mail || "") as string,
  //       discord: (doc.data()?.contact?.discord || "") as string,
  //     },
  //   };
  // });
  const contactProps = Promise.resolve ({
    title: "Get in touch",
    contact: {
      linkedin: "linkedin.com/dummy",
      github: "github.com/dummy",
      mail: "dummy@example.com",
      discord: "dummy#1234",
    },
  });

  return {
    props: {
      landingProps: {
        ...(await landingProps),
        github: await contactProps.then((props) => props.contact.github), // Would be better to extract
      },
      aboutProps: await aboutProps,
      workProps: await workProps,
      contactProps: await contactProps,
      year: new Date().getFullYear(),
    },
    revalidate: parseInt(
      process.env.SECONDS_BETWEEN_REVALIDATION || "3600",
      10
    ),
  };
}

export default function Index({
  landingProps,
  aboutProps,
  workProps,
  contactProps,
  year,
}: {
  landingProps: LandingProps;
  aboutProps: AboutProps;
  workProps: WorkProps;
  contactProps: ContactProps;
  year: number;
}) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true);
    }

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        setIsDarkMode(e.matches);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Uqon Studio (Purkonuddin)</title>
        <meta
          name="description"
          content="Hi there, I am Purkonuddin and this is my personal website."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col w-full">
        <Navbar />
        <Landing {...landingProps} />
        <About {...aboutProps} />
        <Work {...workProps} />
        <Contact {...contactProps} />
        <Footer year={year} />
      </main>
    </>
  );
}
