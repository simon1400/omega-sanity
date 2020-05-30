export default {
  name: 'article',
  title: 'Články',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Název',
      type: 'string'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title'
      }
    },
    {
      title: 'Kategorie',
      name: 'categoryP',
      type: 'reference',
      to: [{type: 'categoryArticles'}]
    },
    {
      title: 'Obrázek',
      name: 'image',
      type: 'image'
    },
    {
      name: 'content',
      title: 'Text',
      type: 'blockContent'
    },
    {
      name: 'titleHead',
      title: 'Titulek',
      type: 'string'
    },
    {
      title: 'Popisek',
      name: 'description',
      type: 'string'
    }
  ]
}
