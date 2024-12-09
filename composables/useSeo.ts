interface SeoObject {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
}

export const useSeo = (seo: SeoObject) => {
  const { FRONTEND_URL } = useRuntimeConfig().public;
  const route = useRoute();
  const siteTitle = "Nuxt3 Base";
  const twitterHandle = "@nuxt_js";

  const defaultSeo = {
    title: "",
    description: "",
    image: "",
    type: "website",
  };

  // Merge default and page-specific SEO data
  const fullSeo = {
    ...defaultSeo,
    ...seo,
  };

  const head = {
    titleTemplate: route.path === "/" ? `${siteTitle} | %s` : `%s | ${siteTitle}`,
    title: fullSeo.title,
    meta: [
      {
        hid: "og:type",
        property: "og:type",
        content: fullSeo.type,
      },
      {
        hid: "og:url",
        property: "og:url",
        content: FRONTEND_URL + route.path,
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: siteTitle,
      },
      {
        hid: "apple-mobile-web-app-title",
        property: "apple-mobile-web-app-title",
        content: siteTitle,
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        hid: "twitter:creator",
        name: "twitter:creator",
        content: twitterHandle,
      },
      {
        hid: "twitter:site",
        name: "twitter:site",
        content: twitterHandle,
      },
    ],
    // script: [],
  };

  if (fullSeo.title) {
    head.meta.push(
      {
        hid: "og:title",
        property: "og:title",
        content: fullSeo.title,
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: fullSeo.title,
      },
    );
  }

  if (fullSeo.description) {
    head.meta.push(
      {
        hid: "description",
        name: "description",
        content: fullSeo.description,
      },
      {
        hid: "og:description",
        property: "og:description",
        content: fullSeo.description,
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: fullSeo.description,
      },
    );
  }

  if (fullSeo.image) {
    head.meta.push(
      {
        hid: "image",
        name: "image",
        content: fullSeo.image,
      },
      {
        hid: "og:image",
        property: "og:image",
        content: fullSeo.image,
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: fullSeo.image,
      },
    );
  }

  useHead({
    ...head,
  });
}
