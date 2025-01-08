import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './website/home/home.component';
import { AboutComponent } from './website/about/about.component';
import { CounselingComponent } from './website/counseling/counseling.component';
import { CoursesComponent } from './website/courses/courses.component';
import { CalendarComponent } from './website/calendar/calendar.component';
import { ContactComponent } from './website/contact/contact.component';
import { AlumniComponent } from './website/participate/alumni/alumni.component';
import { EngcoursesComponent } from './website/engcourses/engcourses.component';
import { HpcComponent } from './website/hpc/hpc.component';
import { IrhComponent } from './website/irh/irh.component';
import { HnhComponent } from './website/hnh/hnh.component';
import { MnpComponent } from './website/mnp/mnp.component';
import { CcefComponent } from './website/ccef/ccef.component';
import { HindicoursesComponent } from './website/hindicourses/hindicourses.component';
import { HpchindiComponent } from './website/hpchindi/hpchindi.component';
import { IrhhindiComponent } from './website/irhhindi/irhhindi.component';
import { HnhhindiComponent } from './website/hnhhindi/hnhhindi.component';
import { MnphindiComponent } from './website/mnphindi/mnphindi.component';
import { ResourcesComponent } from './website/resources/resources.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      seo: {
        title: 'Biblical Counseling Trust of India',
        metaTags: [
          { name: 'description', content: 'Empowering Churches - Healing Communities' },
          { name: 'keywords' , content: 'BCTI, Biblical Counseling Trust of India, Biblical Counseling, Counseling, Mental Health'},
          { name: 'robots', content: 'index, follow'},
          { name: 'revisit', content: '15 days'},
          { property: 'og:title', content: 'Biblical Counseling Trust of India' },
          { proprety: 'og:description', content: 'Empowering Churches - Healing Communities' },
          { property: 'og:image', content: 'https://bcti.org.in/assets/logo.png' },
          { property: 'og:url', content: 'https://bcti.org.in/' },
        ]
      }
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      seo: {
        title: 'Biblical Counseling Trust of India',
        metaTags: [
          { name: 'description', content: 'Empowering Churches - Healing Communities' },
          { name: 'keywords' , content: 'Biblical Counseling Trust of India, BCTI, Biblical Counseling, Counseling, Mental Health'},
          { name: 'robots', content: 'index, follow'},
          { name: 'revisit', content: '15 days'},
          { property: 'og:title', content: 'Biblical Counseling Trust of India' },
          { proprety: 'og:description', content: 'Empowering Churches - Healing Communities' },
          { property: 'og:image', content: 'https://bcti.org.in/assets/logo.png' },
          { property: 'og:url', content: 'https://bcti.org.in/about' },
        ]
      }
    }
  },
  {
    path: 'counseling',
    component: CounselingComponent,
    data: {
      seo: {
        title: 'Counseling',
        metaTags: [
          { name: 'description', content: 'Biblical counseling is based on a Scriptural understanding of human behavior, focusing on the heart as the core of all thoughts, emotions, and actions' },
          { name: 'keywords' , content: 'Biblical Counseling Trust of India, BCTI, Biblical Counseling, Counseling, Mental Health'},
          { name: 'robots', content: 'index, follow'},
          { name: 'revisit', content: '15 days'},
          { property: 'og:title', content: 'Counseling' },
          { proprety: 'og:description', content: 'Biblical counseling is based on a Scriptural understanding of human behavior, focusing on the heart as the core of all thoughts, emotions, and actions' },
          { property: 'og:image', content: 'https://bcti.org.in/assets/logo.png' },
          { property: 'og:url', content: 'https://bcti.org.in/counseling' },
        ]
      }
    }
  },
  {
    path: 'courses',
    component: CoursesComponent,
    data: {
      seo: {
        title: 'Courses',
        metaTags: [
          { name: 'description', content: 'These online courses are aimed at equipping Christians to help people navigate the challenges and struggles of modern Christian living.' },
          { name: 'keywords' , content: 'Biblical Counseling Trust of India, BCTI, How People Change, Instruments in Redeemers Hand, Health and Healing, Marriage and Parenting, Biblical Counseling, Counseling, Mental Health'},
          { name: 'robots', content: 'index, follow'},
          { name: 'revisit', content: '15 days'},
          { property: 'og:title', content: 'Courses' },
          { proprety: 'og:description', content: 'These online courses are aimed at equipping Christians to help people navigate the challenges and struggles of modern Christian living.' },
          { property: 'og:image', content: 'https://bcti.org.in/assets/logo.png' },
          { property: 'og:url', content: 'https://bcti.org.in/courses' },
        ]
      }
    }
  },
  {
    path: 'calendar',
    component: CalendarComponent,
    data: {
      seo: {
        title: 'Calendar',
        metaTags: [
          { name: 'description', content: 'Subscribe to our calendar to stay updated.' },
          { name: 'keywords' , content: 'Biblical Counseling Trust of India, BCTI, Events, Upcoming, How People Change, Instruments in Redeemers Hand, Health and Healing, Marriage and Parenting, Biblical Counseling, Counseling, Mental Health'},
          { name: 'robots', content: 'index, follow'},
          { name: 'revisit', content: '15 days'},
          { property: 'og:title', content: 'Calendar' },
          { proprety: 'og:description', content: 'Subscribe to our calendar to stay updated.' },
          { property: 'og:image', content: 'https://bcti.org.in/assets/logo.png' },
          { property: 'og:url', content: 'https://bcti.org.in/calendar' },
        ]
      }
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      seo: {
        title: 'Contact',
        metaTags: [
          { name: 'description', content: 'Get in touch with us.' },
          { name: 'keywords' , content: 'Biblical Counseling Trust of India, BCTI, Contact, Email, Phone, Mobile, Address, Whatsapp, How People Change, Instruments in Redeemers Hand, Health and Healing, Marriage and Parenting, Counseling, Mental Health, Biblical Counseling,'},
          { name: 'robots', content: 'index, follow'},
          { name: 'revisit', content: '15 days'},
          { property: 'og:title', content: 'Contact' },
          { proprety: 'og:description', content: 'Get in touch with us.' },
          { property: 'og:image', content: 'https://bcti.org.in/assets/logo.png' },
          { property: 'og:url', content: 'https://bcti.org.in/contact' },
        ]
      }
    }
  },
  {
    path: 'alumni',
    component: AlumniComponent,
    data: {
      seo: {
        title: 'Alumni',
        metaTags: [
          { name: 'description', content: 'As Iron sharpens iron so one person sharpens another. Those who have completed either HPC and IRH or DBC and HRE are welcome into our BCTI Alumni!' },
          { name: 'keywords' , content: 'Biblical Counseling Trust of India, BCTI, Alumni, Meeting, Biblical Counseling, Counseling, Mentoring, Mental Health'},
          { name: 'robots', content: 'index, follow'},
          { name: 'revisit', content: '15 days'},
          { property: 'og:title', content: 'Alumni' },
          { proprety: 'og:description', content: 'As Iron sharpens iron so one person sharpens another. Those who have completed either HPC and IRH or DBC and HRE are welcome into our BCTI Alumni!' },
          { property: 'og:image', content: 'https://bcti.org.in/assets/logo.png' },
          { property: 'og:url', content: 'https://bcti.org.in/alumni' },
        ]
      }
    }
  },
  {
    path: 'engcourses',
    component: EngcoursesComponent,
    data: {
      seo: {
        title: 'English Courses',
        metaTags: [
          { name: 'description', content: 'These online courses are aimed at equipping Christians to help people navigate the challenges and struggles of modern Christian living.' },
          { name: 'keywords' , content: 'Biblical Counseling Trust of India, BCTI, How People Change, Instruments in Redeemers Hand, Health and Healing, Marriage and Parenting, Biblical Counseling, Counseling, Mental Health'},
          { name: 'robots', content: 'index, follow'},
          { name: 'revisit', content: '15 days'},
          { property: 'og:title', content: 'English Courses' },
          { proprety: 'og:description', content: 'These online courses are aimed at equipping Christians to help people navigate the challenges and struggles of modern Christian living.' },
          { property: 'og:image', content: 'https://bcti.org.in/assets/logo.png' },
          { property: 'og:url', content: 'https://bcti.org.in/engcourses' },
        ]
      }
    }
  },
  {
    path: 'hpc',
    component: HpcComponent,
    data: {
      seo: {
        title: 'How People Change',
        metaTags: [
          { name: 'description', content: 'A Biblical model of human behaviour based on the heart. Participants will learn to apply fundamental Biblical truths to their own daily lives, identify areas where they need to change and access resources of the Spirit to apply the change to their own lives first.' },
          { name: 'keywords' , content: 'Biblical Counseling Trust of India, BCTI, How People Change, Biblical Counseling, Counseling, Mental Health'},
          { name: 'robots', content: 'index, follow'},
          { name: 'revisit', content: '15 days'},
          { property: 'og:title', content: 'How People Change' },
          { proprety: 'og:description', content: 'A Biblical model of human behaviour based on the heart. Participants will learn to apply fundamental Biblical truths to their own daily lives, identify areas where they need to change and access resources of the Spirit to apply the change to their own lives first.' },
          { property: 'og:image', content: 'https://bcti.org.in/assets/img/landing/hpc.webp' },
          { property: 'og:url', content: 'https://bcti.org.in/hpc' },
        ]
      }
    }
  },
  {
    path: 'irh',
    component: IrhComponent,
    data: {
      seo: {
        title: 'Instruments in Redeemers Hand',
        metaTags: [
          { name: 'description', content: 'Learn how to counsel the way Jesus did! The model is seen in 4 processes called Love-Know-Speak-Do, where one learns how to listen well, empathize, ask good questions and speaking the truth in love to help those who struggle with various issues.' },
          { name: 'keywords' , content: 'Biblical Counseling Trust of India, BCTI, Instruments in Redeemers Hand, Biblical Counseling, Counseling, Making disciples'},
          { name: 'robots', content: 'index, follow'},
          { name: 'revisit', content: '15 days'},
          { property: 'og:title', content: 'Instruments in Redeemers Hand' },
          { proprety: 'og:description', content: 'Learn how to counsel the way Jesus did! The model is seen in 4 processes called Love-Know-Speak-Do, where one learns how to listen well, empathize, ask good questions and speaking the truth in love to help those who struggle with various issues.' },
          { property: 'og:image', content: 'https://bcti.org.in/assets/img/landing/irh_title.webp' },
          { property: 'og:url', content: 'https://bcti.org.in/irh' },
        ]
      }
    }
  },
  {
    path: 'hnh',
    component: HnhComponent,
    data: {
      seo: {
        title: 'Health and Healing',
        metaTags: [
          { name: 'description', content: 'Learn the Biblical perspective on suffering by understanding death, grieving, depression, fear, addictions, anxiety, anger, etc. Participants will be taught to address and identify root causes for sufferings.' },
          { name: 'keywords' , content: 'Biblical Counseling Trust of India, BCTI, Health and Healing, Biblical Counseling, Counseling, Mental Health'},
          { name: 'robots', content: 'index, follow'},
          { name: 'revisit', content: '15 days'},
          { property: 'og:title', content: 'Health and Healing' },
          { proprety: 'og:description', content: 'Learn the Biblical perspective on suffering by understanding death, grieving, depression, fear, addictions, anxiety, anger, etc. Participants will be taught to address and identify root causes for sufferings.' },
          { property: 'og:image', content: 'https://bcti.org.in/assets/img/landing/hnh.webp' },
          { property: 'og:url', content: 'https://bcti.org.in/hnh' },
        ]
      }
    }
  },
  {
    path: 'mnp',
    component: MnpComponent,
    data: {
      seo: {
        title: 'Marriage and Parenting',
        metaTags: [
          { name: 'description', content: 'A biblical understanding and practical aspects of marriage including communication, relational trends, conflict management etc as well understanding how to shepherd the hearts of your children instead of manipulating them!' },
          { name: 'keywords' , content: 'Biblical Counseling Trust of India, BCTI, Marriage and Parenting, Biblical Counseling, Counseling, Mental Health'},
          { name: 'robots', content: 'index, follow'},
          { name: 'revisit', content: '15 days'},
          { property: 'og:title', content: 'Marriage and Parenting' },
          { proprety: 'og:description', content: 'A biblical understanding and practical aspects of marriage including communication, relational trends, conflict management etc as well understanding how to shepherd the hearts of your children instead of manipulating them!' },
          { property: 'og:image', content: 'https://bcti.org.in/assets/img/landing/mnp.webp' },
          { property: 'og:url', content: 'https://bcti.org.in/mnp' },
        ]
      }
    }
  },
  {
    path: 'ccef-bcti',
    component: CcefComponent,
    data: {
      seo: {
        title: 'CCEF-BCTI Courses',
        metaTags: [
          { name: 'description', content: 'BCTI partners with the Christian Counseling & Educational Foundation to provide biblical counseling courses in India at a discounted rate. These online recorded video courses offer a biblical foundation for understanding God, understanding ourselves, and understanding others - a valuable tool for anyone involved in ministry or counseling.' },
          { name: 'keywords' , content: 'Christian Counseling & Educational Foundation, Biblical Counseling Trust of India, BCTI, Dynamics of Biblical Change, Helping Relationships, Biblical Counseling, Counseling, Mental Health'},
          { name: 'robots', content: 'index, follow'},
          { name: 'revisit', content: '15 days'},
          { property: 'og:title', content: 'CCEF-BCTI Courses' },
          { proprety: 'og:description', content: 'BCTI partners with the Christian Counseling & Educational Foundation to provide biblical counseling courses in India at a discounted rate. These online recorded video courses offer a biblical foundation for understanding God, understanding ourselves, and understanding others - a valuable tool for anyone involved in ministry or counseling.' },
          { property: 'og:image', content: 'https://bcti.org.in/assets/img/ccef/ccefnn_1.webp' },
          { property: 'og:url', content: 'https://bcti.org.in/ccef-bcti' },
        ]
      }
    }
  },
  {
    path: 'hindi-courses',
    component: HindicoursesComponent,
    data: {
      seo: {
        title: 'Hindi Courses',
        metaTags: [
          { name: 'description', content: 'इन ऑनलाइन पाठ्यक्रमों का उद्देश्य लोगों को आधुनिक ईसाई जीवन की चुनौतियों और संघर्षों से निपटने में मदद करने के लिए ईसाइयों को सक्षम बनाना है।' },
          { name: 'keywords' , content: 'Biblical Counseling Trust of India, BCTI, How People Change, Biblical Counseling, Counseling, Mental Health'},
          { name: 'robots', content: 'index, follow'},
          { name: 'revisit', content: '15 days'},
          { property: 'og:title', content: 'Hindi Courses' },
          { proprety: 'og:description', content: 'इन ऑनलाइन पाठ्यक्रमों का उद्देश्य लोगों को आधुनिक ईसाई जीवन की चुनौतियों और संघर्षों से निपटने में मदद करने के लिए ईसाइयों को सक्षम बनाना है।' },
          { property: 'og:image', content: 'https://bcti.org.in/assets/logo.png' },
          { property: 'og:url', content: 'https://bcti.org.in/hindi-courses' },
        ]
      }
    }
  },
  {
    path: 'hpchindi',
    component: HpchindiComponent,
    data: {
      seo: {
        title: 'लोग कैसे बदलते है',
        metaTags: [
          { name: 'description', content: 'यह एक बाईबलीय मॉडल है, जो ह्रदय पर आधारित मनुष्य के व्यवहार को संबोधित करता है l इसमें भाग लेने वाले सीखते हैं कि बुनियादी बाईबलीय सच्चाईयों को अपने दैनिक जीवन में कैसे लागू करें, पहचानते है उन क्षेत्रों को जहाँ परिवर्तन की आवश्यकता है और पवित्र आत्मा के संसाधनों को पाकर, परिवर्तन को सर्वप्रथम स्वयं के जीवन में लागू करते है|' },
          { name: 'keywords' , content: 'Biblical Counseling Trust of India, BCTI, How People Change, Biblical Counseling, Counseling, Mental Health'},
          { name: 'robots', content: 'index, follow'},
          { name: 'revisit', content: '15 days'},
          { property: 'og:title', content: 'लोग कैसे बदलते है' },
          { proprety: 'og:description', content: 'यह एक बाईबलीय मॉडल है, जो ह्रदय पर आधारित मनुष्य के व्यवहार को संबोधित करता है। इसमें भाग लेने वाले सीखते हैं कि बुनियादी बाईबलीय सच्चाईयों को अपने दैनिक जीवन में कैसे लागू करें, पहचानते है उन क्षेत्रों को जहाँ परिवर्तन की आवश्यकता है और पवित्र आत्मा के संसाधनों को पाकर, परिवर्तन को सर्वप्रथम स्वयं के जीवन में लागू करते है|' },
          { property: 'og:image', content: 'https://bcti.org.in/assets/img/landing/hpc.webp' },
          { property: 'og:url', content: 'https://bcti.org.in/hpchindi' },
        ]
      }
    }
  },
  {
    path: 'irhhindi',
    component: IrhhindiComponent,
    data: {
      seo: {
        title: 'परिवर्तन के उपकरण',
        metaTags: [
          { name: 'description', content: 'यीशु के समान काउंसल करना सीखें| इस मॉडल को हम 4 प्रक्रिया में देखते है जो कि ‘प्रेम-जानना-बोलना-करना’ कहलाता है| यहाँ एक व्यक्ति सीखता है कि कैसे ध्यान से सुने, समानुभूति जताए, अच्छे सवाल पूछे और प्रेम से सच्चाई को बोलकर उन लोगों की सहायता करें जो विभिन्न मुद्दों में संघर्ष कर रहे हैं|' },
          { name: 'keywords' , content: 'Biblical Counseling Trust of India, BCTI, Instruments in Redeemers Hand, Biblical Counseling, Counseling, Making disciples'},
          { name: 'robots', content: 'index, follow'},
          { name: 'revisit', content: '15 days'},
          { property: 'og:title', content: 'परिवर्तन के उपकरण' },
          { proprety: 'og:description', content: 'यीशु के समान काउंसल करना सीखें| इस मॉडल को हम 4 प्रक्रिया में देखते है जो कि ‘प्रेम-जानना-बोलना-करना’ कहलाता है| यहाँ एक व्यक्ति सीखता है कि कैसे ध्यान से सुने, समानुभूति जताए, अच्छे सवाल पूछे और प्रेम से सच्चाई को बोलकर उन लोगों की सहायता करें जो विभिन्न मुद्दों में संघर्ष कर रहे हैं|' },
          { property: 'og:image', content: 'https://bcti.org.in/assets/img/landing/irh_title.webp' },
          { property: 'og:url', content: 'https://bcti.org.in/irhhindi' },
        ]
      }
    }
  },
  {
    path: 'hnhhindi',
    component: HnhhindiComponent,
    data: {
      seo: {
        title: 'स्वास्थ्य और चंगाई',
        metaTags: [
          { name: 'description', content: 'सीखें कि कैसे उन लोगों की सहायता करें जो दुःख उठाना, शोक, मृत्यु, अवसाद, डर, घबराहट, क्रोध, लत, मानसिक स्वास्थ्य इत्यादि समस्याओं से जूझ रहे हो|' },
          { name: 'keywords' , content: 'Biblical Counseling Trust of India, BCTI, Health and Healing, Biblical Counseling, Counseling, Mental Health'},
          { name: 'robots', content: 'index, follow'},
          { name: 'revisit', content: '15 days'},
          { property: 'og:title', content: 'स्वास्थ्य और चंगाई' },
          { proprety: 'og:description', content: 'सीखें कि कैसे उन लोगों की सहायता करें जो दुःख उठाना, शोक, मृत्यु, अवसाद, डर, घबराहट, क्रोध, लत, मानसिक स्वास्थ्य इत्यादि समस्याओं से जूझ रहे हो|' },
          { property: 'og:image', content: 'https://bcti.org.in/assets/img/landing/hnh.webp' },
          { property: 'og:url', content: 'https://bcti.org.in/hnhhindi' },
        ]
      }
    }
  },
  {
    path: 'mnphindi',
    component: MnphindiComponent,
    data: {
      seo: {
        title: 'विवाह और परवरिश',
        metaTags: [
          { name: 'description', content: 'विवाह पर एक बाईबलीय समझ और प्रायोगिक पहलू जिसमें संवाद, बुनियादी सम्बन्धात्मक तौर-तरीके, संघर्षों में समाधान इत्यादि सम्मिलित है l इसके साथ ही यह समझ भी कि बिना हेर-फेर करें बच्चों के ह्रदय की चरवाही कैसे करें|' },
          { name: 'keywords' , content: 'Biblical Counseling Trust of India, BCTI, Marriage and Parenting, Biblical Counseling, Counseling, Mental Health'},
          { name: 'robots', content: 'index, follow'},
          { name: 'revisit', content: '15 days'},
          { property: 'og:title', content: 'विवाह और परवरिश' },
          { proprety: 'og:description', content: 'विवाह पर एक बाईबलीय समझ और प्रायोगिक पहलू जिसमें संवाद, बुनियादी सम्बन्धात्मक तौर-तरीके, संघर्षों में समाधान इत्यादि सम्मिलित है l इसके साथ ही यह समझ भी कि बिना हेर-फेर करें बच्चों के ह्रदय की चरवाही कैसे करें|' },
          { property: 'og:image', content: 'https://bcti.org.in/assets/img/landing/mnp.webp' },
          { property: 'og:url', content: 'https://bcti.org.in/mnp' },
        ]
      }
    }
  },
  {
    path: 'resources',
    component: ResourcesComponent,
    data: {
      seo: {
        title: 'Resources',
        metaTags: [
          { name: 'description', content: 'Resources for in-depth articles, books, and newsletter on Biblical Counseling.' },
          { name: 'keywords' , content: 'BCTI, Biblical Counseling Trust of India, Biblical Counseling, Counseling, Mental Health, Articles, Books'},
          { name: 'robots', content: 'index, follow'},
          { name: 'revisit', content: '15 days'},
          { property: 'og:title', content: 'Resources' },
          { proprety: 'og:description', content: 'Resources for in-depth articles, books, and newsletter on Biblical Counseling.' },
          { property: 'og:image', content: 'https://bcti.org.in/assets/img/resources/ftt_logo.webp' },
          { property: 'og:url', content: 'https://bcti.org.in/resources' },
        ]
      }
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
