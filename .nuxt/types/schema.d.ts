import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["uiPro"]?: typeof import("/workspace/EKS-Workshop/node_modules/.pnpm/@nuxt+ui-pro@1.1.0_nuxt@3.11.1_vite@5.2.6_vue@3.4.21/node_modules/@nuxt/ui-pro/modules/pro/index").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["mdc"]?: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["icon"]?: typeof import("nuxt-icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["colorMode"]?: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["ui"]?: typeof import("@nuxt/ui").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["fonts"]?: typeof import("@nuxt/fonts").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["studio"]?: typeof import("@nuxthq/studio").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["site"]?: typeof import("/workspace/EKS-Workshop/node_modules/.pnpm/nuxt-site-config@1.6.7_@nuxt+devtools@1.1.4_@vue+compiler-core@3.4.21_nuxt@3.11.1_postcss@8.4_we3wzvecqybchgar6wa7djdtbe/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["ogImage"]?: typeof import("nuxt-og-image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["/workspace/EKS-Workshop/node_modules/.pnpm/@nuxt+ui-pro@1.1.0_nuxt@3.11.1_vite@5.2.6_vue@3.4.21/node_modules/@nuxt/ui-pro/modules/pro/index", Exclude<NuxtConfig["uiPro"], boolean>] | ["@nuxtjs/mdc", Exclude<NuxtConfig["mdc"], boolean>] | ["@nuxt/content", Exclude<NuxtConfig["content"], boolean>] | ["nuxt-icon", Exclude<NuxtConfig["icon"], boolean>] | ["@nuxtjs/color-mode", Exclude<NuxtConfig["colorMode"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@nuxt/ui", Exclude<NuxtConfig["ui"], boolean>] | ["@nuxt/fonts", Exclude<NuxtConfig["fonts"], boolean>] | ["@nuxthq/studio", Exclude<NuxtConfig["studio"], boolean>] | ["/workspace/EKS-Workshop/node_modules/.pnpm/nuxt-site-config@1.6.7_@nuxt+devtools@1.1.4_@vue+compiler-core@3.4.21_nuxt@3.11.1_postcss@8.4_we3wzvecqybchgar6wa7djdtbe/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["nuxt-og-image", Exclude<NuxtConfig["ogImage"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   content: {
      cacheVersion: number,

      cacheIntegrity: string,

      transformers: Array<any>,

      base: string,

      api: {
         baseURL: string,
      },

      watch: {
         ws: {
            port: {
               port: number,

               portRange: Array<number>,
            },

            hostname: string,

            showURL: boolean,
         },
      },

      sources: any,

      ignores: Array<any>,

      locales: Array<any>,

      defaultLocale: any,

      highlight: {
         theme: {
            light: string,

            default: string,

            dark: string,
         },

         preload: Array<string>,

         highlighter: string,

         langs: Array<string>,
      },

      markdown: {
         tags: {
            p: string,

            a: string,

            blockquote: string,

            "code-inline": string,

            code: string,

            em: string,

            h1: string,

            h2: string,

            h3: string,

            h4: string,

            h5: string,

            h6: string,

            hr: string,

            img: string,

            ul: string,

            ol: string,

            li: string,

            strong: string,

            table: string,

            thead: string,

            tbody: string,

            td: string,

            th: string,

            tr: string,
         },

         anchorLinks: {
            depth: number,

            exclude: Array<number>,
         },

         remarkPlugins: any,

         rehypePlugins: any,
      },

      yaml: any,

      csv: {
         delimeter: string,

         json: boolean,
      },

      navigation: {
         fields: Array<string>,
      },

      contentHead: boolean,

      documentDriven: boolean,

      respectPathCase: boolean,

      experimental: {
         clientDB: boolean,

         cacheContents: boolean,

         stripQueryParameters: boolean,

         advanceQuery: boolean,

         search: any,
      },
   },

   "nuxt-site-config": {
      stack: Array<{

      }>,

      version: string,

      debug: boolean,
   },

   "nuxt-og-image": {
      version: string,

      satoriOptions: any,

      runtimeSatori: boolean,

      runtimeBrowser: boolean,

      defaults: {
         provider: string,

         component: string,

         width: number,

         height: number,

         cache: boolean,

         cacheTtl: number,
      },

      runtimeCacheStorage: string,

      fonts: Array<{

      }>,

      assetDirs: Array<string>,
   },

   appConfigSchema: {
      properties: {
         id: string,

         properties: {
            nuxtIcon: {
               title: string,

               description: string,

               id: string,

               properties: {
                  size: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     tsType: string,

                     id: string,

                     default: string,

                     type: string,
                  },

                  class: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     default: string,

                     type: string,
                  },

                  aliases: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     tsType: string,

                     id: string,

                     default: any,

                     type: string,
                  },

                  iconifyApiOptions: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        url: {
                           title: string,

                           description: string,

                           tags: Array<string>,

                           id: string,

                           default: string,

                           type: string,
                        },

                        publicApiFallback: {
                           title: string,

                           description: string,

                           tags: Array<string>,

                           id: string,

                           default: boolean,

                           type: string,
                        },
                     },

                     type: string,

                     default: {
                        url: string,

                        publicApiFallback: boolean,
                     },
                  },
               },

               type: string,

               default: {
                  size: string,

                  class: string,

                  aliases: any,

                  iconifyApiOptions: {
                     url: string,

                     publicApiFallback: boolean,
                  },
               },
            },

            ui: {
               title: string,

               description: string,

               tags: Array<string>,

               id: string,

               properties: {
                  icons: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        search: {
                           type: string,

                           title: string,

                           description: string,

                           default: string,

                           tags: Array<string>,

                           id: string,
                        },

                        dark: {
                           type: string,

                           title: string,

                           description: string,

                           default: string,

                           tags: Array<string>,

                           id: string,
                        },

                        light: {
                           type: string,

                           title: string,

                           description: string,

                           default: string,

                           tags: Array<string>,

                           id: string,
                        },

                        external: {
                           type: string,

                           title: string,

                           description: string,

                           default: string,

                           tags: Array<string>,

                           id: string,
                        },

                        chevron: {
                           type: string,

                           title: string,

                           description: string,

                           default: string,

                           tags: Array<string>,

                           id: string,
                        },

                        hash: {
                           type: string,

                           title: string,

                           description: string,

                           default: string,

                           tags: Array<string>,

                           id: string,
                        },
                     },

                     type: string,

                     default: {
                        search: string,

                        dark: string,

                        light: string,

                        external: string,

                        chevron: string,

                        hash: string,
                     },
                  },

                  primary: {
                     type: string,

                     title: string,

                     description: string,

                     default: string,

                     required: Array<string>,

                     tags: Array<string>,

                     id: string,
                  },

                  gray: {
                     type: string,

                     title: string,

                     description: string,

                     default: string,

                     required: Array<string>,

                     tags: Array<string>,

                     id: string,
                  },
               },

               type: string,

               default: {
                  icons: {
                     search: string,

                     dark: string,

                     light: string,

                     external: string,

                     chevron: string,

                     hash: string,
                  },

                  primary: string,

                  gray: string,
               },
            },

            seo: {
               title: string,

               description: string,

               tags: Array<string>,

               id: string,

               properties: {
                  siteName: {
                     type: string,

                     title: string,

                     description: string,

                     default: Array<any>,

                     tags: Array<string>,

                     id: string,
                  },
               },

               type: string,

               default: {
                  siteName: Array<any>,
               },
            },

            header: {
               title: string,

               description: string,

               tags: Array<string>,

               id: string,

               properties: {
                  logo: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        light: {
                           type: string,

                           title: string,

                           description: string,

                           default: string,

                           tags: Array<string>,

                           id: string,
                        },

                        dark: {
                           type: string,

                           title: string,

                           description: string,

                           default: string,

                           tags: Array<string>,

                           id: string,
                        },

                        alt: {
                           type: string,

                           title: string,

                           description: string,

                           default: string,

                           tags: Array<string>,

                           id: string,
                        },
                     },

                     type: string,

                     default: {
                        light: string,

                        dark: string,

                        alt: string,
                     },
                  },

                  search: {
                     type: string,

                     title: string,

                     description: string,

                     default: boolean,

                     tags: Array<string>,

                     id: string,
                  },

                  colorMode: {
                     type: string,

                     title: string,

                     description: string,

                     default: boolean,

                     tags: Array<string>,

                     id: string,
                  },

                  links: {
                     type: string,

                     title: string,

                     description: string,

                     default: Array<any>,

                     tags: Array<string>,

                     id: string,

                     items: {
                        type: string,
                     },
                  },
               },

               type: string,

               default: {
                  logo: {
                     light: string,

                     dark: string,

                     alt: string,
                  },

                  search: boolean,

                  colorMode: boolean,

                  links: Array<any>,
               },
            },

            footer: {
               title: string,

               description: string,

               tags: Array<string>,

               id: string,

               properties: {
                  credits: {
                     type: string,

                     title: string,

                     description: string,

                     default: string,

                     tags: Array<string>,

                     id: string,
                  },

                  colorMode: {
                     type: string,

                     title: string,

                     description: string,

                     default: boolean,

                     tags: Array<string>,

                     id: string,
                  },

                  links: {
                     type: string,

                     title: string,

                     description: string,

                     default: Array<any>,

                     tags: Array<string>,

                     id: string,

                     items: {
                        type: string,
                     },
                  },
               },

               type: string,

               default: {
                  credits: string,

                  colorMode: boolean,

                  links: Array<any>,
               },
            },

            toc: {
               title: string,

               description: string,

               tags: Array<string>,

               id: string,

               properties: {
                  title: {
                     type: string,

                     title: string,

                     description: string,

                     default: string,

                     tags: Array<string>,

                     id: string,
                  },

                  bottom: {
                     title: string,

                     description: string,

                     tags: Array<string>,

                     id: string,

                     properties: {
                        title: {
                           type: string,

                           title: string,

                           description: string,

                           default: string,

                           tags: Array<string>,

                           id: string,
                        },

                        edit: {
                           type: string,

                           title: string,

                           description: string,

                           default: string,

                           tags: Array<string>,

                           id: string,
                        },

                        links: {
                           type: string,

                           title: string,

                           description: string,

                           default: Array<any>,

                           tags: Array<string>,

                           id: string,

                           items: {
                              type: string,
                           },
                        },
                     },

                     type: string,

                     default: {
                        title: string,

                        edit: string,

                        links: Array<any>,
                     },
                  },
               },

               type: string,

               default: {
                  title: string,

                  bottom: {
                     title: string,

                     edit: string,

                     links: Array<any>,
                  },
               },
            },
         },

         type: string,

         default: {
            nuxtIcon: {
               size: string,

               class: string,

               aliases: any,

               iconifyApiOptions: {
                  url: string,

                  publicApiFallback: boolean,
               },
            },

            ui: {
               icons: {
                  search: string,

                  dark: string,

                  light: string,

                  external: string,

                  chevron: string,

                  hash: string,
               },

               primary: string,

               gray: string,
            },

            seo: {
               siteName: Array<any>,
            },

            header: {
               logo: {
                  light: string,

                  dark: string,

                  alt: string,
               },

               search: boolean,

               colorMode: boolean,

               links: Array<any>,
            },

            footer: {
               credits: string,

               colorMode: boolean,

               links: Array<any>,
            },

            toc: {
               title: string,

               bottom: {
                  title: string,

                  edit: string,

                  links: Array<any>,
               },
            },
         },
      },

      default: {
         nuxtIcon: {
            size: string,

            class: string,

            aliases: any,

            iconifyApiOptions: {
               url: string,

               publicApiFallback: boolean,
            },
         },

         ui: {
            icons: {
               search: string,

               dark: string,

               light: string,

               external: string,

               chevron: string,

               hash: string,
            },

            primary: string,

            gray: string,
         },

         seo: {
            siteName: Array<any>,
         },

         header: {
            logo: {
               light: string,

               dark: string,

               alt: string,
            },

            search: boolean,

            colorMode: boolean,

            links: Array<any>,
         },

         footer: {
            credits: string,

            colorMode: boolean,

            links: Array<any>,
         },

         toc: {
            title: string,

            bottom: {
               title: string,

               edit: string,

               links: Array<any>,
            },
         },
      },
   },

   contentSchema: any,
  }
  interface PublicRuntimeConfig {
   mdc: {
      components: {
         prose: boolean,

         map: {
            p: string,

            a: string,

            blockquote: string,

            "code-inline": string,

            code: string,

            em: string,

            h1: string,

            h2: string,

            h3: string,

            h4: string,

            h5: string,

            h6: string,

            hr: string,

            img: string,

            ul: string,

            ol: string,

            li: string,

            strong: string,

            table: string,

            thead: string,

            tbody: string,

            td: string,

            th: string,

            tr: string,
         },
      },

      headings: {
         anchorLinks: {
            h1: boolean,

            h2: boolean,

            h3: boolean,

            h4: boolean,

            h5: boolean,

            h6: boolean,
         },
      },
   },

   content: {
      locales: Array<any>,

      defaultLocale: any,

      integrity: any,

      experimental: {
         stripQueryParameters: boolean,

         advanceQuery: boolean,

         clientDB: boolean,
      },

      respectPathCase: boolean,

      api: {
         baseURL: string,
      },

      navigation: {
         fields: Array<string>,
      },

      tags: {
         p: string,

         a: string,

         blockquote: string,

         "code-inline": string,

         code: string,

         em: string,

         h1: string,

         h2: string,

         h3: string,

         h4: string,

         h5: string,

         h6: string,

         hr: string,

         img: string,

         ul: string,

         ol: string,

         li: string,

         strong: string,

         table: string,

         thead: string,

         tbody: string,

         td: string,

         th: string,

         tr: string,
      },

      highlight: {
         theme: {
            light: string,

            default: string,

            dark: string,
         },

         preload: Array<string>,

         highlighter: string,

         langs: Array<string>,
      },

      wsUrl: string,

      documentDriven: boolean,

      host: string,

      trailingSlash: boolean,

      search: any,

      contentHead: boolean,

      anchorLinks: {
         depth: number,

         exclude: Array<number>,
      },
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }