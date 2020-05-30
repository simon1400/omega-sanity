export default {
  name: 'settingsCategory',
  title: 'Nastavení kategorií',
  type: 'document',
  fields: [
    {
      title: 'Výpis kategorie produktů',
      name: 'products',
      type: 'object',
      fields: [
        {
          title: 'Nadpis',
          name: 'title',
          type: 'string'
        },
        {
          title: 'Obrázek',
          name: 'image',
          type: 'image'
        },
        {
          title: 'Text',
          name: 'content',
          type: 'blockContent'
        }
      ]
    },
    {
      title: 'Výpis kategore článků',
      name: 'articles',
      type: 'object',
      fields: [
        {
          title: 'Nadpis',
          name: 'title',
          type: 'string'
        },
        {
          title: 'Obrázek',
          name: 'image',
          type: 'image'
        },
        {
          title: 'Text',
          name: 'content',
          type: 'blockContent'
        }
      ]
    }
  ]
}
