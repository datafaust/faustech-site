/**IMGE LOADING */
import db from '../../assets/database_design.png';
// import web_dev from '../../assets/web_dev.jpeg';
import web_dev from '../../assets/web_development2.png'
import rpython from '../../assets/r_python.png';
import data_analytics from '../../assets/data_analytics.jpeg';
import consulting from '../../assets/ideas.png';
import rshiny from '../../assets/rshiny.png';




export const projects = [
    {
        'image': consulting,
        'title': 'Technology Consulting Services',
        'text': 'We aim to help our clients create custom tools needed to accomplish their goal; we will build a custom website or web application.',
        'tag': 'react',
        'link': '',
        'date': '2019-04-01'
    },
    {
        'image': web_dev,
        'title': 'Web and Application Development',
        'text': 'We aim to help our clients create custom tools needed to accomplish their goal; we will build a custom website or web application.',
        'tag': 'react',
        'link': '',
        'date': '2019-04-01'
    },
    {
        'image': rpython,
        'title': 'Data Science Ecosystems',
        'text': 'Need to set up a low cost data science eco system? We have experience setting up shiny server and workbench for an entire data science suite.',
        'tag': 'react',
        'link': '',
        'date': '2019-01-01'
    },
    {
        'image': data_analytics,
        'title': 'Data Analysis',
        'text': 'Our team has a plethora of experience analyzing data; need data analysis work, let us know.',
        'tag': 'data',
        'link': 'https://play.google.com/store/apps/details?id=com.vcoolstudio.doublePark&hl=en_US',
        'date': '2018-01-01'
    },
    {
        'image': db,
        'title': 'Database Deployment',
        'text': 'Need a new database ecosystem set up? We can deploy a secure database solution ready to hook up to your frontend.',
        'tag': 'data',
        'link': '',
        'date': '2017-01-01'
    },
    // {
    //     'image': react_native,
    //     'title': 'Mobile Applications',
    //     'text': 'Need a mobile application built for your business? We provide services for mobile application design to deployment.',
    //     'tag': 'react',
    //     'link': '',
    //     'date': '2019-07-01'
    // },
    {
        'image': rshiny,
        'title': 'Shiny Server',
        'text': 'Need a mobile application built for your business? We provide services for mobile application design to deployment.',
        'tag': 'react',
        'link': '',
        'date': '2019-07-01'
    }

]
