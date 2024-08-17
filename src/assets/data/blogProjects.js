/**IMGE LOADING */
import datahub from "../../assets/tlcDataHub.jpg";
import tlcdash from "../../assets/tlcFastDash.png";
import linknyc from "../../assets/linknyc.jpeg";
import ratInspector from "../../assets/ratInspector.jpeg";
import icarus from "../../assets/icarus.jpg";
import dblPark from "../../assets/dblPark.jpg";
import pooper from "../../assets/pooper.jpg";
import citibike from "../../assets/citibike.jpg";
import verycool from "../../assets/veryCoolStudio.jpg";
import shiny from "../../assets/shiny.png";
import nhtsa from "../../assets/nhtsa.png";
import clickHouse from "../../assets/clickHouse.jpg";
import rPython from "../../assets/rPython.jpg";
import tabix from "../../assets/tabix_main.png";
import spark from "../../assets/spark.png";
import computerViz from "../../assets/computerViz.png";
import geohut from "../../assets/geohut.PNG";
import nicheNest from "../../assets/NicheNestLogo.png";
import matKings from "../../assets/matKings.jpeg";

export const projects = [
  // {
  //     'image': dblPark,
  //     'title': 'A DOUBLE PARKING APP IN REACT',
  //     'text': 'DoublePark helps you notify someone when you are double parked. This mobile app was written using MySQL, NodeJs, and React-Native.',
  //     'tag': 'react',
  //     'link': 'https://tlcanalytics.shinyapps.io/tlc_dash/',
  //     'date': '2019-04-01'
  // },
  // {
  //     'image': pooper,
  //     'title': 'A POOPER APP IN REACT',
  //     'text': 'Pooper is a fun prototype web app optimized for mobile use. It is a full-stack app with backend written in R, SQL, and NodeJS, and frontend in ReactJS.',
  //     'tag': 'react',
  //     'link': 'https://www.pooper.cloud/',
  //     'date': '2019-01-01'
  // },
  // {
  //     'image': datahub,
  //     'title': 'TLC DATA HUB',
  //     'text': 'A collaboration with Nikita Voevodin, the TLC data Hub was built with R Shiny and published on behalf of the Taxi & Limousine Commission.',
  //     'tag': 'data',
  //     'link': 'https://play.google.com/store/apps/details?id=com.vcoolstudio.doublePark&hl=en_US',
  //     'date': '2018-01-01'
  // },
  {
    image: tlcdash,
    title: "TAXI FAST DASHBOARD",
    text: "Built using Shiny from Rstudio, this dashboard expands on the taxi industry indicators report published by the Taxi & Limousine Commission.",
    tag: "data",
    link: "https://tlcanalytics.shinyapps.io/tlc_fast_dash/",
    date: "2017-01-01",
  },
  {
    image: ratInspector,
    title: "RATINSPECTOR: NYC’S BATTLE AGAINST THE RAT HORDES",
    text: "Built in React JS and optimized for mobile, this webapp tracks metrics for rat inspections and showcases a live search from open data.",
    tag: "react",
    link: "https://datafaust.github.io/rodents-map/",
    date: "2019-07-01",
  },
  {
    image: icarus,
    title: "PROJECT ICARUS: A REALTIME FLIGHT ROUTE DATABASE USING OPENRADAR",
    text: "Realtime flight route database using dockerized Python, R and MySql.",
    tag: "data",
    link: "https://github.com/datafaust/docker_mysql_icarus",
    date: "2020-04-01",
  },
  {
    image: citibike,
    title: "CITIBIKE LOCATOR: FIND CITI-BIKE LOCATIONS IN NYC",
    text: "Built in React JS and optimized for mobile, this webapp helps you access citibike station live feed.",
    tag: "react",
    link: "https://datafaust.github.io/citibike-tracker/",
    date: "2019-02-01",
  },
  // {
  //     'image': verycool,
  //     'title': 'VERYCOOL STUDIO WEBSITE',
  //     'text': 'Built in React JS in collaboration with Nikita Voevodin, this site offers information on our consulting service.',
  //     'tag': 'react',
  //     'link': 'http://www.verycool-studio.com/',
  //     'date': '2020-01-01'
  // },
  {
    image: linknyc,
    title: "LINKNYC LOCATOR: FIND WI-FI SPOTS",
    text: "Built in React JS and optimized for mobile, this webapp was a fun react project to get started with.",
    tag: "react",
    link: "https://datafaust.github.io/nyc-link/",
    date: "2019-01-01",
  },
  /**POSTS FROM BEFORE ADDED */
  {
    image: nhtsa,
    title: "CARSHOP: GETTING VEHICLE DATA WITH R",
    text: "Building an R package to deal with the NHTSA api.",
    tag: "data",
    link: "https://github.com/datafaust/new-personal-site-md/blob/main/documents/nhtsa_api.md",
    date: "2018-06-01",
  },
  {
    image: rPython,
    title: "CLICKHOUSE: ACCESS WITH R AND PYTHON",
    text: "Learn how to access your clickhouse database with R and Python.",
    tag: "data",
    link: "https://github.com/datafaust/new-personal-site-md/blob/main/documents/access_clickhouse_r_python.md",
    date: "2019-12-01",
  },
  {
    image: clickHouse,
    title: "CLICKHOUSE: A BILLION TAXI TRIPS IN A DATABASE",
    text: "Learn how to leverage Yandexs clever clickhouse database to build a low resource analytical powerhouse with taxi data.",
    tag: "data",
    link: "https://github.com/datafaust/new-personal-site-md/blob/main/documents/clickhouse_billion_rides_wsl.md",
    date: "2019-10-01",
  },
  {
    image: clickHouse,
    title: "CLICKHOUSE: CITIBIKE TRIPS IN A DATABASE",
    text: "Learn how to leverage Yandexs clever clickhouse database to build a low resource analytical powerhouse with citibike data.",
    tag: "data",
    link: "https://github.com/datafaust/new-personal-site-md/blob/main/documents/clickhouse_citibike.md",
    date: "2019-11-01",
  },
  {
    image: computerViz,
    title: "COMPUTER VISION: EXTRACTING IMAGES WITH R",
    text: "Learn how to use R to extract images from the internet for analytical purposes.",
    tag: "data",
    link: "https://github.com/datafaust/new-personal-site-md/blob/main/documents/extracting_images_r.md",
    date: "2019-03-01",
  },
  {
    image: computerViz,
    title: "COMPUTER VISION: EXTRACTING VIDEO WITH R AND PYTHON",
    text: "Learn how to use R and Python to extract videos from the internet for analytical purposes.",
    tag: "data",
    link: "https://github.com/datafaust/new-personal-site-md/blob/main/documents/extracting_videos_r_python.md",
    date: "2019-04-01",
  },
  {
    image: shiny,
    title: "SHINY SERVER: USING AN AWS",
    text: "Learn how to setup a shiny server on an aws ec2 instance.",
    tag: "data",
    link: "https://github.com/datafaust/new-personal-site-md/blob/main/documents/setup_shiny_server.md",
    date: "2018-06-01",
  },
  {
    image: spark,
    title: "SPARK: RUNNING A CLUSTER ON AWS",
    text: "Learn how to run a spark cluster on aws.",
    tag: "data",
    link: "https://github.com/datafaust/new-personal-site-md/blob/main/documents/starting_spark_aws.md",
    date: "2019-10-01",
  },
  {
    image: tabix,
    title: "TABIX: A SIMPLE UI FOR CLICKHOUSE",
    text: "Learn how to leverage a simple UI for SQL queries on a clickhouse database.",
    tag: "data",
    link: "https://github.com/datafaust/new-personal-site-md/blob/main/documents/using_tabix_windows.md",
    date: "2019-12-01",
  },
  {
    image: nicheNest,
    title: "USER-DRIVEN SERVICE MARKETPLACE",
    text: "This platform allows users to create, manage, and advertise their services, directly connecting with potential clients in a streamlined, self-service environment.",
    tag: "react",
    link: "https://github.com/datafaust/new-personal-site-md/blob/main/documents/using_tabix_windows.md",
    date: "2024-05-01",
  },
  {
    image: matKings,
    title: "Martial Arts Service Platform",
    text: "This app allows martial arts instructors to advertise private classes and enables customers to book and manage their sessions, while also providing tools for instructors to manage bookings.",
    tag: "react",
    link: "https://github.com/datafaust/bjj-app",
    date: "2024-09-01",
  },

  // {
  //     'image': geohut,
  //     'title': 'GEOHUT: A LOCATION BASED WORK TRACKER in REACT NATIVE',
  //     'text': 'Built in collaboration with Nikita Voevodin on behalf of verycool studio, this react native app was built to help construction not-for-profits track their placed hires.',
  //     'tag': 'react',
  //     'link': 'https://play.google.com/store/apps/details?id=com.vcoolstudio.geohut',
  //     'date': '2020-06-01'
  // },
];
