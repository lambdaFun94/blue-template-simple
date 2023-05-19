/**
 * This is an example of how to create a static template that uses getStaticProps to retrieve data.
 */
import * as React from "react";
import "../index.css";
import {
  Template,
  GetPath,
  GetHeadConfig,
  HeadConfig,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Location } from '../components/Location'

/**
 * Not required depending on your use case.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "my-stream-id-1",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "mainPhone",
      "logo",
      "description",
      "hours",
      "slug",
      "geocodedCoordinate",
      "services",
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ["location"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ? document.slug : document.id;
};



export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = (): HeadConfig => {
  return {
  }
};


const Static: Template<TemplateRenderProps> = ({
  document,
}) => {
  const { description, logo, name, address, geocodedCoordinate } = document;

  return (
    <>
      <Header name={name} />
      <main>
        <Hero name={name} tagLine={name} description={description} />
        <Location geocodedCoordinate={geocodedCoordinate} address={address} name={name}></Location>
      </main>
      <Footer />
    </>
  );
};

export default Static;

/*
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />

*/
