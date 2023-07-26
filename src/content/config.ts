import { z, defineCollection, reference } from "astro:content";

const lines = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    color: z.string().length(7).startsWith("#"),
    stations: z.array(reference("stations")),
  }),
});

const stations = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    coordinates: z.array(z.number()).length(2),
    lines: z.array(reference("lines")),
  }),
});

export const collections = {
  lines,
  stations,
};
