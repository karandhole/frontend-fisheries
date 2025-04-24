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

        home: "Home",
        about: "About Us",
        contact: "Contact",
        rti: "RTI",
        guidlines: "Guidlines",
        activities: "Activities",
        keyprojects: "key Projects",
        schemes1: "Schemes",
        gallery: "Gallery",
        reports: "Reports",
        recuitment: "Recuitment",


        fisheriesFoundation: "Maharashtra Fisheries Development Corporation Limited, Mumbai",

        fisheriesaboutDescription: "To promote the development and growth of deep-sea fishing, the Maharashtra Fisheries Development Corporation was established in 1973. According to the government resolution, mechanized fishing has become the modern method compared to traditional small boat fishing, but the increasing number of mechanized boats poses a risk of overexploitation of fishing areas. Hence, fishing in deep-sea areas with depths greater than 30 fathoms is necessary. While private entrepreneurs are engaged in deep-sea fishing, the government lacked an official body to handle such operations. Therefore, to protect the interests of traditional fishermen, the government approved the establishment of the Maharashtra Fisheries Development Corporation Limited. This corporation is responsible for deep-sea surveys, fish landing, marketing, and export, as well as organizing, coordinating, and supervising fisheries development initiatives. It also works to develop regions with high fisheries potential to ensure that fishermen benefit directly. In recent years, the corporation has undergone significant changes, taking up projects like building fishing harbors and fish landing centers along the coast, managing fisheries in large reservoirs, and promoting cage fish farming to encourage entrepreneurship among those interested in aquaculture.",
        mfdcAddress: "3rd Floor, N.K.M. International House, ",
        mfdcAddress1: "Babubhai M. Chinai Road, Mumbai - 400 020",
        latestnewst: "Latest News",
        latestnews1: "Notice regarding upcoming fisheries project",
        latestnews2: "Government subsidy updates for fish farmers",
        latestnews3: "New deep-sea fishing guidelines announced",


        // deparments
        department1: "Head Office",
        department2: "Nagpur Division",
        department3: "Aurangabad Division",
        department4: "Sassoon Dock",

        department5: "Parallel Pay Scale Employees",
        department6: "Through External Agency",
        /// quick links

        quicklinesheading: "Quick Links",
        quickLink1Title: "PMMSY",
        quickLink2Title: "Fisheries Department Government of Maharashtra, India",
        quickLink3Title: "Marine and Inland Water Dashboard",
        quickLink4Title: "SagarMala - Ministry of Shipping, GOI",


        // deparments
        department1: "Head Office",
        department2: "Nagpur Division",
        department3: "Aurangabad Division",
        departments: "Department",


        //nfdc_projects

        nfdc_projects: "NFDB Projects",
        project1: "CSR Projects",
        project2: "PMMSY Projects",
        project3: "Ongoing Projects",
        project4: "FMPIS Projects",

        peopleData: "Board of Directors",

        vision: "Vision",
        mission: "Mission",
        goals: "Goals",

        visionheading: "Our vision is to foster sustainable fisheries development across the coastal and inland regions of Maharashtra.",
        visionpara1: "We aim to transform the fisheries sector into a self-reliant, technologically advanced, and economically vibrant industry...",
        visionpara2: "Our focus remains on building resilient ecosystems, modernizing fishing infrastructure...",


        missionheading: "Our mission is to empower the fisheries sector through strategic planning, innovation, and inclusive growth.",
        missionpara1: "We strive to create sustainable livelihood opportunities...",
        missionpara2: "By facilitating partnerships with research institutions...",


        goalheading: "Our goals are strategically aligned to transform the fisheries ecosystem in Maharashtra.",
        goals1: ["Promote eco-friendly fishing practices and preserve marine biodiversity",
          "Increase fish production through scientific and sustainable methods",
          "Develop cold chains, processing units, and modern harbors",
          "Provide financial aid and insurance to fisher families",
          "Boost exports by complying with global quality standards",
          "Encourage women and youth participation in aquaculture",
          "Implement digital tools for monitoring and governance"],

        goals2: "These goals aim to ensure food security, economic prosperity, and long-term sustainability for all stakeholders involved.",


        introduction: "Introduction",
        who_we_are: "Who We Are",
        what_we_do: "What We Do",
        our_mission: "Our Mission",
        the_story: "The Story",
        objectives: "Objectives",
        our_values: "Our Values",
        future_vision: "Future Vision",

        //footer

        fisheriesCorporation:
          "Maharashtra Fisheries Development Corporation,",
        committedEmpowerment: "Empowering Fisheries, Enriching Livelihoods",
        quickLinks: "Quick Links",
        aboutUs: "About Us",
        home: "Home",
        contactUs: "Contact Us",
        tender: "Tender",
        privacyPolicy: "Privacy Policy",
        fisherieslocation: " Mumbai, Maharashtra",
        accessibleGuide: "Accessible Guide",

        //schemes
        schemes: "SERVICES & SCHEMES",
        schemetitle1: "Pradhan Mantri Matsya Sampada Yojana",
        schemetitle2: "Group Accident Insurance Scheme under PMMSY",
        schemetitle3: "Kisan Credit Cards (KCC)",
        schemetitle4: "Pradhan Mantri Matsya Sampada Yojana",
        schemetitle5: "Pradhan Mantri Matsya Sampada Yojana",
        viewmore: "View More",


        //RTi

        RtiHeadlines: "Right to Information",
        rti1: "Proactive Disclosure on Website",
        rti2: "Disposal of Online RTI/Appeal: The online RTI filed by an applicant directly to Department of Fisheries will first come in the Nodal Account of DOF which is managed by RTI Cell.",
        rti3: "Disposal of Offline RTI/Appeal",
        rti4: "RTI Cell is responsible for the timely submission of RTI Quarterly Returns to Central Information Commission.",
        rti5: "RTI Cell is responsible for the circulation of instructions relating to RTI issued by CIC/DoPT among all CPIOs/FAAs in Department of Fisheries as well as among all Public Authorities under Department of Fisheries by post/email.",
        rti6: "RTI Cell is responsible to issue User ID and Password to every officer who joins as CPIO or First Appellate Authority in Department of Fisheries.",
        rti7: "RTI Cell is responsible to see whether there are any pending RTI/Appeals inside the account of any CPIO/FAA for a long time.",
        titlerti: "Title",
        filerti: "Download File",

        srno: "SR.NO.",
        name: "Officers name ",
        designation: "Designation",
        officer1: "Mr. Yuvraj K. Phirke",
        designation1: "Administrative Officer",

        officer2: "Mr. Kishor V. Salgaonkar",
        designation2: "Senior Accountant",

        officer3: "Mrs. Shweta More",
        designation3: "Assistant Accountant",

        officer4: "Mr. Prakash S. Katkade",
        designation4: "Driver",

        officer11: "Mr. Mohammad A. Jabbar",
        designation11: "Driver",

        officer21: "Mr. Ashok Na. Wahul",
        designation21: "Peon",

        officer31: "Mr. B. D. Garad",
        designation31: "Divisional Manager",

        officer32: "Mr. Rajesh T. Chandanbatwe",
        designation32: "Senior Assistant",

        officer33: "Mr. Sunil B. Thakre",
        designation33: "Fisheries Inspector",

        officer34: "Mr. Lala R. Meshram",
        designation34: "Fisheries Inspector",

        officer35: "Mr. Irfan Shaikh",
        designation35: "Peon",

        officer36: "Mr. Padam B. Rijal",
        designation36: "Watchman",

        officer37: "Mr. Vasant B. Parshive",
        designation37: "Watchman",

        officer38: "Mr. Dinesh Dhoke",
        designation38: "Junior Clerk",




        contactinfo: "Contact Information",
        corpName: "Maharashtra Fisheries Development Corporation Ltd.",
        address: "3rd Floor, N.K.M. International House, Babu Bhai M. Chinoy Road, Behind LIC Yogakshema, Mumbai - 400 020.",
        email: "Email: mfdc73@gmail.com, mfdc@rediffmail.com",
        phone: "Phone: 022-35114917",

        contactinfo1: "Contact Information",
        corpName1: "Maharashtra Fisheries Development Corporation Ltd.",
        address1: "Ice Factory, Plot No. G-10, M.I.D.C. Chikalthana, Aurangabad 431 006.",

        corpName2: "Maharashtra Fisheries Development Corporation Ltd.",
        address2: "Administrative Building No. 2, 5th Floor, A Wing, Civil Lines, Nagpur 440 001.",
        email2: "Email: mfdcnagpur@rediffmail.com",
        phone2: "Phone: 0712-2566106",

        // contact
        message: "Send us a message",
        submit: "Submit",

        //guidlines

        guideline1: "1.Press release by PMMSY",
        guideline2: "2.PMMSY Framework",
        guideline3: "3. Annexure Framework",
        guideline4: "4.PMMSY Operational Guidelines (English)",
        guideline5: "5. PMMSY Operational Guidelines (Hindi)",
        guideline6: "6. Administrative Expenses Guidelines (English)",
        guideline7: "7. Administrative Expenses Guidelines (Hindi)",
        guideline8: "8. PMMSY Entrepreneurs Models (English)",
        guideline9: "9. PMMSY Entrepreneurs Models (Hindi)",
        guideline10: "10. Revisions in the Operational Guidelines of the Pradhan Mantri Matsya Sampada Yojana (PMMSY)",
        guideline11: "11. Beneficiary oriented sub-components of Centrally Sponsored Scheme of PMMSY (English)",
        guideline12: "12. Beneficiary oriented sub-components of Centrally Sponsored Scheme of PMMSY (Hindi)",
        guideline13: "13. FFPO Guidelines",
        guideline14: "14. Guidelines for Implementation of Single Nodal Agencies",
        guideline15: "15. Initiatives under PMMSY during FY 2020-21",
        guideline16: "16. PMMSY Reform Booklet (English)",
        guideline17: "17. PMMSY Reform Booklet (Hindi)",
        guideline18: "18. PMMSY Training Guidelines",
        guideline19: "19. Revision in the Operational Guidelines of PMMSY – 2021",
        guideline20: "20. Addendum to the Operational Guidelines of PMMSY – March, 2022",
        guideline21: "21. Administrative Approval for implementation of PMMSY 2020-21",
        guideline22: "22. Administrative Approval for implementation of PMMSY 2021-22",
        guideline23: "23. Administrative Approval for implementation of PMMSY 2022-23",
        guideline24: "24. PMMSY Reform Booklet - 2022 (English)",
        guideline25: "25. Amendments to Operational Guidelines of PMMSY – 12th Dec 2022",
        fidfguidlines1: "1. FIDF Guidlines",




      }
    },

    mr: {
      translation: {

        home: "मुख्यपृष्ठ",
        about: "आमच्याबद्दल",
        contact: "संपर्क",
        rti: "आरटीआय",
        guidlines: "मार्गदर्शक तत्त्वे",
        activities: "उपक्रम",
        keyprojects: "प्रमुख प्रकल्प",
        schemes1: "योजना",
        gallery: "गॅलरी",
        reports: "अहवाल",
        recuitment: "पद-भरती ",

        fisheriesFoundation: "महाराष्ट्र मत्स्योद्योग विकास महामंडळ मर्यादित, मुंबई",
        fisheriesaboutDescription: "खोल समुद्रातील मत्स्यव्यवसायाचा विकास व्हावा आणि मत्स्यव्यवसायात वृद्धी व्हावी यासाठी सन १९७३ मध्ये महाराष्ट्र मत्स्योद्योग विकास महामंडळाची स्थापना करण्यात आली. शासन निर्णयाच्या प्रस्तावनेनुसार, यांत्रिक मासेमारी ही आधुनिक पद्धत म्हणून स्वीकारली गेली असून यांत्रिक नौकांच्या वाढत्या संख्येमुळे मासेमारी क्षेत्रांचे अतिशोषण होण्याचा धोका आहे. त्यामुळे ३० फॅदमपेक्षा जास्त खोली असलेल्या खोल समुद्रात मासेमारी करणे गरजेचे ठरते. सध्या खाजगी उद्योजकांकडून खोल समुद्रात मासेमारी केली जात असली, तरी शासनाकडे अशा प्रकारचे कार्य हाताळणारा कोणताही अंगीकृत उपक्रम नसल्याने, पारंपरिक मच्छीमारांच्या हितासाठी शासनाने ‘महाराष्ट्र मत्स्योद्योग विकास महामंडळ मर्यादित’ या नावाने महामंडळ स्थापन केले. हे महामंडळ खोल समुद्राचे सर्वेक्षण, माशांचे लँडिंग, विपणन आणि निर्यात यासह विविध मत्स्यविकास उपक्रमांचे संघटन, समन्वय व पर्यवेक्षण करते. मत्स्यविकासासाठी सक्षम असलेल्या भागांचा विकास करून मच्छीमारांना त्याचा थेट लाभ मिळावा, यासाठीही महामंडळ प्रयत्नशील आहे. गेल्या काही वर्षांत महामंडळाच्या कारभारात आमूलाग्र बदल घडले असून मासेमारी बंदरे, फिश लँडिंग सेंटर उभारण्यासह जलाशयांचे मासेमारी व्यवस्थापन व पिंजरा पद्धतीने मत्स्यसंवर्धनाचे प्रकल्प राबवले जात आहेत. त्यामुळे मत्स्यशेतीसाठी इच्छुक व्यक्तींमध्ये उद्योजकता निर्माण होण्यास हातभार लागतो आहे.",
        mfdcAddress: "3 रा मजला, एन.के.एम. इंटरनॅशनल हाऊस, ",
        mfdcAddress1: "बाबुभाई एम. चिनॉय मार्ग, मुंबई- 400 020",

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


        quicklinesheading: "जलद दुवे",
        quickLink1Title: "प्रधानमंत्री मत्स्यसंपदा योजना डॅशबोर्ड",
        quickLink2Title: "मत्स्यव्यवसाय विभाग महाराष्ट्र शासन, भारत",
        quickLink3Title: "सागरी आणि भूजल डॅशबोर्ड",
        quickLink4Title: "सागरमाला - भारत सरकारचे नौवहन मंत्रालय",

        // deparments
        department1: "मुख्य कार्यालय ",
        department2: "नागपूर विभाग",

        department3: "औरंगाबाद विभाग ",
        departments: "विभाग",

        nfdc_projects: "एनएफडीबी प्रकल्प",
        project1: "कॉर्पोरेट सामाजिक जबाबदारी (CSR) प्रकल्प ",
        project2: "PMMSY प्रकल्प",
        project3: "Ongoing प्रकल्प",
        project4: "FMPIS प्रकल्प",

        pmmsyguidlines: "पीएमएमएसवाय मार्गदर्शक तत्वे",
        fidfguidlines: "एफआयडीएफ मार्गदर्शक तत्वे",
        generalguidlines: "सामान्य मार्गदर्शक तत्त्वे",


        peopleData: "मंडळाचे संचालक",


        vision: "दृष्टीकोन",
        mission: "मिशन",
        goals: "उद्दिष्टे",

        visionheading: "महाराष्ट्रातील किनारी व अंतर्गत भागांमध्ये शाश्वत मत्स्यव्यवसाय विकास साधणे हे आमचे उद्दिष्ट आहे.",
        visionpara1: "मत्स्यव्यवसाय क्षेत्राला स्वयंपूर्ण, तंत्रज्ञानाधारित व आर्थिकदृष्ट्या सक्षम बनवणे हा आमचा उद्देश आहे...",
        visionpara2: "सशक्त परिसंस्था उभारणे, मासेमारी पायाभूत सुविधा आधुनिक करणे...",

        missionheading: "रणनीती, नावीन्यपूर्णता आणि समावेशी विकासाद्वारे मत्स्यव्यवसाय क्षेत्र सक्षम बनवणे हे आमचे ध्येय आहे.",
        missionpara1: "शाश्वत उपजीविका संधी निर्माण करणे, न्याय्य बाजारपेठ मिळवून देणे...",
        missionpara2: "संशोधन संस्थांबरोबर भागीदारी, तंत्रज्ञानाचा अवलंब...",


        goalheading: "Our goals are strategically aligned to transform the fisheries ecosystem in Maharashtra.",
        goals1: ["Promote eco-friendly fishing practices and preserve marine biodiversity",
          "Increase fish production through scientific and sustainable methods",
          "Develop cold chains, processing units, and modern harbors",
          "Provide financial aid and insurance to fisher families",
          "Boost exports by complying with global quality standards",
          "Encourage women and youth participation in aquaculture",
          "Implement digital tools for monitoring and governance"],

        goals2: "These goals aim to ensure food security, economic prosperity, and long-term sustainability for all stakeholders involved.",

        introduction: "परिचय",
        who_we_are: "आपण कोण आहोत",
        what_we_do: "आम्ही काय करतो",
        our_mission: "आमचे ध्येय",
        the_story: "कथा",
        objectives: "उद्दिष्टे",
        our_values: "आमच्या मूल्यांचा",
        future_vision: "भविष्यातील दृष्टिकोन",

        intro_desc: "खोल समुद्रातील मत्स्यव्यवसायाचा विकास व्हावा आणि मत्स्यव्यवसायात वृद्धी व्हावी यासाठी सन १९७३ मध्ये महाराष्ट्र मत्स्योद्योग विकास महामंडळाची स्थापना करण्यात आली. शासन निर्णयाच्या प्रस्तावनेत नमुद केल्यानुसार-“मत्स्योत्पादन वाढीसाठी छोटी नौका/होडी द्वारे होणाऱ्या मासेमारीच्या तुलनेत यांत्रिक नौकेने मासेमारी करणे ही आता आधुनिक पद्धत म्हणून स्विकारली गेली आहे. यांत्रिक मासेमारी नौकांच्या संख्येत होणाऱ्या वाढीमुळे मासेमारी क्षेत्रांचे अतिशोषण होण्याचा धोका आहे. परिणामी मासेमारी कमी होऊन आणि भविष्यात यांत्रिक नौकांद्वारे केलेली मासेमारी अव्यवहारीक ठरण्याचा धोका आहे. या बाबीचा विचार करता खोल समुद्रात ३० फॅदम पेक्षा जास्त खोली असलेल्या भागात मासेमारी करणे गरजेचे आहे. खाजगी उद्योजकांकडून खोल समुद्रात मासेमारी केली जात आहे. सदर काम हाताळू शकेल अशा स्वरुपाचा शासनाचा कोणताही अंगीकृत उपक्रम नाही त्यामुळे शासन पुरस्कृत महामंडळांमार्फत खोल समुद्रातील मासेमारी प्रकल्प हाती घेऊन पारंपरिक मच्छीमारांच्या हिताचे रक्षण करणे आवश्यक आहे. शासनाने काळजीपूर्वक विचार करून मत्स्योद्योग विकास महामंडळ स्थापन करण्यास मान्यता दिली असून त्याचे नाव ‘महाराष्ट्र मत्स्योद्योग विकास महामंडळ मर्यादित’ असावे. महाराष्ट्र मत्स्योद्योग विकास महामंडळ मर्यादित यांचे कार्य हे खोल समुद्राचे सर्वेक्षण, माशांचे लँडिंग, विपणन आणि निर्यात यासह मत्स्य विकास उपक्रमांचे संघटन, समन्वय आणि पर्यवेक्षणाशी संबंधित आहे. ज्या भागात मत्स्यविकासाची क्षमता आहे, अशा भागांचा विकास करून मत्स्यविकासाचा लाभ मच्छीमारांना मिळावा, याचीही काळजी घेणे गरजेचे आहे.गेल्या काही वर्षांत महामंडळाच्या कारभारात आमूलाग्र बदल झाला आहे. महामंडळाकडून मत्सस्यव्यवसायासाठीच्या पायाभुत सुविधा जसे सागरी क्षेत्रात मासेमारी बंदरे आणि फिश लँडिंग सेंटर बांधण्याचे काम हाती घेण्यात आले आहे. तसेच मत्स्यव्यवसायाच्या विकासासाठी राज्यातील मोठ्या जलाशयांचे मासेमारी व्यवस्थापन केले जाते. मोठ्या जलाशयांमध्ये पिंजरा पद्धतीने मत्स्यसंवर्धनाच्या माध्यमातून मत्स्यशेतीची आवड असणाऱ्या व्यक्तींमध्ये उद्योजकता निर्माण करण्याचा प्रयत्न महामंडळामार्फत करण्यात येत आहे.",
        who_we_are_desc1: "आम्ही महाराष्ट्र शासनाच्या अधिपत्याखालील एक महामंडळ आहोत, जे खोल समुद्रातील मत्स्यसंपत्तीचा शाश्वत वापर आणि मच्छीमार समाजाच्या समृद्धीसाठी कार्य करतो. आम्ही आधुनिक तंत्रज्ञानाचा उपयोग करून मत्स्यव्यवसायाचा सर्वांगीण विकास साधतो.",

        //footer
        fisheriesCorporation: "महाराष्ट्र मत्स्यव्यवसाय विकास महामंडळ,",
        committedEmpowerment: "मत्स्यव्यवसाय सक्षम करणे, उपजीविका समृद्ध करणे",
        quickLinks: "जलद लिंक्स",


        aboutUs: "आमच्याबद्दल",
        home: "मुख्यपृष्ठ",
        contactUs: "संपर्क करा",
        tender: "व्यवसाय निविदा",
        privacyPolicy: "गोपनीयता धोरण",

        fisherieslocation: " मुंबई, महाराष्ट्र",
        accessibleGuide: "सुविधायुक्त मार्गदर्शक",

        //schemes
        schemes: "सेवा आणि योजना",
        schemetitle1: "प्रधानमंत्री मत्स्य संपदा योजना",
        schemetitle2: "पीएमएमएसवाय अंतर्गत गट अपघात विमा योजना",
        schemetitle3: "किसान क्रेडिट कार्ड (केसीसी)",
        schemetitle4: "पीएमएमएसवाय अंतर्गत गट अपघात विमा योजना",
        schemetitle5: "पीएमएमएसवाय अंतर्गत गट अपघात विमा योजना",
        viewmore: "अधिक पहा",

        //RTi

        RtiHeadlines: "माहितीचा अधिकार",
        rti1: "वेबसाइटवर सक्रिय खुलासा",
        rti2: "ऑनलाइन आरटीआय/अपीलचा निपटारा: अर्जदाराने थेट मत्स्यव्यवसाय विभागाकडे दाखल केलेला ऑनलाइन आरटीआय प्रथम आरटीआय सेलद्वारे व्यवस्थापित केलेल्या डीओएफच्या नोडल खात्यात येईल.",
        rti3: "ऑफलाइन आरटीआय/अपीलचा निपटारा",
        rti4: "केंद्रीय माहिती आयोगाकडे आरटीआय तिमाही विवरणपत्रे वेळेवर सादर करण्याची जबाबदारी आरटीआय सेलची आहे.",
        rti5: "मत्स्यव्यवसाय विभागातील सर्व सीपीआयओ/एफएए तसेच मत्स्यव्यवसाय विभागाच्या अंतर्गत येणाऱ्या सर्व सार्वजनिक प्राधिकरणांमध्ये सीआयसी/डीओपीटीने जारी केलेल्या आरटीआयशी संबंधित सूचना पोस्ट/ईमेलद्वारे प्रसारित करण्याची जबाबदारी आरटीआय सेलची आहे.",
        rti6: "मत्स्यव्यवसाय विभागात सीपीआयओ किंवा प्रथम अपीलीय अधिकारी म्हणून सामील होणाऱ्या प्रत्येक अधिकाऱ्याला यूजर आयडी आणि पासवर्ड जारी करण्याची जबाबदारी आरटीआय सेलची आहे.",
        rti7: "कोणत्याही सीपीआयओ/एफएएच्या खात्यात दीर्घकाळापासून कोणतेही प्रलंबित आरटीआय/अपील आहेत का हे पाहण्याची जबाबदारी आरटीआय सेलची आहे.",

        titlerti: "शीर्षक",
        filerti: "फाइल डाउनलोड करा",

        srno: "अनुक्रमांक",
        name: "अधिकाऱ्यांचे नाव",
        designation: "पद",
        officer1: "श्री. युवराज खे. फिरके",
        designation1: "प्रशासकीय अधिकारी",

        officer2: "श्री. किशोर वि. साळगांवकर",
        designation2: "वरिष्ठ लेखापाल",

        officer3: "सौ. श्वेता मोरे",
        designation3: "सहायक लेखापाल",

        officer4: "श्री. प्रकाश सं. कातकडे",
        designation4: "वाहनचालक",

        officer11: "श्री. मोहम्मद अ. जब्बार",
        designation11: "वाहनचालक",

        officer21: "श्री.अशोक ना. वाहूळ",
        designation21: "शिपाई",

        officer31: "श्री. बी. डी. गरड",
        designation31: "विभागीय व्यवस्थापक",

        officer32: "श्री. राजेश तू. चंदनबटवे",
        designation32: "वरिष्ठ सहायक",

        officer33: "श्री. सुनिल भि. ठाकरे",
        designation33: "मत्स्यनिरीक्षक",

        officer34: "श्री. लाला रा. मेश्राम",
        designation34: "मत्स्यनिरीक्षक",

        officer35: "श्री. इरफान शेख",
        designation35: "शिपाई",

        officer36: "श्री. पदम ब. रिजाल",
        designation36: "पहारेकरी",

        officer37: "श्री. वंसत भु. पारशिवे",
        designation37: "पहारेकरी",

        officer38: "श्री. दिनेश ढोके",
        designation38: "कनिष्ठ लिपिक",






        contactinfo: "संपर्क माहिती",
        corpName: "महाराष्ट्र मत्स्योद्योग विकास महामंडळ मर्यादित",
        address: "३ रा मजला, एन. के. एम. इंटरनॅशनल हाऊस, बाबुभाई एम. चिनॉय मार्ग, एल. आय. सी. योगक्षेम च्या मागे, मुंबई - ४०० ०२०.",
        email: "ई-मेल: mfdc73@gmail.com, mfdc@rediffmail.com",
        phone: "दुरध्वनी क्रमांक: ०२२-३५११४९१७",

        contactinfo1: "संपर्क माहिती",
        corpName1: "महाराष्ट्र मत्स्योद्योग विकास महामंडळ मर्यादित,",
        address1: "बर्फ कारखाना, प्लॉट नं. जी-10, एम.आय.डी.सी.  चिखलठाणा, औरंगाबाद 431 006.",


        corpName2: "महाराष्ट्र मत्स्योद्योग विकास महामंडळ मर्यादित",
        address2: "प्रशासकीय ईमारत क्र. 2, पाचवा माळा, ए विंग, सिव्हिल लाईन, नागपूर  440 001.",
        email2: "ई-मेल: mfdcnagpur@rediffmail.com",
        phone2: "दुरध्वनी क्रमांक :- 0712-2566106 ",



        // contact
        message: "आम्हाला संदेश पाठवा",
        submit: "सबमिट करा",

        //guidlines


        guideline1: "1. पीएमएमएसवाय द्वारे प्रसिद्धीपत्रक",
        guideline2: "2. पीएमएमएसवाय आराखडा",
        guideline3: "3. परिशिष्ट आराखडा",
        guideline4: "4. पीएमएमएसवाय कार्यान्वयन मार्गदर्शक तत्त्वे (इंग्रजी)",
        guideline5: "5. पीएमएमएसवाय कार्यान्वयन मार्गदर्शक तत्त्वे (हिंदी)",
        guideline6: "6. प्रशासकीय खर्च मार्गदर्शक तत्त्वे (इंग्रजी)",
        guideline7: "7. प्रशासकीय खर्च मार्गदर्शक तत्त्वे (हिंदी)",
        guideline8: "8. पीएमएमएसवाय उद्योजक मॉडेल्स (इंग्रजी)",
        guideline9: "9. पीएमएमएसवाय उद्योजक मॉडेल्स (हिंदी)",
        guideline10: "10. प्रधानमंत्री मत्स्य संपदा योजनेच्या कार्यान्वयन मार्गदर्शक तत्त्वांमध्ये सुधारणा",
        guideline11: "11. पीएमएमएसवायच्या केंद्र पुरस्कृत योजनेचे लाभार्थी-केंद्रित उपघटक (इंग्रजी)",
        guideline12: "12. पीएमएमएसवायच्या केंद्र पुरस्कृत योजनेचे लाभार्थी-केंद्रित उपघटक (हिंदी)",
        guideline13: "13. एफएफपीओ मार्गदर्शक तत्त्वे",
        guideline14: "14. सिंगल नोडल एजन्सी अंमलबजावणीसाठी मार्गदर्शक तत्त्वे",
        guideline15: "15. वित्तीय वर्ष 2020-21 मध्ये पीएमएमएसवाय अंतर्गत घेतलेले उपक्रम",
        guideline16: "16. पीएमएमएसवाय सुधारणा पुस्तिका (इंग्रजी)",
        guideline17: "17. पीएमएमएसवाय सुधारणा पुस्तिका (हिंदी)",
        guideline18: "18. पीएमएमएसवाय प्रशिक्षण मार्गदर्शक तत्त्वे",
        guideline19: "19. प्रधानमंत्री मत्स्य संपदा योजनेच्या कार्यान्वयन मार्गदर्शक तत्त्वांमध्ये सुधारणा_2021",
        guideline20: "20. पीएमएमएसवाय कार्यान्वयन मार्गदर्शक तत्त्वांचे परिशिष्ट – मार्च, 2022",
        guideline21: "21. पीएमएमएसवाय अंमलबजावणीसाठी प्रशासकीय मान्यता 2020-21",
        guideline22: "22. पीएमएमएसवाय अंमलबजावणीसाठी प्रशासकीय मान्यता 2021-22",
        guideline23: "23. पीएमएमएसवाय अंमलबजावणीसाठी प्रशासकीय मान्यता 2022-23",
        guideline24: "24. पीएमएमएसवाय सुधारणा पुस्तिका - 2022 (इंग्रजी)",
        guideline25: "25. प्रधानमंत्री मत्स्य संपदा योजनेच्या कार्यान्वयन मार्गदर्शक तत्त्वांमध्ये दुरुस्ती_12 डिसेंबर 2022",


        fidfguidlines1: "1. FIDF मार्गदर्शक तत्वे",








      }
    }
  },
});

export default i18next;