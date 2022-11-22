import { Article } from "@types/Article";

export const articleMock: Article = {
  title: 'Lorem ipsum dolor sit amet',
  abstract: 'Sed mattis, est fermentum vulputate convallis, arcu velit congue nunc, vitae sagittis justo est luctus enim. Pellentesque vel tincidunt nunc. In euismod non risus sed ornare. Pellentesque eu tristique mi. Vivamus id nisi in sem semper tristique. In vitae vehicula tortor.',
  byline: 'Pellentesque ac faucibus',
  published_date: "2022-11-22T14:46:28-05:00",
  section: "Vestibulum semper",
  short_url: "https://nyti.ms/3GV15FF",
  subsection: "",
  updated_date: "2022-11-22T15:21:13-05:00",
  uri: "nyt://article/5deff3d6-f690-5a1f-a6ab-a2d47f7e1e0c",
  url: "https://www.nytimes.com/2022/11/22/us/supreme-court-trump-taxes-house-democrats.html",
  created_date: '',
  multimedia: [{
    caption: "Praesent auctor lectus sit amet lectus vestibulum semper.",
    copyright: "Fusce rutrum turpis ligula, a dapibus quam tempus quis",
    format: "Super Jumbo",
    height: 1365,
    subtype: "photo",
    type: "image",
    url: "https://static01.nyt.com/images/2022/11/17/us/politics/00dc-trump-taxes-HFO/merlin_216717552_49dd6730-9be7-4192-b155-3fc6fada5e48-superJumbo.jpg",
    width: 2048
  }]
}