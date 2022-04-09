const settings = [
  {
    "name": "lucis-blog",
    "match": [`${process.env.BLOG_URL}`],
    "state": {
      "frontity": {
        "url": process.env.BLOG_URL,
        "title": "Lucis blog",
        "description": "WordPress installation for Frontity development"
      }
    },
    "packages": [
      {
        "name": "lucis-theme",
      },
      {
        "name": "@frontity/wp-source",
        "state": {
          "source": {
            "api": process.env.API_URL,
          }
        }
      },
      "@frontity/tiny-router",
      "@frontity/html2react",
      "@frontity/yoast"
    ]
  },
  {
    "name": "lucis-blog-en",
    "match": [`${process.env.BLOG_URL}/en`],
    "state": {
      "frontity": {
        "url": `${process.env.BLOG_URL}/en`,
        "title": "Lucis blog english",
        "description": "WordPress installation for Frontity development"
      }
    },
    "packages": [
      {
        "name": "lucis-theme",
      },
      {
        "name": "@frontity/wp-source",
        "state": {
          "source": {
            "api": process.env.API_URL,
            "subdirectory": "/en",
            "params": {
              "lang": "en"
            },
          }
        }
      },
      "@frontity/tiny-router",
      "@frontity/html2react",
      "@frontity/yoast"
    ]
  }
]

export default settings
