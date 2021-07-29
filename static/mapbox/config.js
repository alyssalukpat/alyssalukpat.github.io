let topTitleDiv = "<h4>Points Unknown: Mapbox storytelling assignment</h4>";

let titleDiv =
  "<h1>A map of Rhode Island's crumbling bridges</h1>";

let bylineDiv = "<p>By Alyssa L</p>";

let descriptionDiv =
  '<p>Rhode Island has almost 150 bridges classified as in "poor" condition, state data show. Hundreds of other bridges are in "fair" or "good" condition.</p>' +
  '<p>I made this map for a class at Columbia Journalism School in the summer of 2021. I used Mapbox and two JavaScript libraries: Intersection Observer and Scrollama.</p>' +
  '<p style="text-align:center">Scroll to continue<br>▼</p>';

let footerDiv =
  '<p>This story uses data from the U.S. Department of Transportation.</p>';

let divChapter1 =
  "<h3>A grave problem</h3>" +
  '<img src="images/Chapter_1_Image.jpg">' +
  '<p class="imageCredit">Federal Highway Administration</p>' +
  "<p>Rhode Island, a state bordered by water on two sides, relies on bridges for transportation. But 150 bridges of the state's nearly 800 bridges are at risk of crumbling. That's one of the worst ratios in the country, experts say.</p>";

let divChapter2 =
  "<h3>A commute at risk, and a livelihood in danger</h3>" +
  '<img src="images/Chapter_2_Image.jpg">' +
  '<p class="imageCredit">narragansettri.gov</p>' +
  "<p>Some Rhode Island workers commute to islands just off the coast. If the bridges crumble, the state will have to reimagine many of its industries that depend on the ocean.</p>";

let divChapter3 =
  "<h3>Easton Pond</h3>" +
  '<img src="images/Chapter_3_Image.jpg">' +
  '<p class="imageCredit">loc.gov</p>' +
  "<p>The bridge over Easton Pond is one of the state's most important transport links. The bridge connects the western and eastern side of Newport, but its condition is questionable.</p>";

let divChapter4 =
  "<h3 style='max-width:600px; margin-left:auto; margin-right:auto'>A crumbling infrastructure</h3>" +
  '<div style="max-width:900px; margin-left:auto; margin-right:auto"><img src="images/Chapter_5_Image.jpg"></div>' +
  "<p class='imageCredit' style='max-width:600px; margin-left:auto; margin-right:auto'>bostonglobe.com</p>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>It remains to be seen if the state will repair the bridges.</p>";

let divChapter5 =
  "<h3>Dead Man Brook</h3>" +
  '<img src="images/Chapter_4_Image.jpg">' +
  '<p class="imageCredit">narragansettri.gov</p>' +
  "<p>The bridge over Dead Man Brook — yes, that's a real place — is an important thoroughfare in Narragansett. It's another bridge in danger of collapsing.</p>";

var config = {
  style: "mapbox://styles/alyssalukpat/ckrp140ce27tl18o14ze7a7jb",
  accessToken:
    "pk.eyJ1IjoiYWx5c3NhbHVrcGF0IiwiYSI6ImNraWdyMTFyYTBkbTUycm9pdjNicDl2bmQifQ.AO1hA7yxwknrobw_D6SeBw",
  showMarkers: false,
  markerColor: "#3FB1CE",
  theme: "light",
  use3dTerrain: false,
  topTitle: topTitleDiv,
  title: titleDiv,
  subtitle: "",
  byline: bylineDiv,
  description: descriptionDiv,
  footer: footerDiv,
  chapters: [
    {
      id: "overallMap",
      alignment: "left",
      hidden: false,
      chapterDiv: divChapter1,
      location: {
        center: [-71.542, 41.705],
        zoom: 8.8,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "incomeUnderlay",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter2,
      location: {
        center: [-71.568, 41.261],
        zoom: 10,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "medianIncome",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "eastonPond",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter3,
      location: {
        center: [-71.285, 41.49],
        zoom: 16,
        zoomSmall: 14,
        pitch: 40,
        bearing: -7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "weekdayTrips",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter4,
      location: {
        center: [-71.467, 41.395],
        zoom: 16,
        zoomSmall: 14,
        pitch: 40,
        bearing: -7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "southBronx",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter5,
      location: {
        center: [-71.459, 41.405],
        zoom: 15,
        zoomSmall: 14,
        pitch: 40,
        bearing: 8,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "medianIncome",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
    },
  ],
};