// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

/**
 * @type {import('astro').AstroUserConfig}
 */
export default defineConfig({site: 'https://Liiqt.github.io',
  base: '/FinalStar',
  integrations: [
    starlight({ customCss: ["./src/styles/custom.css"],
      favicon: './public/favicon.png',
      title: "Final Star",
      plugins:[],
      social: [

      ],

      sidebar: [
        { label: "Home", slug: "index" },
        { label: "Introduction", slug: "introduction" },
        { label: "Timeline", slug: "timeline" },

        {
          label: "Species",
          items: [
            { label: "Overview", slug: "species" },

            {
              label: "Humans",
              items: [
                { label: "Overview", slug: "species/humans" },
                { label: "Biology", slug: "species/humans/biology" },
                { label: "Culture", slug: "species/humans/culture" },
                { label: "Planets", slug: "species/humans/planets" },

                {
                  label: "Military",
                  items: [
                    {
                      label: "Infantry",
                      slug: "species/humans/military/infantry",
                    },
                    {
                      label: "Ground Vehicles",
                      slug: "species/humans/military/ground-vehicles",
                    },
                    {
                      label: "Small Wing Aircraft",
                      slug: "species/humans/military/small-wing-aircraft",
                    },
                    { label: "Drones", slug: "species/humans/military/drones" },

                    {
                      label: "Ships",
                      items: [
                        {
                          label: "7th Generation",
                          items: [
                            {
                              label: "Thorn-class Line Frigate",
                              slug: "species/humans/military/ships/7th-gen/thorn-class-line-frigate",
                            },
                            {
                              label: "Bramble-class Assault Carrier",
                              slug: "species/humans/military/ships/7th-gen/bramble-class-assault-carrier",
                            },
                            {
                              label: "Rose-class Strategic Command Vessel",
                              slug: "species/humans/military/ships/7th-gen/rose-class-strategic-command-vessel",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },

            {
              label: "Slime Balls (Jinletma)",
              items: [
                { label: "Overview", slug: "species/slime-balls" },
                { label: "Biology", slug: "species/slime-balls/biology" },
              ],
            },

            {
              label: "Furbait",
              items: [
                { label: "Overview", slug: "species/furbait" },
                { label: "Biology", slug: "species/furbait/biology" },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
