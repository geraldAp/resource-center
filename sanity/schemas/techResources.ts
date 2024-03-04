import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "techResources",
  title: "Tech Resources",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Resource Title",
    }),
    defineField({
      name: "roadmap",
      type: "file",
      title: "Roadmap",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
    }),
    {
      name: "youtubeLinks",
      type: "array",
      title: "YouTube Links",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Video name",
            },
            {
              name: "videoLink",
              type: "url",
              title: "Youtube Link",
            },
            {
              name: "miniDescription",
              type: "string",
              title: "Mini Description",
            },
          ],
        },
      ],
    },
    {
      name: "webLinks",
      type: "array",
      title: "YouTube Links",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Website name",
            },
            {
              name: "websiteLink",
              type: "url",
              title: "Website Link",
            },
            {
              name: "miniDescription",
              type: "string",
              title: "Mini Description",
            },
          ],
        },
      ],
    },
  ],
});
