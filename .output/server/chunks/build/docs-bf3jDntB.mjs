import { I as __nuxt_component_0 } from './server.mjs';
import { defineComponent, inject, resolveComponent, withCtx, unref, createVNode, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
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
import '@iconify/vue/dist/offline';
import '@iconify/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "docs",
  __ssrInlineRender: true,
  setup(__props) {
    const navigation = inject("navigation");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_0;
      const _component_UPage = resolveComponent("UPage");
      const _component_UAside = resolveComponent("UAside");
      const _component_UNavigationTree = resolveComponent("UNavigationTree");
      _push(ssrRenderComponent(_component_UContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UPage, null, {
              left: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UAside, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UNavigationTree, {
                          links: _ctx.mapContentNavigation(unref(navigation))
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UNavigationTree, {
                            links: _ctx.mapContentNavigation(unref(navigation))
                          }, null, 8, ["links"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UAside, null, {
                      default: withCtx(() => [
                        createVNode(_component_UNavigationTree, {
                          links: _ctx.mapContentNavigation(unref(navigation))
                        }, null, 8, ["links"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UPage, null, {
                left: withCtx(() => [
                  createVNode(_component_UAside, null, {
                    default: withCtx(() => [
                      createVNode(_component_UNavigationTree, {
                        links: _ctx.mapContentNavigation(unref(navigation))
                      }, null, 8, ["links"])
                    ]),
                    _: 1
                  })
                ]),
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/docs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=docs-bf3jDntB.mjs.map
