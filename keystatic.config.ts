import { config, collection, singleton, fields } from '@keystatic/core';

export default config({
  storage:
    process.env.NODE_ENV === 'production'
      ? {
          kind: 'github',
          repo: 'gracelifemediavizag/grace-life-church-vizag-website',
        }
      : { kind: 'local' },

  ui: {
    brand: { name: 'Grace Life Church Vizag' },
  },

  // ─── Collections ────────────────────────────────────────────────────────────

  collections: {

    // Blog Posts
    blogPosts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'content/blog-posts/*',
      entryLayout: 'content',
      format: { contentField: 'content' },
      schema: {
        title:      fields.slug({ name: { label: 'Title' } }),
        author:     fields.text({ label: 'Author' }),
        authorRole: fields.text({ label: 'Author Role / Title', description: 'e.g. "Pastor, Grace Life Church"' }),
        date:       fields.date({ label: 'Date' }),
        readTime:   fields.text({ label: 'Read Time', description: 'e.g. "6 min read"' }),
        excerpt:    fields.text({ label: 'Excerpt', multiline: true, description: 'Short summary shown on the blog card and article header.' }),
        content:    fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: { directory: 'public/blog', publicPath: '/blog/' },
        }),
      },
    }),

    // Events
    events: collection({
      label: 'Events',
      slugField: 'title',
      path: 'content/events/*',
      schema: {
        title:       fields.slug({ name: { label: 'Event Title' } }),
        date:        fields.date({ label: 'Date' }),
        time:        fields.text({ label: 'Time', description: 'e.g. "8:30 AM – 10:00 AM"' }),
        location:    fields.text({ label: 'Location' }),
        description: fields.text({ label: 'Description', multiline: true }),
        isPast:      fields.checkbox({ label: 'Mark as past event', defaultValue: false }),
      },
    }),

    // Leadership
    leadership: collection({
      label: 'Leadership',
      slugField: 'name',
      path: 'content/leadership/*',
      format: { contentField: 'bio' },
      schema: {
        name:     fields.slug({ name: { label: 'Full Name' } }),
        title:    fields.text({ label: 'Role / Title', description: 'e.g. "Lead Pastor", "Elder"' }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Pastor',                  value: 'pastor'          },
            { label: 'Elder',                   value: 'elder'           },
            { label: 'Deacon',                  value: 'deacon'          },
            { label: 'Worship',                 value: 'worship'         },
            { label: 'Youth Ministry',          value: 'youth'           },
            { label: "Women's & Children's",    value: 'women-children'  },
            { label: 'Media Ministry',          value: 'media'           },
            { label: 'Staff',                   value: 'staff'           },
          ],
          defaultValue: 'elder',
        }),
        photo: fields.image({
          label: 'Photo',
          directory: 'public/leadership',
          publicPath: '/leadership/',
        }),
        order: fields.integer({
          label: 'Display Order',
          description: 'Lower numbers appear first.',
          defaultValue: 99,
          validation: { isRequired: true, min: 1 },
        }),
        bio: fields.document({
          label: 'Biography',
          formatting: true,
          dividers: true,
          links: true,
        }),
      },
    }),

    // Sermon Series
    sermonSeries: collection({
      label: 'Sermon Series',
      slugField: 'name',
      path: 'content/sermon-series/*',
      schema: {
        name:        fields.slug({ name: { label: 'Series Name' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        reference:   fields.text({ label: 'Scripture Reference', description: 'e.g. "1 Peter 1:1 – 5:14"' }),
        status:      fields.select({
          label: 'Status',
          options: [
            { label: 'Current', value: 'Current' },
            { label: 'Recent',  value: 'Recent'  },
            { label: 'Past',    value: 'Past'    },
          ],
          defaultValue: 'Current',
        }),
      },
    }),

    // Ministry Pages
    ministries: collection({
      label: 'Ministry Pages',
      slugField: 'name',
      path: 'content/ministries/*',
      format: { contentField: 'content' },
      schema: {
        name:     fields.slug({ name: { label: 'Ministry Name' } }),
        subtitle: fields.text({ label: 'Subtitle / Tagline', description: 'One-line description shown under the page title.' }),
        content:  fields.document({
          label: 'Page Content',
          formatting: true,
          dividers: true,
          links: true,
          images: { directory: 'public/ministries', publicPath: '/ministries/' },
        }),
      },
    }),

    // Testimonies
    testimonies: collection({
      label: 'Testimonies',
      slugField: 'person',
      path: 'content/testimonies/*',
      schema: {
        person:  fields.slug({ name: { label: 'Name' } }),
        role:    fields.text({ label: 'Role / Description', description: 'e.g. "Member since 2019"' }),
        photo:   fields.image({ label: 'Photo (optional)', directory: 'public/testimonies', publicPath: '/testimonies/' }),
        content: fields.text({ label: 'Testimony', multiline: true }),
      },
    }),
  },

  // ─── Singletons ─────────────────────────────────────────────────────────────

  singletons: {

    serviceTimes: singleton({
      label: 'Service Times',
      path: 'content/singletons/service-times',
      schema: {
        services: fields.array(
          fields.object({
            name: fields.text({ label: 'Service Name' }),
            day:  fields.text({ label: 'Day', description: 'e.g. "Sunday", "Wednesday", "2nd Friday"' }),
            time: fields.text({ label: 'Time', description: 'e.g. "8:30 AM – 10:00 AM"' }),
          }),
          {
            label: 'Services',
            itemLabel: (props) => props.fields.name.value || 'Service',
          }
        ),
      },
    }),

    siteSettings: singleton({
      label: 'Site Settings',
      path: 'content/singletons/site-settings',
      schema: {
        primaryContactName: fields.text({ label: 'Primary Contact Name'     }),
        phone1:             fields.text({ label: 'Primary Phone Number'      }),
        phone2:             fields.text({ label: 'Secondary Phone Number'    }),
        addressLine1:       fields.text({ label: 'Address Line 1'            }),
        addressLine2:       fields.text({ label: 'Address Line 2'            }),
        city:               fields.text({ label: 'City'                      }),
        state:              fields.text({ label: 'State'                     }),
        pincode:            fields.text({ label: 'Pincode'                   }),
        youtubeUrl:         fields.text({ label: 'YouTube Channel URL'       }),
        danielsuryaUrl:     fields.text({ label: 'Daniel Surya Website URL'  }),
        mapsUrl:            fields.text({ label: 'Google Maps URL'           }),
      },
    }),
  },
});
