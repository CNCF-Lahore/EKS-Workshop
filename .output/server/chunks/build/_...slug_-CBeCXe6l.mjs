import _sfc_main$2 from './ContentRenderer-Hqid709l.mjs';
import { m as mergeConfig, a as appConfig, b as __nuxt_component_2$2, d as __nuxt_component_1$1, u as useUI, e as useRoute, f as useAppConfig, g as useAsyncData, q as queryContent, c as createError, h as useSeoMeta, _ as _export_sfc } from './server.mjs';
import { defineComponent, toRef, computed, useSSRContext, withAsyncContext, resolveComponent, createSlots, withCtx, unref, openBlock, createBlock, createCommentVNode, createVNode, mergeProps } from 'vue';
import { twMerge, twJoin } from 'tailwind-merge';
import { ssrRenderComponent, ssrRenderClass, ssrRenderAttrs, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { d as defineOgImage } from './defineOgImage-BRy3AfRn.mjs';
import { w as withoutTrailingSlash } from '../runtime.mjs';
import './ContentRendererMarkdown-BmbrZjeL.mjs';
import './MDCRenderer-D_89Ns6j.mjs';
import 'property-information';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vueuse/core';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
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
import './useSiteConfig-DQ5VxaS3.mjs';

const divider = {
  wrapper: {
    base: "flex items-center align-center text-center w-full",
    horizontal: "flex-row",
    vertical: "flex-col"
  },
  container: {
    base: "font-medium text-gray-700 dark:text-gray-200 flex",
    horizontal: "mx-3 whitespace-nowrap",
    vertical: "my-2"
  },
  border: {
    base: "flex border-gray-200 dark:border-gray-800",
    horizontal: "w-full",
    vertical: "h-full",
    size: {
      horizontal: {
        "2xs": "border-t",
        xs: "border-t-[2px]",
        sm: "border-t-[3px]",
        md: "border-t-[4px]",
        lg: "border-t-[5px]",
        xl: "border-t-[6px]"
      },
      vertical: {
        "2xs": "border-s",
        xs: "border-s-[2px]",
        sm: "border-s-[3px]",
        md: "border-s-[4px]",
        lg: "border-s-[5px]",
        xl: "border-s-[6px]"
      }
    },
    type: {
      solid: "border-solid",
      dotted: "border-dotted",
      dashed: "border-dashed"
    }
  },
  icon: {
    base: "flex-shrink-0 w-5 h-5"
  },
  avatar: {
    base: "flex-shrink-0",
    size: "2xs"
  },
  label: "text-sm",
  default: {
    size: "2xs"
  }
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.divider, divider);
const _sfc_main$1 = defineComponent({
  components: {
    UIcon: __nuxt_component_2$2,
    UAvatar: __nuxt_component_1$1
  },
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    avatar: {
      type: Object,
      default: null
    },
    size: {
      type: String,
      default: () => config.default.size,
      validator(value) {
        return Object.keys(config.border.size.horizontal).includes(value) || Object.keys(config.border.size.vertical).includes(value);
      }
    },
    orientation: {
      type: String,
      default: "horizontal",
      validator: (value) => ["horizontal", "vertical"].includes(value)
    },
    type: {
      type: String,
      default: "solid",
      validator: (value) => ["solid", "dotted", "dashed"].includes(value)
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("divider", toRef(props, "ui"), config);
    const wrapperClass = computed(() => {
      return twMerge(twJoin(
        ui.value.wrapper.base,
        ui.value.wrapper[props.orientation]
      ), props.class);
    });
    const containerClass = computed(() => {
      return twJoin(
        ui.value.container.base,
        ui.value.container[props.orientation]
      );
    });
    const borderClass = computed(() => {
      return twJoin(
        ui.value.border.base,
        ui.value.border[props.orientation],
        ui.value.border.size[props.orientation][props.size],
        ui.value.border.type[props.type]
      );
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      wrapperClass,
      containerClass,
      borderClass
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_2$2;
  const _component_UAvatar = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: _ctx.wrapperClass }, _ctx.attrs, _attrs))}><div class="${ssrRenderClass(_ctx.borderClass)}"></div>`);
  if (_ctx.label || _ctx.icon || _ctx.avatar || _ctx.$slots.default) {
    _push(`<!--[--><div class="${ssrRenderClass(_ctx.containerClass)}">`);
    ssrRenderSlot(_ctx.$slots, "default", {}, () => {
      if (_ctx.label) {
        _push(`<span class="${ssrRenderClass(_ctx.ui.label)}">${ssrInterpolate(_ctx.label)}</span>`);
      } else if (_ctx.icon) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: _ctx.icon,
          class: _ctx.ui.icon.base
        }, null, _parent));
      } else if (_ctx.avatar) {
        _push(ssrRenderComponent(_component_UAvatar, mergeProps({ size: _ctx.ui.avatar.size, ..._ctx.avatar }, {
          class: _ctx.ui.avatar.base
        }), null, _parent));
      } else {
        _push(`<!---->`);
      }
    }, _push, _parent);
    _push(`</div><div class="${ssrRenderClass(_ctx.borderClass)}"></div><!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.15.0_nuxt@3.11.1_vite@5.2.6_vue@3.4.21/node_modules/@nuxt/ui/dist/runtime/components/layout/Divider.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { toc, seo } = useAppConfig();
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(route.path, () => queryContent(route.path).findOne(), "$aROEKgqrzL")), __temp = await __temp, __restore(), __temp);
    if (!page.value) {
      throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true });
    }
    const { data: surround } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `${route.path}-surround`,
      () => queryContent().where({ _extension: "md", navigation: { $ne: false } }).only(["title", "description", "_path"]).findSurround(withoutTrailingSlash(route.path))
    )), __temp = await __temp, __restore(), __temp);
    useSeoMeta({
      title: page.value.title,
      ogTitle: `${page.value.title} - ${seo == null ? void 0 : seo.siteName}`,
      description: page.value.description,
      ogDescription: page.value.description
    });
    defineOgImage({
      component: "Docs",
      title: page.value.title,
      description: page.value.description
    });
    const headline = computed(() => findPageHeadline(page.value));
    const links = computed(() => {
      var _a, _b, _c;
      return [((_a = toc == null ? void 0 : toc.bottom) == null ? void 0 : _a.edit) && {
        icon: "i-heroicons-pencil-square",
        label: "Edit this page",
        to: `${toc.bottom.edit}/${(_b = page == null ? void 0 : page.value) == null ? void 0 : _b._file}`,
        target: "_blank"
      }, ...((_c = toc == null ? void 0 : toc.bottom) == null ? void 0 : _c.links) || []].filter(Boolean);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPage = resolveComponent("UPage");
      const _component_UPageHeader = resolveComponent("UPageHeader");
      const _component_UPageBody = resolveComponent("UPageBody");
      const _component_ContentRenderer = _sfc_main$2;
      const _component_UContentSurround = resolveComponent("UContentSurround");
      const _component_UContentToc = resolveComponent("UContentToc");
      const _component_UDivider = __nuxt_component_1;
      const _component_UPageLinks = resolveComponent("UPageLinks");
      _push(ssrRenderComponent(_component_UPage, _attrs, createSlots({
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UPageHeader, {
              title: unref(page).title,
              description: unref(page).description,
              links: unref(page).links,
              headline: unref(headline)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UPageBody, { prose: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  if (unref(page).body) {
                    _push3(ssrRenderComponent(_component_ContentRenderer, { value: unref(page) }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if ((_a = unref(surround)) == null ? void 0 : _a.length) {
                    _push3(`<hr${_scopeId2}>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UContentSurround, { surround: unref(surround) }, null, _parent3, _scopeId2));
                } else {
                  return [
                    unref(page).body ? (openBlock(), createBlock(_component_ContentRenderer, {
                      key: 0,
                      value: unref(page)
                    }, null, 8, ["value"])) : createCommentVNode("", true),
                    ((_b = unref(surround)) == null ? void 0 : _b.length) ? (openBlock(), createBlock("hr", { key: 1 })) : createCommentVNode("", true),
                    createVNode(_component_UContentSurround, { surround: unref(surround) }, null, 8, ["surround"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UPageHeader, {
                title: unref(page).title,
                description: unref(page).description,
                links: unref(page).links,
                headline: unref(headline)
              }, null, 8, ["title", "description", "links", "headline"]),
              createVNode(_component_UPageBody, { prose: "" }, {
                default: withCtx(() => {
                  var _a;
                  return [
                    unref(page).body ? (openBlock(), createBlock(_component_ContentRenderer, {
                      key: 0,
                      value: unref(page)
                    }, null, 8, ["value"])) : createCommentVNode("", true),
                    ((_a = unref(surround)) == null ? void 0 : _a.length) ? (openBlock(), createBlock("hr", { key: 1 })) : createCommentVNode("", true),
                    createVNode(_component_UContentSurround, { surround: unref(surround) }, null, 8, ["surround"])
                  ];
                }),
                _: 1
              })
            ];
          }
        }),
        _: 2
      }, [
        unref(page).toc !== false ? {
          name: "right",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            if (_push2) {
              _push2(ssrRenderComponent(_component_UContentToc, {
                title: (_a = unref(toc)) == null ? void 0 : _a.title,
                links: (_c = (_b = unref(page).body) == null ? void 0 : _b.toc) == null ? void 0 : _c.links
              }, createSlots({ _: 2 }, [
                ((_d = unref(toc)) == null ? void 0 : _d.bottom) ? {
                  name: "bottom",
                  fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i, _j, _k, _l;
                    if (_push3) {
                      _push3(`<div class="${ssrRenderClass([{ "!mt-6": (_c2 = (_b2 = (_a2 = unref(page).body) == null ? void 0 : _a2.toc) == null ? void 0 : _b2.links) == null ? void 0 : _c2.length }, "hidden lg:block space-y-6"])}"${_scopeId2}>`);
                      if ((_f2 = (_e2 = (_d2 = unref(page).body) == null ? void 0 : _d2.toc) == null ? void 0 : _e2.links) == null ? void 0 : _f2.length) {
                        _push3(ssrRenderComponent(_component_UDivider, { type: "dashed" }, null, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(ssrRenderComponent(_component_UPageLinks, {
                        title: unref(toc).bottom.title,
                        links: unref(links)
                      }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: ["hidden lg:block space-y-6", { "!mt-6": (_i = (_h2 = (_g2 = unref(page).body) == null ? void 0 : _g2.toc) == null ? void 0 : _h2.links) == null ? void 0 : _i.length }]
                        }, [
                          ((_l = (_k = (_j = unref(page).body) == null ? void 0 : _j.toc) == null ? void 0 : _k.links) == null ? void 0 : _l.length) ? (openBlock(), createBlock(_component_UDivider, {
                            key: 0,
                            type: "dashed"
                          })) : createCommentVNode("", true),
                          createVNode(_component_UPageLinks, {
                            title: unref(toc).bottom.title,
                            links: unref(links)
                          }, null, 8, ["title", "links"])
                        ], 2)
                      ];
                    }
                  }),
                  key: "0"
                } : void 0
              ]), _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UContentToc, {
                  title: (_e = unref(toc)) == null ? void 0 : _e.title,
                  links: (_g = (_f = unref(page).body) == null ? void 0 : _f.toc) == null ? void 0 : _g.links
                }, createSlots({ _: 2 }, [
                  ((_h = unref(toc)) == null ? void 0 : _h.bottom) ? {
                    name: "bottom",
                    fn: withCtx(() => {
                      var _a2, _b2, _c2, _d2, _e2, _f2;
                      return [
                        createVNode("div", {
                          class: ["hidden lg:block space-y-6", { "!mt-6": (_c2 = (_b2 = (_a2 = unref(page).body) == null ? void 0 : _a2.toc) == null ? void 0 : _b2.links) == null ? void 0 : _c2.length }]
                        }, [
                          ((_f2 = (_e2 = (_d2 = unref(page).body) == null ? void 0 : _d2.toc) == null ? void 0 : _e2.links) == null ? void 0 : _f2.length) ? (openBlock(), createBlock(_component_UDivider, {
                            key: 0,
                            type: "dashed"
                          })) : createCommentVNode("", true),
                          createVNode(_component_UPageLinks, {
                            title: unref(toc).bottom.title,
                            links: unref(links)
                          }, null, 8, ["title", "links"])
                        ], 2)
                      ];
                    }),
                    key: "0"
                  } : void 0
                ]), 1032, ["title", "links"])
              ];
            }
          }),
          key: "0"
        } : void 0
      ]), _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...slug_-CBeCXe6l.mjs.map
