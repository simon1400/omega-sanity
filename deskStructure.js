import S from "@sanity/desk-tool/structure-builder";

const hiddenDocTypes = listItem => ![
  "homepage",
  "article",
  "product",
  "categoryArticles",
  "category-products",
  "global",
  "settingsCategory",
  "param"
].includes(listItem.getId())

export default () =>
  S.list()
    .title("Obsah")
    .items([

      S.listItem()
        .title('Homepage')
        .child(
          S.editor()
            .schemaType('homepage')
            .documentId('homepage')
        ),

      S.divider(),

      S.listItem()
        .title('Produkty')
        .child(
          S.documentTypeList('product')
            .title('Produkty')
        ),

      S.listItem()
        .title('Kategorie produktů')
        .child(
          S.documentTypeList('category-products')
            .title('Kategorie produktů')
        ),

      S.listItem()
        .title('Parametry')
        .child(
          S.documentTypeList('param')
            .title('Parametry')
        ),

      S.divider(),

      S.listItem()
        .title('Clanky')
        .child(
          S.documentTypeList('article')
            .title('Clanky')
        ),

      S.listItem()
        .title('Kategorie clanku')
        .child(
          S.documentTypeList('categoryArticles')
            .title('Kategorie clanku')
        ),

      S.divider(),

      S.listItem()
        .title('Globalni nastaveni')
        .child(
          S.editor()
            .schemaType('global')
            .documentId('global')
        ),
      S.listItem()
        .title('Nastavení kategorií')
        .child(
          S.editor()
            .schemaType('settingsCategory')
            .documentId('settingsCategory')
        )

      // ...S.documentTypeListItems()
      //     .filter(hiddenDocTypes)

    ]);
