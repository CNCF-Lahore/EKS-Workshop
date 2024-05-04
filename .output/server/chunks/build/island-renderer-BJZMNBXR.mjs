import { defineAsyncComponent, defineComponent, onErrorCaptured, createVNode } from 'vue';
import { c as createError } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vueuse/core';
import 'tailwind-merge';
import 'vue/server-renderer';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

const islandComponents = {
  "OgImageDocs": defineAsyncComponent(() => import(
    './OgImageDocs-4d7bJNVJ.mjs'
    /* webpackChunkName: "components/og-image-docs" */
  ).then((c) => c.default || c)),
  "OgImageTemplateFallback": defineAsyncComponent(() => import(
    './Fallback-DOolBmp9.mjs'
    /* webpackChunkName: "components/og-image-template-fallback" */
  ).then((c) => c.default || c))
};
const islandRenderer = defineComponent({
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const component = islandComponents[props.context.name];
    if (!component) {
      throw createError({
        statusCode: 404,
        statusMessage: `Island component not found: ${props.context.name}`
      });
    }
    onErrorCaptured((e) => {
      console.log(e);
    });
    return () => createVNode(component || "span", { ...props.context.props, "data-island-uid": "" });
  }
});

export { islandRenderer as default };
//# sourceMappingURL=island-renderer-BJZMNBXR.mjs.map
