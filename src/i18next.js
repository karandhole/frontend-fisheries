import i18next from "i18next";
import { initReactI18next } from "react-i18next";
i18next.use(initReactI18next).init({
    debug: true,
    fallbackLng: "mr", // fallback if language not found
    lng: "mr", // default language
    interpolation: {
      escapeValue: false,
    },
  resources: {
    en: {
      translation: {

        welcome: "Welcome to Lumeciel",
        home: "Home",
        about: "About Us",
        contact: "Contact",
        rti:"RTI",
        guidlines:"Guidlines",
        activities:"Activities",
        keyprojects:"key Projects",
        schemes:"Schemes",
        gallery:"Gallery",


        fisheriesFoundation:"Maharashtra Fisheries Development Corporation Limited, Mumbai",

        fisheriesaboutDescription:"To promote the development and growth of deep-sea fishing, the Maharashtra Fisheries Development Corporation was established in 1973. According to the government resolution, mechanized fishing has become the modern method compared to traditional small boat fishing, but the increasing number of mechanized boats poses a risk of overexploitation of fishing areas. Hence, fishing in deep-sea areas with depths greater than 30 fathoms is necessary. While private entrepreneurs are engaged in deep-sea fishing, the government lacked an official body to handle such operations. Therefore, to protect the interests of traditional fishermen, the government approved the establishment of the Maharashtra Fisheries Development Corporation Limited. This corporation is responsible for deep-sea surveys, fish landing, marketing, and export, as well as organizing, coordinating, and supervising fisheries development initiatives. It also works to develop regions with high fisheries potential to ensure that fishermen benefit directly. In recent years, the corporation has undergone significant changes, taking up projects like building fishing harbors and fish landing centers along the coast, managing fisheries in large reservoirs, and promoting cage fish farming to encourage entrepreneurship among those interested in aquaculture.",
        mfdcAddress: "3rd Floor, N.K.M. International House, Babubhai M. Chinai Road, Mumbai - 400 020",
   
        latestnewst:"Latest News",
        latestnews1:"Notice regarding upcoming fisheries project",
        latestnews2:"Government subsidy updates for fish farmers",
        latestnews3:"New deep-sea fishing guidelines announced",

        
        // deparments
        department1: "Head Office",
        department2: "Nagpur Division",
        department3: "Aurangabad Division",
        department4: "Sassoon Dock",
        
        department5: "Parallel Pay Scale Employees",
        department6: "Through External Agency",
       /// quick links

        quicklinesheading:"Quick Links",
          quickLink1Title:"PMMSY",
          quickLink2Title:"Fisheries Department Government of Maharashtra, India",
          quickLink3Title :"Marine and Inland Water Dashboard",
          quickLink4Title :"SagarMala - Ministry of Shipping, GOI",


          // deparments
        department1: "Head Office",
        department2: "Nagpur Division",
        department3: "Aurangabad Division",
           departments:"Department",


           //nfdc_projects

           nfdc_projects:"NFDC Projects",
           project1:"CSR Projects",
           project2:"PMMSY Projects",
           project3:"Ongoing Projects",
           project4:"FMPIS Projects",

           peopleData:"Board of Directors",

           vision: "Vision",
           mission: "Mission",
           goals: "Goals",

           visionheading: "Our vision is to foster sustainable fisheries development across the coastal and inland regions of Maharashtra.",
           visionpara1: "We aim to transform the fisheries sector into a self-reliant, technologically advanced, and economically vibrant industry...",
           visionpara2: "Our focus remains on building resilient ecosystems, modernizing fishing infrastructure...",


           missionheading: "Our mission is to empower the fisheries sector through strategic planning, innovation, and inclusive growth.",
           missionpara1: "We strive to create sustainable livelihood opportunities...",
        missionpara2: "By facilitating partnerships with research institutions...",


        goalheading:"Our goals are strategically aligned to transform the fisheries ecosystem in Maharashtra.",
        goals1:["Promote eco-friendly fishing practices and preserve marine biodiversity",
      "Increase fish production through scientific and sustainable methods",
      "Develop cold chains, processing units, and modern harbors",
      "Provide financial aid and insurance to fisher families",
      "Boost exports by complying with global quality standards",
      "Encourage women and youth participation in aquaculture",
      "Implement digital tools for monitoring and governance"],

      goals2:"These goals aim to ensure food security, economic prosperity, and long-term sustainability for all stakeholders involved.",
         
      }
    },
   
    mr: {
      translation: {
       
        home: "मुख्यपृष्ठ",
        about: "आमच्याबद्दल",
        contact: "संपर्क",
        rti:"आरटीआय",
        guidlines:"मार्गदर्शक तत्त्वे",
        activities:"उपक्रम",
        keyprojects:"प्रमुख प्रकल्प",
        schemes:"योजना",
        gallery:"गॅलरी",

        fisheriesFoundation:"महाराष्ट्र मत्स्योद्योग विकास महामंडळ मर्यादित, मुंबई",
        fisheriesaboutDescription:"खोल समुद्रातील मत्स्यव्यवसायाचा विकास व्हावा आणि मत्स्यव्यवसायात वृद्धी व्हावी यासाठी सन १९७३ मध्ये महाराष्ट्र मत्स्योद्योग विकास महामंडळाची स्थापना करण्यात आली. शासन निर्णयाच्या प्रस्तावनेनुसार, यांत्रिक मासेमारी ही आधुनिक पद्धत म्हणून स्वीकारली गेली असून यांत्रिक नौकांच्या वाढत्या संख्येमुळे मासेमारी क्षेत्रांचे अतिशोषण होण्याचा धोका आहे. त्यामुळे ३० फॅदमपेक्षा जास्त खोली असलेल्या खोल समुद्रात मासेमारी करणे गरजेचे ठरते. सध्या खाजगी उद्योजकांकडून खोल समुद्रात मासेमारी केली जात असली, तरी शासनाकडे अशा प्रकारचे कार्य हाताळणारा कोणताही अंगीकृत उपक्रम नसल्याने, पारंपरिक मच्छीमारांच्या हितासाठी शासनाने ‘महाराष्ट्र मत्स्योद्योग विकास महामंडळ मर्यादित’ या नावाने महामंडळ स्थापन केले. हे महामंडळ खोल समुद्राचे सर्वेक्षण, माशांचे लँडिंग, विपणन आणि निर्यात यासह विविध मत्स्यविकास उपक्रमांचे संघटन, समन्वय व पर्यवेक्षण करते. मत्स्यविकासासाठी सक्षम असलेल्या भागांचा विकास करून मच्छीमारांना त्याचा थेट लाभ मिळावा, यासाठीही महामंडळ प्रयत्नशील आहे. गेल्या काही वर्षांत महामंडळाच्या कारभारात आमूलाग्र बदल घडले असून मासेमारी बंदरे, फिश लँडिंग सेंटर उभारण्यासह जलाशयांचे मासेमारी व्यवस्थापन व पिंजरा पद्धतीने मत्स्यसंवर्धनाचे प्रकल्प राबवले जात आहेत. त्यामुळे मत्स्यशेतीसाठी इच्छुक व्यक्तींमध्ये उद्योजकता निर्माण होण्यास हातभार लागतो आहे.",
        mfdcAddress:"3 रा मजला, एन.के.एम. इंटरनॅशनल हाऊस, बाबुभाई एम. चिनॉय मार्ग, मुंबई- 400 020",  


        latestnewst: "ताज्या घडामोडी",
        latestnews1: "मत्स्य प्रकल्पांबाबत लवकरच सूचना जाहीर होणार",
        latestnews2: "मत्स्यशेतीसाठी शासनाच्या अनुदानात सुधारणा",
        latestnews3: "खोल समुद्रातील मासेमारीसाठी नवीन मार्गदर्शक तत्त्वे जारी",


        // deparments
        department1: "मुख्य कार्यालय ",
        department2: "नागपूर विभाग",

        department3: "औरंगाबाद विभाग ",
        
        department4: "ससुन गोदी ",
       
        department5: "समांतर वेतन श्रेणी कर्मचारी",
        department6: "बाहययंत्रणेद्वारे ",


        quicklinesheading:"जलद दुवे",
        quickLink1Title:"प्रधानमंत्री मत्स्यसंपदा योजना डॅशबोर्ड",
        quickLink2Title:"मत्स्यव्यवसाय विभाग महाराष्ट्र शासन, भारत",
        quickLink3Title:"सागरी आणि भूजल डॅशबोर्ड",
        quickLink4Title :"सागरमाला - भारत सरकारचे नौवहन मंत्रालय",

         // deparments
         department1: "मुख्य कार्यालय ",
         department2: "नागपूर विभाग",
 
         department3: "औरंगाबाद विभाग ",
         departments:"विभाग",

         nfdc_projects:"एनएसएफडीसी योजना",
         project1:"कॉर्पोरेट सामाजिक जबाबदारी (CSR) प्रकल्प ",
         project2:"PMMSY प्रकल्प",
         project3:"Ongoing प्रकल्प",
         project4:"FMPIS प्रकल्प",


         peopleData:"मंडळाचे संचालक",


         vision: "दृष्टीकोन",
           mission: "मिशन",
           goals: "उद्दिष्टे",

           visionheading: "महाराष्ट्रातील किनारी व अंतर्गत भागांमध्ये शाश्वत मत्स्यव्यवसाय विकास साधणे हे आमचे उद्दिष्ट आहे.",
    visionpara1: "मत्स्यव्यवसाय क्षेत्राला स्वयंपूर्ण, तंत्रज्ञानाधारित व आर्थिकदृष्ट्या सक्षम बनवणे हा आमचा उद्देश आहे...",
    visionpara2: "सशक्त परिसंस्था उभारणे, मासेमारी पायाभूत सुविधा आधुनिक करणे...",
    
     missionheading: "रणनीती, नावीन्यपूर्णता आणि समावेशी विकासाद्वारे मत्स्यव्यवसाय क्षेत्र सक्षम बनवणे हे आमचे ध्येय आहे.",
    missionpara1: "शाश्वत उपजीविका संधी निर्माण करणे, न्याय्य बाजारपेठ मिळवून देणे...",
    missionpara2: "संशोधन संस्थांबरोबर भागीदारी, तंत्रज्ञानाचा अवलंब...",


    goalheading:"Our goals are strategically aligned to transform the fisheries ecosystem in Maharashtra.",
        goals1:["Promote eco-friendly fishing practices and preserve marine biodiversity",
      "Increase fish production through scientific and sustainable methods",
      "Develop cold chains, processing units, and modern harbors",
      "Provide financial aid and insurance to fisher families",
      "Boost exports by complying with global quality standards",
      "Encourage women and youth participation in aquaculture",
      "Implement digital tools for monitoring and governance"],

      goals2:"These goals aim to ensure food security, economic prosperity, and long-term sustainability for all stakeholders involved.",
         

      }
    }
},
});

export default i18next;