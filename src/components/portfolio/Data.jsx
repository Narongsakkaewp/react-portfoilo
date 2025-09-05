import Work1 from '../../assets/images/work1.jpg'
import Work2 from '../../assets/images/work2.png'
import Work3 from '../../assets/images/work3.png'
export const projectData = [
    {
        id: 1,
        classname: 'work__card',
        title: 'Saving Electricity with The Help of Piezoelectric Doormat.',
        description: 'โครงการเรื่องพรมเช็ดเท้าผลิตกระแสไฟฟ้าด้วยเพียโซอิเล็กทริกเพื่อสำรองไฟฟ้าสำหรับครัวเรือน',
        img: Work1,
        category: 'Arduino',
        link: 'https://www.google.com'
    },
    {
        id: 2,
        classname: 'work__card',
        title: 'Development of Public Relation Website For Argicultural Product.',
        description: 'โครงงานเรื่องการพัฒนาเว็บไซต์ประชาสัมพันธ์สินค้าทางการเกษตรสำหรับเกษตรกร',
        img: Work2,
        category: 'Web',
        link: 'https://www.google.com'
    },

    {
        id: 3,
        classname: 'work__card',
        title: 'Finding Tutor Website.',
        description: 'โครงงานเรื่องการพัฒนาเว็บไซต์หาติวเตอร์',
        detail: '**work in progress**',
        img: Work3,
        category: 'Web',
        link: 'https://github.com/Narongsakkaewp/Finding-Tutor-Website.git'
    }
]

export const projectCategory = [
    {
        name: 'All'
    },
    {
        name: 'Arduino'
    },
    {
        name: 'Web'
    }
]