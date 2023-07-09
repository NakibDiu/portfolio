import AnimatedText from "@/components/AnimatedText";
import { GithubIcon, GithubIcon2 } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/top-spin.png";
import project2 from "../../public/images/projects/toy-factory.png";
import project3 from "../../public/images/projects/italiano.png";
import project4 from "../../public/images/projects/carreer-bridge.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProjects = ({
  type,
  title,
  summery,
  img,
  link,
  githubFront,
  githubBack,
}) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light xs:right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col  items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summery}
        </p>
        <div className="mt-2 flex items-center gap-x-4">
          <Link
            href={githubFront}
            target="_blank"
            className="w-14 flex flex-col items-center"
          >
            <GithubIcon />
            <span className="text-xs">Frontend</span>
          </Link>
          <Link
            href={githubBack}
            target="_blank"
            className="w-14 flex flex-col items-center"
          >
            <GithubIcon />
            <span className="text-xs">Backend</span>
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 font-semibold text-lg dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project = ({ type, title, img, link, githubFront, githubBack }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>

      <div className="w-full flex flex-col  items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="mt-2 flex items-center justify-between w-full">
          <Link
            href={link}
            target="_blank"
            className="font-semibold text-lg underline md:text-base"
          >
            Visit
          </Link>
          <div className="flex items-center gap-x-12">
            <Link href={githubFront} target="_blank" className="w-8 md:w-6 flex flex-col items-center">
              <GithubIcon />
              <span className="text-xs text-center">Frontend</span>
            </Link>
            <Link href={githubBack} target="_blank" className="w-8 md:w-6 flex items-center flex-col">
              <GithubIcon />
              <span className="text-xs text-center">Backend</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Nakib | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProjects
                title="Table Tennis Summer Camp"
                img={project1}
                summery="A feature-rich summer camp website where three types of users are there. Admin, Instructor and Studets. Admin has authority to change the user role and also manage the classes added by the instructors. An instructor can add, update and remove their classes and view analytics of their classes. Student can list their favorite classes and enrolled into important classes after payment. Payment gateway implemented by Stripe. For authentication, I have used firebase and mongoDB is used for database."
                link="https://topspin-2b7d8.web.app/"
                type="Featured Project"
                githubFront="https://github.com/NakibDiu/topspin-client"
                githubBack="https://github.com/NakibDiu/topspin-backend"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Italian Recipes of popular chefs"
                img={project3}
                link="https://italiano-3660a.web.app/"
                type="Featured Project"
                githubFront="https://github.com/NakibDiu/italiano-client"
                githubBack="https://github.com/NakibDiu/italiano-backend"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="A Simple Job website"
                img={project4}
                link="https://papaya-syrniki-04c2af.netlify.app/"
                type="Featured Project"
                githubFront="https://github.com/NakibDiu/carreer-bridge"
                githubBack="/#"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProjects
                title="Marvel's Toys Website"
                img={project2}
                summery="Toy Factory is an interactive website offering a seamless user experience. With email, password, and Google sign-in options, users can securely authenticate and manage their toy collection. Create, update, and delete your very own toy collection. Non-logged in users can browse toys and add them to their favorites list. Enjoy endless toy discovery!"
                link="https://toy-factory-e8dd7.web.app/"
                type="Featured Project"
                githubFront="https://github.com/NakibDiu/toyfactory-client"
                githubBack="https://github.com/NakibDiu/toyfactory-backend"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
