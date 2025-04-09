import i18next from "i18next";
import { initReactI18next } from "react-i18next";
i18next.use(initReactI18next).init({
  debug: true,
  fallbackLng: "mt",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        aboutUs: "About Us",
        home: "Home",
        contactUs: "Contact Us",
        tender: "Tender",
        privacyPolicy: "Privacy Policy",
       
        pcmcName: "Pimpri Chinchwad Muncipal Corporation",
        connectWithUs: "Connect With Us",
        callNow: "Call Now",
        signIn: "Sign In",
        logout: "Logout",
        welcomeBack: "Welcome back !",
        logIntoYourAccount: "Log into your account",
        enterEmailAndPassword: "Enter your email and password to login",
        enterUserNameAndPasswordOrMobile:
          "Enter your User Id/Phone No. and password.",
        dontHaveAnAccount: "Don't have an account ?",
        signUp: "Sign Up",
        welcome: "Welcome !",
        enterYourDetailsToSignup: "Enter your details to signup",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        password: "Password",
        alreadyHaveAnAccount: "Already have an account ?",
        heading1: "Eligibility",
        description1:
          "This competition is open to everyone, without any discrimination based on age, education, gender, disability, profession, or skill.",
        heading2: "The concept of the tagline",
        description2:
          "The vision of empowerment of persons with disabilities should be clearly reflected in the logo and tagline. Additionally, the commitment of Divyang Bhavan Foundation to protect the rights of persons with disabilities should be evident.",
        heading3: "Inspirational Logo Contest",
        description3:
          'A competition has been organized to design a logo and tagline for "Divyang Bhavan Foundation." All creative individuals across the country are invited to participate in this competition by Divyang Bhavan Foundation.',
        importantNoticeForContestants: "Important notice for contestants",
        noticeForWinners:
          "The contestants who will be the winners of the competition will have their logos and taglines trademarked, and an agreement will be made with the winner according to the Trade Mark and Intellectual Property (IP) Rights Act, and these will be obtained for the company in C.D.R. format.",
        freeEntryNotice:
          "Participation in the competition is free, and each participating contestant will be given a certificate of participation by Pimpri Chinchwad Mahanagar Palika Divyang Bhavan Foundation Company.",
        competitionDuration: "Contest Concluded!",
        competitionDescription:
          "The curiosity of Marathi and English tag line competition results conducted by Pimpri Chinchwad Mahanagar Palika Divyang Bhavan Foundation is over now.. You can check your result on competition page, and download your certificate online...",
        congratsMsg:
          "Congratulations to all the contestants who participated in the competition!!!",
        to: "to",
        prizes: "Prizes",
        participateDescription:
          "Participate in competitions, unleash your creativity, and make your name shine by winning attractive prizes. This is a golden opportunity for you !",
        competitionOrganized: "Competition organized",
        logoDesignPrize: "Prize money for logo design contest winners.",
        taglineContestPrize: "Prize money for tagline contest winners.",
        competenceAndSelfEsteem: "Competence and self-esteem",
        empowermentAndSelfEsteemDescription:
          "Empowerment and self-esteem is about making people with disabilities aware of their abilities and motivating them to live with self-respect. Let us come together to create a bright future for the disabled.",
        empowermentOfDisabled: "Empowerment of the disabled",
        empowermentOfDisabledDescription:
          "Empowerment of the disabled means making them self-reliant, expanding their skills, and strengthening their position in society. This is our purpose, the direction of equality, and the inspiration of empowerment.",
        divyangFoundation:
          "Pimpri Chinchwad Mahanagar Palika Divyang Bhavan Foundation",
        pimpriDescription:
          "Pimpri Chinchwad Mahanagar Palika is a pioneer in taking initiatives for the rights of persons with disabilities. The Mahanagar Palika has implemented many effective schemes to safeguard the interests of the disabled and protect their rights. The Pimpri Chinchwad Mahanagar Palika is committed to implementing the Rights of Persons with Disabilities Act, 2016 (RPwD Act 2016). Accordingly, the Mahanagar Palika has established Divyang Bhavan Foundation at Morwadi, Pimpri. Sadar Bhavan works for the therapy and rehabilitation of all persons with disabilities as well as their skills and empowerment.",
        publicComments: "Public Comments",
        peopleSayAboutUs: "People say about us",
        divyangPhenomenalJob:
          "Divyang Bhavan Foundation is a social organization, which provides various facilities and services for persons with disabilities. The aim of this organization is to reduce the difficulties in the lives of persons with disabilities and help them live more independently and with dignity.",
        rajeshPatil: "Siddharth Bhosale",
        foundationWorkImpact:
          "Divyang Bhavan Foundation is actually rooting for the idea of ​treating man as man. This is creating a positive attitude towards the disabled.",
        snehaShah: "Pratibha Birajdar",
        extraordinaryEfforts:
          "Divyang Bhavan has started as a one-stop centre. According to the RPwD Act 2016, therapy services are being provided here to 21 types of disabilities. Here are the guidelines that are essential for the holistic development of a person with disabilities.",
        amitKumar: "Dr. Priyanka Ghute",
        testimonial4:
          'A soul born abnormal has to struggle to live a normal life, it is certainly painful. Divyang Bhavan Foundation is working very positively to make a change in the society such as "A home where there should be no relationship, love and humanity" for the disabled.',
        akshaylata: "Akshay Lata Ashruba Neharkar",
        testimonial5:
          "Divyang Bhavan Foundation is a fortunate event for the disabled people and their parents in Pimpri Chinchwad Mahanagar Palika. The said foundation will continue to work in terms of their physical, educational, vocational and social rehabilitation from disability prevention measures. In this regard, the said Divyang Bhavan Foundation will be operational by appointing a well-equipped building with all facilities and experts in the field of the disabled.This innovative initiative in India is being implemented through PCMC for comprehensive rehabilitation of disabled people. It is sure that it will benefit all the disabled people and their parents in PCMC limits.All the best for the future of Divyang Bhavan Foundation.",
        nandkumarphule:
          "Mr. NandKumar Phule, General Manager (Sec.) Maharashtra State Disability Finance and Development Corporation, Mumbai",
        resetPassword: "Reset Password",
        enterPassword: "Enter Password",
        reEnterPassword: "Re - Enter Password",
        reset: "Reset",
        englishTagline: "English tagline",
        marathiTagline: "Marathi tagline",
        registerNow: "Login Now",
        days: "days",
        hours: "hours",
        minutes: "minutes",
        seconds: "seconds",
        august: "August",
        phoneNumber: "Phone Number",
        countryCode: "Country Code",
        participationCertificate:
          "Each participating contestant will be given a certificate of participation by Pimpri Chinchwad Mahanagar Palika Divyang Bhavan Foundation.",
        termsAndConditions: "TERMS AND CONDITIONS REGARDING THE CONTEST",
        logoSize:
          "Logo size should be 5 MB. Because the logo can be enlarged to the size of the billboard if needed.",
        highResolution:
          "The logo should be in high resolution with at least 300 DPI.",
        acceptedFormats:
          "The said logo design and tagline will be accepted in JPEG or PDF format.",
        evaluationCriteria: "The evaluation criteria for logos are as follows:",
        simplicity: "Simplicity",
        simplicityDescription:
          "The design should be simple and easy to understand.",
        unique: "Unique",
        uniqueDescription:
          "The logo should be original and not similar to any other organization's logo.",
        relevance: "Relevance",
        relevanceDescription:
          "The design should be relevant to the work of Divyang Bhavan Foundation.",
        honorCompetition: "Honor competition, follow the rules !",
        participationHonor: "Participation in competition, honoring creativity",
        empoweredDisabled: "Empowered disabled, prosperous society !",
        winPrizes: "Win attractive prizes !",
        divyangBhavanFoundation:
          "Pimpri Chinchwad Mahanagar Palika Divyang Bhavan Foundation",
        supportInspiration: "Your support will inspire us",
        supportEmpowerment:
          "Your support, our inspiration; Let's open a new direction for the empowerment of the disabled !",
        watchVideo: "Watch the video",
        enterFirstName: "Enter your first name",
        enterLastName: "Enter your last name",
        enterCompanyName: "Enter company name",
        enterMobileNumber: "Enter mobile number",
        enterEmail: "Enter your email",
        enterPassword: "Enter Your Password",
        confirmPassword: "Confirm your password",
        passwordConfirm: "Password Confirm",
        companyName: "Company name",
        enterCompanyName: "Enter company name",
        or: "Or",
        oneLogoPerParticipant:
          "Only one logo, one Marathi tagline, and one English tagline will be accepted per participant.",
        noAIForLogoTagline:
          "Logo and Tagline created with the help of AI will not be accepted.",
        registerAs: "Register as",
        personal: "Personal",
        company: "Company",
        acceptTerms: "I accept the terms and conditions",
        forgotPassword: "Forgot your password ?",
        fisheriesCorporation:
          "Maharashtra Fisheries Development Corporation,",
        committedEmpowerment: "Empowering Fisheries, Enriching Livelihoods",
        quickLinks: "Quick Links",
        advertisementInfo: "Advertisement Information",
        rightToInformation: "Right to Information",
        contact: "Contact",
        accessibleGuide: "Accessible Guide",
        fisherieslocation: " Mumbai, Maharashtra",
        noWorriesResetInstructions:
          "No worries, we'll send you reset instructions.",
        forgotPassword: "Forgot Password ?",
        backToLogin: "Back to Login",
        enterOTP: "Enter OTP",
        enter4DigitOTP: "Enter 4 digit OTP",
        sendOTP: "Send OTP",
        siteVisits: "Site Visits",
        contactInformation: "Contact Information",
        enquiryForm: "Enquiry Form",
        pleaseGiveUsYourFeedback: "Please Give Us Your Feedback !!",
        sendMessage: "Send Message",
        sendFeedback: "Send Feedback",
        message: "Message",
        name: "Name",
        contactUs2: "Contact Us",
        career: "Career",
        hiringNow:
          "Divyang Bhavan Foundation is hiring now..so get connect with us !!",
        therapistInDifferentAreas: "Therapist in different areas",
        lookingForTherapists:
          "We are looking for different therapists, kindly get details and connect with us",
        vacanciesInformation:
          "More information about Vacancies in Divyang Bhavan Foundation - Download from here",
        audiologistAndProsthetics: "Audiologist / Sr. Prosthetics / Orthotics",
        lookingForAudiologist:
          "We are looking for Audiologist/ Sr. Prosthetics / Orthotics, kindly get details and connect with us",
        rehabilitationWorkers: "Rehabilitation workers",
        lookingForRehabilitationWorkers:
          "We are looking for Rehabilitation workers, kindly get details and connect with us",
        kalaShikshak: "Kala Shikshak",
        lookingForKalaShikshak:
          "We are looking for Kala Shikshak, kindly get details and connect with us",
        carrerResult: "Recruited Staff List",

        kalaShikshak: "Art Teacher",
        lookingForKalaShikshak:
          "We have vacancies for art teachers, please find more information and contact us.",
        carrerResult: "Recruited Employees",
        totalEmployees: "Our Total Employees",
        employeeCount: "45+",
        employeeDescription:
          "In Divynag Bhavan Foundation, we have more than 45 people as our employees, who work efficiently here.",
        services: "Our Services",
        servicesCount: "10+",
        servicesDescription:
          'We have many advanced facilities and services for the development of "Divyang People".',
        campaign1Title: "Logo Design Competition",
        campaign1Description:
          "Divyang Bhavan Foundation has organized a 'LOGO DESIGN COMPETITION' for all enthusiastic and artistic people in our society.",
        campaign1Progress: 90,
        campaign1ButtonColor: "#f44336",

        campaign2Title: "Marathi Tagline Competition",
        campaign2Description:
          "Divyang Bhavan Foundation has organized a 'MARATHI TAGLINE COMPETITION' for all enthusiastic and artistic writers in our society.",
        campaign2Progress: 80,
        campaign2ButtonColor: "#9c27b0",

        campaign3Title: "English Tagline Competition",
        campaign3Description:
          "Divyang Bhavan Foundation has organized an 'ENGLISH TAGLINE COMPETITION' for all enthusiastic and artistic writers in our society.",
        campaign3Progress: 85,
        campaign3ButtonColor: "#26a69a",
        campaingHeading: "INTRODUCING OUR CAMPAIGNS",
        campaingSubheading: "WE BOOST TALENTS",
        campaingReadMore: "Read More",
        service1Title: "Our Employees",
        service1Value: "45+",

        service2Title: "Service Capacities",
        service2Value: "200+",

        service3Title: "Our Therapists",
        service3Value: "25+",

        service4Title: "Departments Services",
        service4Value: "50+",


      
        person1Name: "Shekhar Singh",
        person1Designation: "Chairman",

        person2Name: "Omprakash Deshmulh (Retired IAS)",
        person2Designation: "Managing Director",

        person3Name: "Paresh Gandhi",
        person3Designation: "CEO",

        person4Name: "Vijay Kanhekar",
        person4Designation: "Advisor",
        peopleData: "MEET OUR DIRECTORS AND HEADS",
        event1Date: "Sept, 2024",
        event1Title: "Jagtik sanketik bhasha, Karnbadhir din celebration",

        event2Date: "Sept, 2024",
        event2Title: "New LOGO Design Competition",
        leftSectionHeading: "WHAT'S NEW",
        leftSectionSubheading: "READ OUR LATEST NEWS AND BLOG POST",
        leftSectionButtonText: "SEE ALL NEWS",

        blogAdminText: "BY ADMIN",
        blogCommentsText: "Comments",
        blogKnowMoreButton: "Know More",
        blog: "Blog",
        gallery: "Gallery",
        ourGallery: "Our Gallery",
        ourBlog: "Our Blog",
        ourCareer: "Our Career",
        ourTender: "Our Tender",
        sudhiPatrak: "Winners declaration of LOGO and Tagline competition",
        logoWinner: "Logo competition winner- Ravi Pawar",
        marathiTaglineWinner: "Marathi Tagline winner- Vaishnavi Vinod Jagtap",
        englishTaglineWinner: "English tagline winner- Hrutuja Patil",
        departments: "Departments",

        //added by prachi
        ourStoryTitle: "Our Story",
        ourStory:
          "Divyang Bhavan Foundation, an initiative by the Samaj Vikas Department of Pimpri Chinchwad Municipal Corporation, was established as a Section 8 company in February 2024. With 80G and 12A certifications, the foundation is pioneering a state-of-the-art rehabilitation center, the first of its kind in India, dedicated to supporting individuals with all 21 recognized types of disabilities. The center focuses on a comprehensive lifecycle approach, offering specialized therapies, manufacturing of assistive devices, and programs for skill enhancement. Through initiatives aimed at improving employability and fostering entrepreneurship, Divyang Bhavan Foundation is committed to promoting inclusivity and empowering individuals with disabilities for a brighter, more independent future.",
        boardOfDirectors: "Board of Directors",
        director1: "Shekhar Singh, I.A.S (Commissioner, PCMC)",
        designaton1: "Chairman",
        director2: "Omprakash Deshmukh (IAS Retd.)",
        designaton2: "Managing Director",
        director3: "Pradip Jambhale Patil (Additional Commissioner, PCMC)",
        designaton3: "Director",
        director4:
          "Tanaji Narale (Assistant Commissioner, Samaj Vikas Department, PCMC)",
        designation4: "Director",
        director5:
          "Shriniwas Dangat (Assistant Commissioner, Divyang Kaksh, PCMC)",
        designation5: "Director",
        comitee: "Our Executive Committee",
        ec1: "Omprakash Deshmukh (IAS Retd.)",
        ecDesignation1: "Chairman",
        ec2: "Tanaji Narale (Assistant Commissioner, Samaj Vikas Department, PCMC)",
        ecDesignation2: "Director",
        ec3: "Shriniwas Dangat (Assistant Commissioner, Samaj Vikas Department (Divyang Kaksh), PCMC)",
        ecDesignation3: "Director",
        ec4: "Paresh Gandhi",
        ecDesignation4: "CEO",
        ec5: "Girish Paralikar",
        ecDesognation5: "Company Secretary",
        advisoryBoard: "Meet Our Advisory Board",
        ab1: "Dr Rajendra Wabale",
        abDesignation1: "YCM Dean",
        abMailId1: "deanpgiycmh@pcmcindia.gov.in",
        ab2: "Vijay Kanhekar",
        abDesignation2:
          "Parkalpa Sanchalak DDRC & National Award winner organisation that works for PWD",
        abMailId2: "vijaykanhekar@gmail.com",
        ab3: "Abhijeet Murugkar",
        abDesignation3:
          "Accessiblity consultant and special child parent Attended on VC",
        abMailId3: "designbridgepune@gmail.com",
        ab4: "Anuradha Joshi",
        abDesignation4: "Ex- Divyang Commissioner for the State of Goa",
        abMailId4: "anusanket@gmail.com",
        ab5: "Dhanajay Bhole (PwD)",
        abDesignation5: "Non-Executive Director Sugamya Digital Solutions",
        abMailId5: "dhananjay.bhole@gmail.com",
        ab5: "Dhanajay Bhole (PwD)",
        abDesignation5: "Non-Executive Director Sugamya Digital Solutions",
        abMailId5: "dhananjay.bhole@gmail.com",
        ab6: "Dr. Sanjay Jain (PwD)",
        abDesignation6: "Law expert, Law college Pune-attended on VC",
        abMailId6: "sanjay.jain@nls.ac.in",
        ab7: "Dr. Kalyani Mandke",
        abDesignation7:
          "Audiologist excellent work in hearing impaired disability, American & Indian Association secretary",
        abMailId7: "kalyani.mandke@gmail.com",
        ab8: "Suvarna Bobade",
        abDesignation8: "Psychologist",
        abMailId8: "bobadesuvarna13@gmail.com",
        ab9: "Commander Bijur",
        abDesignation9: "Autistic Parents Association Head",
        abMailId9: "bijurns@gmail.com",
        ab10: "Aparna Panse",
        abDesignation10: "Sport & Culture expert",
        abMailId10: "balkalyansanstha@gmail.com",
        ab11: "Minetta Patil",
        abDesignation11: "Public Relations Advisor",
        abMailId12: "",
        ab12: "Datta Bhosale (PwD)",
        abDesignation12: "Social Worker & Orthopedically Disable",
        abMailId11: "",

        // deparments
        // department1: "Vocational Counselor Department",
        // roleVocational: "Role of the Vocational Counselor",
        // role1: "Identifying individuals’ abilities and interests",
        // role2: "Providing guidance on vocational education and training.",
        // role3: "Assisting in finding employment opportunities",
        // role4: "Ensuring adaptability and accessibility at the workplace",
        // role5:
        //   "Supporting individuals in enhancing independence and empowerment.",
        // responsibilityVocational:
        //   "Responsibilities of the Vocational Counselor",
        // responsibility1: "Recognizing individuals abilities and interests",
        // responsibility2:
        //   "Developing plans for vocational education and training",
        // responsibility3: "Preparing individuals for employment opportunities",
        // responsibility4:
        //   "Ensuring adaptability and accessibility in the workplace",
        // responsibility5:
        //   "Providing mental and emotional support to individuals",
        // benefitsVocational: "Benefits of a Vocational Counselor",
        // benefits1: "Access to vocational education and training",
        // benefits2: "Employment opportunities",
        // benefits3: "Workplace adaptability and accessibility",
        // benefits4: "Enhanced independence and empowerment",
        // benefits5: "Mental and emotional support.",
        // qualitiesVocational: "Qualities of a Vocational Counselor",
        // qualities1: "Knowledge of vocational guidance",
        // qualities2: "Professionalism and integrity",
        // qualities3: "Ability to understand individuals needs.",
        // qualities4:
        //   "Capacity to ensure workplace adaptability and accessibility",
        // qualities5: "Confidentiality and trustworthiness.",
        // taglineVocational:
        //   "The role of a vocational counselor is essential for persons with disabilities. By providing guidance on vocational education, identifying employment opportunities, and ensuring workplace adaptability, they support individuals in achieving independence and empowerment.",
        // mail: "Contact Us",
        // floorVocationl: "Fourth Floor",
        // department2: "Special Education Department",
        // roleSE: "Role Of Special Educator",
        // roleSE1: "Assessment and Identification",
        // roleSE2: "Individualized Education Plans (IEPs)",
        // roleSE3: "Adapted Curriculum",
        // roleSE4: "Advocacy",
        // roleSE5: "Behavioural Assessment",
        // roleSE6: "Group Session",
        // seWork: "Special Educator's work on these disabilities",
        // seWork1: "Learning Disabilities",
        // seWork2: "Autism Spectrum Disorder",
        // seWork3: "Visual Impairment",
        // seWork4: "Hearing Impairment",
        // seWork5: "Intellectual Disabilities",
        // seWork6: "Cerebral Palsy",
        // seWork7: "Multiple Disabilities",
        // therapySE: "Therapy Services",
        // therapySE1: "Communication",
        // therapySE2: "Socialisation",
        // therapySE3: "Cognitive",
        // therapySE4: "Activities Of Daily Living",
        // therapySE5: "Motor (Gross & Fine)",
        // therapySE6: "Pre-Academic",
        // therapySE7: "Pre-Writing",
        // therapySE8: "Pre-Reading",
        // therapySE9: "Pre-Maths",
        // seTagline:
        //   "Special educators play a vital role in fostering an inclusive and supportive educational atmosphere for all students. Special Educator's are taking group sessions to enhance socialization.",
        // floorSE: "Fourth Floor",
        // department3: "Sign Language Department",
        // signWork: "Work in the department",
        // signWork1:
        //   "interpretation in program, Indian sign language classes, counselling for deaf candidate parents.",
        // signCapacity: "Capacity of the department",
        // signCapacity1:
        //   "20 people at a time for group activity or one to one session ,Ex- ( ISL course)",
        // signFeatures: "Features of the department",
        // signFeatures1: "Communication",
        // signFeatures2: "Indian sign language learning",
        // signFeatures3: "Open for all",
        // signFeatures4: "We communicate with the deaf people in sign language",
        // signFeatures5:
        //   "It helps to hearing and deaf group for break communication gap",
        // floorSign: "Fourth Floor",
        // department4: "Psychology Department",
        // testingService: "Testing and Assessment Services",
        // testingService1: "Developmental Assessment",
        // testingService2: "Cognitive Assessment (IQ)",
        // testingService3: "Social Development (SIQ)",
        // testingService4: "Scholastic Performance Assessment (LD/SLD)",
        // testingService5: "Behavioural Assessment",
        // testingService6:
        //   "Any Other (QOL, Self Esteem, Beck-Stress, Anxiety, Depression Assessments) (in process)",
        // therapyServices: "Therapy Services",
        // therapyServices1: "Psycho education",
        // therapyServices2: "Individual therapy (Children, Adolescents, Adults)",
        // therapyServices3: "Cognitive Behavioral Therapy (CBT)",
        // therapyServices4: "Behavior therapy (BT)",
        // therapyServices5: "Group therapy",
        // therapyServices6: "Family therapy",
        // therapyServices7: "Transnational Analysis Therapy",
        // therapyServices8: "REBT",
        // therapyServices9: "Art Therapy",
        // therapyServices10:
        //   "Eclectic Model (as per the client's requirement and their level of functioning)",
        // communityOutreac: "Community Outreach (Services For PwDs)",
        // communityOutreach1: "Workshops and Seminars",
        // communityOutreach2: "Support Groups",
        // communityOutreach3: "Community Events",
        // communityOutreach4: "Collaborations with Local Organizations",
        // communityOutreach5: "Behavioural Assessment",
        // communityOutreach6: "Referral Services",
        // amenities: "Client Amenities for PwDs",
        // amenities1: "Free Parking",
        // amenities2: "Wheelchair Accessibility",
        // amenities3: "Comfortable Waiting Area",
        // amenities4: "Refreshments (Food Truck - in process)",
        // amenities5: "Play Area for Children",
        // floorPsychology: "Fourth Floor",
        // department5: "Prosthetics & Orthotics Department",
        // prostheContent:
        //   "The Prosthetics & Orthotics (P&O) Department at Divyang Bhavan Foundation PCMC , morwadi pimpri is dedicated to enhancing the quality of life for individuals with physical disabilities by providing state-of-the-art prosthetic and orthotic solutions.",
        // highlightContent:
        //   "Our team of skilled professionals is committed to delivering compassionate care, custom devices, and rehabilitation support to help patients regain independence and mobility.",
        // prostheServises: "Servises Offered By Department",
        // prostheServiceTitle1: "Prosthetic Services",
        // prostheServiceDesciption1:
        //   "Custom-made upper and lower limb prostheses, Myoelectric prostheses (advanced bionic arms), Post-amputation rehabilitation, Adjustment and maintenance of prosthetic devices",
        // prostheServiceTitle2: "Orthotic Services ",
        // prostheServiceDesciption2:
        //   "Custom orthotic devices for spinal, lower, and upper limb conditions, Foot orthotics for diabetes, plantar fasciitis, and other conditions, Pediatric orthotics for congenital or developmental issues, Post-traumatic or post-surgical bracing and supports",
        // prostheServiceTitle3: "Rehabilitation & Support Services",
        // prostheServiceDesciption3:
        //   "Physical therapy and rehabilitation for mobility and functionality improvement, Gait analysis and training, Follow-up care and device adjustments, Counseling and emotional support for individuals and families",
        // prostheServiceTitle4: "Assistive Devices",
        // prostheServiceDesciption4:
        //   "1.Wheelchairs, crutches, and walking aids, 2.Custom seating systems for patients with complex mobility needs ",
        // featuresProsthe: "Features Of Department",
        // featuresProstheTitle1: "Advanced Technology",
        // featuresProstheDescription1:
        //   "Our department is equipped with the latest tools and technologies  for  fabrication of prostheses and orthoses.",
        // featuresProstheTitle2: "Customized Solutions",
        // featuresProstheDescription2:
        //   "We ensure that every device is tailored to fit the unique needs of each patient, enhancing comfort and functionality.",
        // featuresProstheTitle3: "Holistic Care",
        // featuresProstheDescription3:
        //   "We provide comprehensive care including physical, emotional, and psychological support to help patients through the recovery and adaptation process",
        // featuresProstheTitle4: "Multidisciplinary Approach",
        // featuresProstheDescription4:
        //   "Our team collaborates with orthopedic surgeons, physiotherapists, and other specialists to ensure a coordinated treatment plan for each patient",
        // featuresProstheTitle5: "Accessibility",
        // featuresProstheDescription5:
        //   "We offer affordable services and ensure timely care for all patients, including those from underserved communities",
        // ourfacilities: "Our Facilities",
        // floorProsthe: "Second Floor",
        // department6: "Occupational Therapy Department",
        // occupationaltagline:
        //   "Occupational therapy is a form of therapy designed to assist individuals with disabilities in their daily tasks and activities. This therapy helps individuals with disabilities become self-reliant and improves their quality of life.",
        // roleOccupational: "Role of Occupational Therapy",
        // roleOccupational1:
        //   "Helping individuals with disabilities in their daily tasks and activities",
        // roleOccupational2:
        //   "Encouraging individuals with disabilities to use their disabilities effectively",
        // roleOccupational3:
        //   "Enhancing the physical and mental abilities of individuals with disabilities",
        // roleOccupational4:
        //   "Supporting individuals with disabilities in achieving social and economic self-sufficiency",
        // roleOccupational5:
        //   "Assisting families of individuals with disabilities in caregiving.",
        // typesOccupational: "Types of Occupational Therapy",
        // typesOccupational1: "Physical Occupational Therapy",
        // typesOccupational2: "Mental Occupational Therapy",
        // typesOccupational3: "Student Occupational Therapy",
        // typesOccupational4: "Rehabilitation Occupational Therapy",
        // benefitsOccupational: "Benefits of Occupational Therapy",
        // benefitsOccupational1: "Increases self-reliance",
        // benefitsOccupational2: "Assists in daily tasks and activities",
        // benefitsOccupational3: "Enhances physical and mental capabilities",
        // benefitsOccupational4: "Supports social and economic independence",
        // benefitsOccupational5: "Improves quality of life",
        // occupationalBottomLine:
        //   "Occupational therapy is essential for individuals with disabilities, helping them achieve self-reliance and improve their quality of life.",
        // floorOccupational: "Second Floor",
        // department7: "Counselling & Program Management Department",
        featuresCPM: "Features Of Department",
        featuresCPMTitle1: "1.Support Services",
        featuresCPMDescription1:
          "Provide essential support to individuals face to face, over the telephone, or online, helping them cope with challenges related to disabilities.",
        featuresCPMTitle2: "2.Need Assessment",
        featuresCPMDescription2:
          "Conduct assessments to understand the needs of individuals families, corporates or groups of PwDs and create tailored support plans",
        featuresCPMTitle3: "3.Intervention & Guidance",
        featuresCPMDescription3:
          "Assist individuals and family in exploring options and opportunities suitable for their skills and interests",
        featuresCPMTitle4: "4. Workshops and Training",
        featuresCPMDescription4:
          "Organize workshops aimed at developing life skills, social skills, and coping strategies",
        featuresCPMTitle5: "5. Advocacy",
        featuresCPMDescription5:
          "Advocate for the rights of individuals with disabilities, helping them access necessary resources and services & Building a relationship of trust and respect.",
        featuresCPMTitle6: "6.Family Counselling",
        featuresCPMDescription6:
          "Provide guidance and support to families, listening to their concerns, empathising with them, and helping them to see things more clearly or in a different way",
        featuresCPMTitle7: "7.Referral Services",
        featuresCPMDescription7:
          "Work in conjunction with other professionals and refer individuals to additional services like therapy, medical support, or educational resources.",
        featuresCPMTitle8: "8. Program Development",
        featuresCPMDescription8:
          "Designing and implementing programs tailored to the needs of individuals with disabilities, focusing on skill development, empowerment, and social inclusion",
        featuresCPMTitle9: "9.Event Coordination",
        featuresCPMDescription9:
          "Organizing workshops, seminars, conferences, symposiums and other outreach & in-house programs that promote awareness, education, and engagement among participants and the community",
        featuresCPMTitle10: "10. Resource Management",
        featuresCPMDescription10:
          "Managing resources and materials needed for various programs, ensuring that activities are well-equipped and accessible",
        featuresCPMTitle11: "11. Collaboration",
        featuresCPMDescription11:
          "Organizing a professional development, educational, awareness, skilling, employment, entrepreneurial and other programs and event for the PwDs and others. Working with other departments, schools, institutions, community organizations, and stakeholders to enhance program effectiveness and reach",
        featuresCPMTitle12: "12.Monitoring and Evaluation",
        featuresCPMDescription12:
          "Assessing the impact of programs through feedback and evaluation metrics to ensure the objectives and serve participants effectively.",
        featuresCPMTitle13: "13. Community Outreach",
        featuresCPMDescription13:
          "Engaging with the community to raise awareness about the programs offered and to encourage participation",
        featuresCPMTitle14: "14.Learning & Trainings",
        featuresCPMDescription14:
          "Providing training for staff and volunteers involved in program delivery, ensuring they are equipped to support participants",
        featuresCPMTitle15: "15. CSR Applications",
        featuresCPMDescription15:
          "Identifying funding opportunities and writing proposals to secure financial support for various programs",

        floorCPM: "First Floor",
        department8: "Audiology & Speech Department",
        testingAudio: "Testing and Assessment Services",
        testingAudio1: "Hearing Assessment",
        testingAudio2: "Receptive and Expressive Language Assessment ",
        testingAudio3: "Speech Assessment (Articulation/Phonology)",
        testingAudio4: "Voice Assessment ",
        testingAudio5: "Speech Fluency Assessment",
        testingAudio6: "Neurological Disorder Assessment",
        testingAudio7: "Social Communication Skill Assessment",
        testingAudio8: "Feeding/Swallowing Assessment",
        testingAudio9: "Literacy Assessment",

        therapyAudio: "Therapy Services",
        therapyAudio1: "Speech Therapy for Phonology/Articulation",
        therapyAudio2: "Speech Fluency Therapy",
        therapyAudio3: "Speech Therapy for Neurological Disorders",
        therapyAudio4: "Voice Therapy",
        therapyAudio5: "Swallowing Therapy",
        therapyAudio6: "Phonological Therapy",
        therapyAudio7: "Individual therapy (Children, Adolescents, Adults)",
        therapyAudio8: "Group therapy (support groups, skills training)",
        therapyAudio9: "Parent Counseling",

        comunityAudio: "Community Outreach (Services For PwDs)",
        comunityAudio1: "Workshops and Seminars",
        comunityAudio2: "Support Groups",
        comunityAudio3: "Community Events",
        comunityAudio4: "Collaborations with Local Organizations",
        comunityAudio5: "Referral Services",
        floorAudio: "Third Floor",

        department9: "Art & Craft Department",
        artTitle1: "Individualized Teaching Approaches",
        artDescription1a:
          "Tailor your teaching methods as per the needs and abilities",
        artDescription1b: "Offering different materials for students",
        artDescription1c: "Adjusting techniques to make art accessible for all",

        artTitle2: "Empowering Through Art",
        artDescription2a: "Encouragement self-expression",
        artDescription2b:
          "Each student’s unique perspective and abilities to be shine",
        artDescription2c:
          "Motivation :Art can be a powerful tool for self-confidence.",

        artTitle3: "Accessibility in Resources",
        artDescription3a: "Ensuring that tools and resources are accessible",
        artDescription3b: "Use of adaptive brushes",
        artDescription3c: "To make familier with digital drawing pads",
        artDescription3d: "Activities Of Daily Living",
        artDescription3e: "Use of tactile elements",

        artTitle4: "Building a Supportive Environment",
        artDescription4a:
          "Foster a classroom culture where all abilities are celebrated",
        artDescription4b: "Creating a safe space for students",
        artDescription4c:
          "Promot them to explore and express themselves artistically.",
        floorArt: "Third Floor",

        department10: "Dance & Music Department",
        danceTagline:
          "The Dance & Music Department provides a space for students to explore their creativity and express themselves through the art of dance and music. This department helps to achieve emotional, cognitive, physical & social integration.",
        workDanceDep: "Work in the Dance & Music Department",
        workTagline:
          "Our Dance & Music Department is dedicated to fostering an inclusive environment where students can engage in activities like:",
        workDescription1:
          "We start with the warm up exercises as a preparatory phase, core exercise, cool down & verbal processing.",
        workDescription2:
          "We include various properties like colour scarves while dancing",
        workDescription3:
          "we also take one to one activity so that they are able to learn properly",
        workDescription4:
          "We conduct group session as well to gain confidence in them and also for social interaction .",
        floorDance: "Third Floor",

        department11: "Physiotherapy Department",
        physioTagline:
          "Physiotherapy department is equipped with setup which would help in Physical rehabilitation of Persons with Disabilities (PWD) through Physiotherapy from Age groups 2 months till 80 Years",
        physioHighlight:
          "Highlights of Department: It Emphasis on Fitness and Endurance of PWD too",
        physioFacilityTitle: "Facility and Services",
        physioFacility1: "Balance Problems",
        physioFacility2: "Paralysis Rehab",
        physioFacility3: "Counselling & Assessment",
        physioFacility4: "Gait Analysis",
        physioFacility5: "Manual Therapy and Electrotherapy Modalities",
        physioFacility6: "Pain care and Pulmonary Rehabilitation",
        physioFacility7: "Ergonomics And Obesity Management",
        physioFacility8: "Pre and Post-operative Care",
        physioFeatures: "Features of Department",
        physioFeaturesTitle1: "Thermal modalities",
        physioFeaturesDescription1: "Cryotherapy and System Short Wave Therapy",
        physioFeaturesTitle2: "Stimulating modalities",
        physioFeaturesDescription2:
          "1.Interferential Therapy Neuromuscular Stimulation 2.TranscutaneAous Electrical Nerve Stimulation",
        physioFeaturesTitle3: "Soft tissue healing modalities",
        physioFeaturesDescription3:
          "Ultrasonic Therapy Laser Therapy and Iontophoresis",
        physioFeaturesTitle4: "Diagnostic modalities",
        physioFeaturesDescription4:
          "Electromyography Bio-feed Back Therapy, Paediatric Physiotherapy Unit, NDT(Neuro Development Therapy), Strength training, Functional Balance Training, Gait Training and Endurance Training",
        physioFeaturesTitle5: "Fitness Units",
        physioFeaturesDescription5:
          "We provide exclusive Fitness Training with equipped Machines like- Treadmill, Elliptical Trainer, Assisted Abdominal Workout Machine, 8 Multistation Outdoor Gym, Hydrotherapy (In Process)",
        floorPhysio: "Second Floor",





        //  FISHERIES WEBSITE ***********************************************************************************************





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


// who we are
        title: "Who We Are",
        description:
          "About Maharashtra Fisheries Development Corporation (MFDC)",
        buttonText: "Know More",
        feature1Title: "Ice Plants & Cold Storage",
        feature1Description:
          "MFDC establishes and operates ice factories, cold storage units, and fish processing centers to preserve the freshness and quality of fish products across the state.",
        feature2Title: " Manufacturing of Fishing Equipment",
        feature2Description:
          "The Corporation produces and supplies fishing nets, marine and diesel engines, ropes, boats, and other gear, enabling fishermen to access reliable tools and materials.",
        feature3Title: "Value-Added Products & Exports",
        feature3Description:
          "MFDC is engaged in processing and marketing products like canned fish, fish oil, and fish-based poultry feed for wholesale, retail, and export markets.",
        feature4Title: "Fisheries Infrastructure Development",
        feature4Description:
          "It builds and maintains essential infrastructure such as jetties, fishing harbors, fish landing centers, and boatyards, enhancing the efficiency and safety of fishing operations.",
        feature5Title: "Training, Research & Innovation",
        feature5Description:
          "MFDC invests in technical training, research, and skill development programs to support modern, sustainable, and scientifically backed fishing practices in the sector.",
        feature6Title: "Employment & Economic Upliftment",
        feature6Description:
          "With a focus on economically weaker communities, MFDC creates employment opportunities.",
       


          quicklinesheading:"Quick Links",
          quickLink1Title:"PMMSY",
          quickLink2Title:"Fisheries Department Government of Maharashtra, India",
          quickLink3Title :"Marine and Inland Water Dashboard",
          quickLink4Title :"SagarMala - Ministry of Shipping, GOI, Government of India",
        
      
      },
    },
    mt: {
      translation: {
        aboutUs: "आमच्याबद्दल",
        home: "मुख्यपृष्ठ",
        contactUs: "संपर्क करा",
        tender: "व्यवसाय निविदा",
        privacyPolicy: "गोपनीयता धोरण",
        
        pcmcName: "पिंपरी चिंचवड महानगर पालिका",
        connectWithUs: "आमच्याशी संपर्क साधा",
        callNow: "आता कॉल करा",
        signIn: "साइन इन करा",
        logout: "बाहेर पडा",
        welcomeBack: "पुन्हा स्वागत आहे !",
        logIntoYourAccount: "तुमच्या खात्यात लॉगिन करा",
        enterEmailAndPassword:
          "लॉगिन करण्यासाठी तुमचा ईमेल आणि पासवर्ड प्रविष्ट करा",
        enterUserNameAndPasswordOrMobile:
          "तुमचा यूजर आयडी/फोन नंबर आणि पासवर्ड टाका.",
        dontHaveAnAccount: "तुमचे खाते नाही ?",
        signUp: "साइन अप करा",
        welcome: "स्वागत आहे !",
        enterYourDetailsToSignup: "साइन अप करण्यासाठी तुमचे तपशील प्रविष्ट करा",
        firstName: "नाव",
        lastName: "आडनाव",
        email: "ईमेल",
        password: "पासवर्ड",
        alreadyHaveAnAccount: "आधीच खाते आहे का ?",
        heading1: "पात्रता",
        description1:
          "या स्पर्धेमध्ये व्यक्तीचे वय, शिक्षण, लिंग, दिव्यांगत्व, व्यवसाय, आणि कौशल्य यांचा कोणताही भेदभाव न करता ही स्पर्धा सर्वांसाठी खुली आहे.",
        heading2: "टॅगलाइनचा संकल्पना",
        description2:
          "लोगो आणि टॅगलाइनमध्ये दिव्यांग व्यक्तींच्या सशक्तीकरणाचा दृष्टीकोण ठळकपणे मांडला जावा. त्याचबरोबर दिव्यांग व्यक्तींच्या अधिकारांच्या संरक्षणाची दिव्यांग भवन फाऊंडेशनची बांधिलकी त्यामधून स्पष्ट व्हावी.",
        heading3: "प्रेरणादायक लोगो स्पर्धा",
        description3:
          "दिव्यांग भवन फाऊंडेशन साठी लोगो व टॅगलाईन डिझाईन करण्यासाठी स्पर्धेचे आयोजन करण्यात आले आहे. यामध्ये देशातील सर्व सर्जनशील व्यक्तींनी सहभाग नोंदविण्याचे आवाहन दिव्यांग भवन फाऊंडेशन तर्फे करण्यात येत आहे.",
        importantNoticeForContestants: "स्पर्धकांसाठी महत्त्वाची सूचना",
        noticeForWinners:
          "स्पर्धेतील जे स्पर्धक विजेते होतील अशांकडून त्यांचे लोगो व टॅगलाईन ट्रेड मार्क (Trade Mark) व बौध्दीक संपदा (IP) हक्क कायदा याअनुसार करार करून ते सी.डी. आर फॉरमॅटमध्ये कंपनीसाठी घेण्यात येतील.",
        freeEntryNotice:
          "स्पर्धेमध्ये सहभाग घेण्यासाठी प्रवेश मोफत असून प्रत्येक सहभागी स्पर्धकाला पिंपरी चिंचवड महानगर पालिका दिव्यांग भवन फाऊंडेशन कंपनी द्वारे सहभागाचे प्रमाणपत्र देण्यात येईल.",
        competitionDuration: "स्पर्धा संपली!",
        competitionDescription:
          "पिंपरी चिंचवड महानगर पालिका दिव्यांग भवन फाऊंडेशन तर्फे घेण्यात आलेल्या मराठी आणि इंग्लिश टॅग लाईन स्पर्धेच्या निकालाची उत्सुकता आता संपली आहे.. तुम्ही स्पर्धेच्या पेज वर तुमचा निकाल पाहू शकता, आणि ऑनलाईन तुमचे प्रमाणपत्र डाउनलोड करू शकता...",
        congratsMsg:
          "स्पर्धे मध्ये सहभागी झालेल्या सर्व स्पर्धाकांचे खूप अभिनंदन!!!",
        to: "ते",
        prizes: "बक्षीसे",
        participateDescription:
          "स्पर्धांमध्ये सहभागी व्हा, आपल्या सर्जनशीलतेला वाव द्या, आणि आकर्षक बक्षीसे जिंकून आपल्या नावाला चमकवा. ही तुमच्यासाठी एक सुवर्णसंधी आहे !",
        competitionOrganized: "आयोजित स्पर्धा",
        logoDesignPrize: "लोगो डिझाइन स्पर्धेतील विजेत्यासाठी बक्षीस रक्कम",
        taglineContestPrize: "टॅगलाइन स्पर्धेतील विजेत्यासाठी बक्षीस रक्कम",
        competenceAndSelfEsteem: "सक्षमता आणि स्वाभिमान",
        empowermentAndSelfEsteemDescription:
          "सक्षमता आणि स्वाभिमान म्हणजे दिव्यांगांना त्यांच्या क्षमतांची जाणीव करून देणे आणि त्यांना स्वाभिमानाने जगण्यासाठी प्रेरित करणे. आपण एकत्र येऊन दिव्यांगांसाठी उज्ज्वल भविष्य घडवूया.",
        empowermentOfDisabled: "दिव्यांगांचे सशक्तीकरण",
        empowermentOfDisabledDescription:
          "दिव्यांगांचे सशक्तीकरण म्हणजे त्यांना स्वावलंबी बनविणे, त्यांच्या कौशल्यांना वाव देणे आणि समाजात त्यांचे स्थान मजबूत करणे, हा आमचा उद्देश आहे.",
        divyangFoundation:
          "पिंपरी चिंचवड महानगर पालिका  दिव्यांग  भवन फाऊंडेशन",
        pimpriDescription:
          "पिंपरी चिंचवड महानगर पालिका दिव्यांग व्यक्तींच्या हक्कांसाठी पुढाकार घेण्याच्या बाबतीत अग्रेसर आहे. महानगरपालिकेने दिव्यांगांचे हित जपण्यासाठी आणि त्यांच्या हक्कांचे संरक्षण करण्यासाठी अनेक प्रभावी योजना राबवल्या आहेत. पिंपरी चिंचवड महानगर पालिका दिव्यांग व्यक्तींच्या हक्क अधिनियम, 2016 (RPwD Act 2016) ची अंमलबजावणी करण्यासाठी  वचनबद्ध आहे. तद्नुसार, महानगरपालिकेने मोरवाडी, पिंपरी येथे दिव्यांग भवन फाऊंडेशन स्थापन केले आहे. सदर भवन सर्व दिव्यांग व्यक्तींच्या थेरपी आणि पुनर्वसन तसेच त्यांच्यातील कौशल्य आणि सक्षमीकरणासाठी कार्य करते.",
        publicComments: "अभिप्राय",
        peopleSayAboutUs: "लोक आमच्याबद्दल काय म्हणतात",
        divyangPhenomenalJob:
          "दिव्यांग भवन फाऊंडेशन एक सामाजिक संस्था आहे, जी दिव्यांग व्यक्तींसाठी विविध सुविधा आणि सेवा पुरवते. या संस्थेचे उद्दिष्ट दिव्यांग व्यक्तींच्या जीवनातील अडचणी कमी करून त्यांना अधिक स्वतंत्र आणि सन्मानाने जगण्यास सहाय्य करणे आहे.",
        rajeshPatil: "सिद्धार्थ भोसले",
        foundationWorkImpact:
          "माणसाने माणसाशी माणसासम वागणे हा विचार प्रत्यक्षात दिव्यांग भवन फाऊंडेशन रुजवत असल्याचे जाणवते. दिव्यांगांच्या प्रती एक सकारात्मक दृष्टिकोन यामुळे निर्माण होत आहे.",
        snehaShah: "प्रतिभा बिराजदार",
        extraordinaryEfforts:
          "दिव्यांग भवन हे एक वन-स्टॉप  सेंटर म्हणून सुरु झाले आहे. RPwD Act 2016 नुसार 21 प्रकारच्या दिव्यांगाना इथे थेरपी सेवा देण्यात येत आहे. दिव्यांगाच्या सर्वांगीण विकासासाठी आवश्यक असणारे मार्गदर्शक येथे उपलब्ध आहेत.",
        amitKumar: "डॉ. प्रियंका घुटे",
        testimonial4:
          'असामान्य म्हणून जन्माला आलेल्या जिवाला सामान्य जीवन जगण्यासाठी संघर्ष करावा लागतो, हे नक्कीच वेदनादायी आहे. "दिव्यांग असे ज्या घरी, तेथे नसावी नाते,प्रेम अन् माणुसकीची दरी" असे बदल समाजात घडावे यासाठी खुप सकारात्मकतेने दिव्यांग भवन फाऊंडेशन कार्यरत आहे.',
        akshaylata: "अक्षय लता आश्रुबा नेहरकर",
        testimonial5:
          "पिंपरी चिंचवड महानगरपालिका हद्दीतील दिव्यांग बांधव व त्यांच्या पालकांच्या दृष्टीने दिव्यांग भवन फाऊंडेशन ही एक भाग्यकारक घटना आहे. दिव्यांगत्व प्रतिबंधात्मक उपायापासून त्यांचे शारीरिक, शैक्षणिक, व्यावसायिक व सामाजिक पुनर्वसनाच्या दृष्टीने सदर फाऊंडेशन कार्यरत राहणार आहे. त्या दृष्टीने सर्व सोयींनी युक्त अशी सुसज्ज इमारत तसेच दिव्यांग क्षेत्रातील तज्ञ व्यक्तींची नेमणूक करून सदर दिव्यांग भवन फाउंडेशन कार्यान्वित राहणार आहे.दिव्यांगांच्या सर्वांगीण पुनर्वसनाच्या दृष्टीने भारत देशातील हा अभिनव उपक्रम पी.सी.एम.सी मार्फत राबविण्यात येत आहे. त्याचा फायदा पी.सी.एम.सी हद्दीतील सर्व दिव्यांग व त्यांच्या पालकांना होईल ही खात्री आहे. दिव्यांग भवन फाऊंडेशनच्या  भविष्यातील वाटचालीस शुभेच्छा. ",
        nandkumarphule:
          "श्री. नंदकुमार फुले, महाव्यवस्थापक (से. नि.)महाराष्ट्र राज्य दिव्यांग वित्त व विकास महामंडळ, मुंबई",
        resetPassword: "पासवर्ड रीसेट करा",
        enterPassword: "पासवर्ड प्रविष्ट करा",
        reEnterPassword: "पासवर्ड पुन्हा प्रविष्ट करा",
        reset: "रीसेट",
        englishTagline: "इंग्रजी टॅगलाईन",
        marathiTagline: "मराठी टॅगलाईन",
        registerNow: "आता लॉगिन करा",
        days: "दिवस",
        hours: "तास",
        minutes: "मिनिटे",
        seconds: "सेकंद",
        august: "ऑगस्ट",
        phoneNumber: "मोबाईल क्रमांक (10 अंकी)",
        countryCode: "देश कोड",
        participationCertificate:
          "प्रत्येक सहभागी स्पर्धकाला पिंपरी चिंचवड महानगर पालिका दिव्यांग भवन फाऊंडेशन द्वारे सहभागाचे प्रमाणपत्र देण्यात येईल.",
        termsAndConditions: "स्पर्धेच्या अटी आणि शर्ती",
        logoSize:
          "लोगोचा आकार 5 MB असावा.आवश्यक असल्यास लोगोची मोठ्या फलकाच्या आकारात वाढ करता येईल.",
        highResolution:
          "लोगो उच्च रिझोल्यूशनमध्ये असावा आणि किमान 300 DPI असावा.",
        acceptedFormats:
          "सदर लोगो डिझाईन आणि टॅगलाईन JPEG किंवा PDF फॉरमॅटमध्ये स्वीकारले जातील.",
        evaluationCriteria: "लोगोसाठी मूल्यांकन निकष पुढीलप्रमाणे आहेत:",
        simplicity: "साधेपणा",
        simplicityDescription: "डिझाईन साधे आणि समजण्यास सोपे असावे.",
        unique: "अद्वितीय",
        uniqueDescription:
          "लोगो मौलिक असावा आणि इतर कोणत्याही संस्थेच्या लोगोशी साम्य नसावे.",
        relevance: "संबंध",
        relevanceDescription:
          "डिझाईन दिव्यांग भवन फाऊंडेशनच्या कार्याशी संबंधित असावे.",
        honorCompetition: "स्पर्धेचा सन्मान करा, नियमांचे पालन करा !",
        participationHonor: "स्पर्धेत सहभाग, सर्जनशीलतेचा सन्मान",
        empoweredDisabled: "सशक्त दिव्यांग, समृद्ध समाज !",
        winPrizes: "आकर्षक बक्षीसे जिंका !",
        divyangBhavanFoundation:
          "पिंपरी चिंचवड महानगर पालिका दिव्यांग भवन फाऊंडेशन",
        supportInspiration: "आपला पाठिंबा आम्हाला प्रेरणा देईल",
        supportEmpowerment:
          "आपला पाठिंबा, आमची प्रेरणा; दिव्यांगांच्या सशक्तीकरणासाठी एक नवीन दिशा उघडूया !",
        watchVideo: "व्हिडिओ पहा",
        enterFirstName: "आपले पहिले नाव प्रविष्ट करा",
        enterLastName: "आपले आडनाव प्रविष्ट करा",
        enterCompanyName: "कंपनीचे नाव प्रविष्ट करा",
        enterMobileNumber: "मोबाइल नंबर प्रविष्ट करा",
        enterEmail: "आपला ईमेल प्रविष्ट करा",
        enterPassword: "आपला पासवर्ड प्रविष्ट करा",
        confirmPassword: "आपला पासवर्ड पडताळा",
        passwordConfirm: "पासवर्ड पडताळा",
        companyName: "कंपनीचे नाव",
        enterCompanyName: "कंपनीचे नाव प्रविष्ट करा",
        or: "किंवा",
        oneLogoPerParticipant:
          "एका स्पर्धकाचे एक लोगो, एक मराठी घोषवाक्य आणि एक इंग्रजी घोषवाक्य एकदाच स्वीकारले जाईल.",
        noAIForLogoTagline:
          "AI च्या मदतीने बनविले जाणारे Logo (बोधचिन्ह ) आणि Tagline(घोषवाक्य) स्वीकारले जाणार नाहीत.",
        registerAs: "नोंदणी करा",
        personal: "वैयक्तिक",
        company: "कंपनी",
        acceptTerms: "मी अटी व शर्ती स्वीकारतो/स्वीकारते",
        forgotPassword: "आपला पासवर्ड विसरलात ?",
        fisheriesCorporation: "महाराष्ट्र मत्स्यव्यवसाय विकास महामंडळ,",
        committedEmpowerment: "मत्स्यव्यवसाय सक्षम करणे, उपजीविका समृद्ध करणे",
        quickLinks: "जलद लिंक्स",
        advertisementInfo: "जाहिरात माहिती",
        rightToInformation: "माहितीचा अधिकार",
        contact: "संपर्क",
        accessibleGuide: "सुविधायुक्त मार्गदर्शक",
        fisherieslocation: " मुंबई, महाराष्ट्र",
        noWorriesResetInstructions:
          "काळजी करू नका, आम्ही तुम्हाला रीसेट करण्याच्या सूचना पाठवू.",
        forgotPassword: "पासवर्ड विसरलात ?",
        backToLogin: "लॉगिनवर परत जा",
        enterOTP: "ओटीपी प्रविष्ट करा",
        enter4DigitOTP: "4 अंकी ओटीपी प्रविष्ट करा",
        sendOTP: "ओटीपी पाठवा",
        siteVisits: "साइट भेटी",
        contactInformation: "संपर्क माहिती",
        enquiryForm: "चौकशी फॉर्म",
        pleaseGiveUsYourFeedback: "कृपया आम्हाला तुमचा अभिप्राय द्या !!",
        sendMessage: "संदेश पाठवा",
        sendFeedback: "अभिप्राय पाठवा",
        message: "संदेश",
        name: "नाव",
        contactUs2: "आम्हाला संपर्क करा",
        career: "करिअर",
        hiringNow:
          "दिव्यांग भवन फाऊंडेशन येथे भरती चालु आहे, त्यासाठी आमच्याशी संपर्क साधा....",
        therapistInDifferentAreas: "विविध क्षेत्रातील रोगोपचारतज्ञ",
        lookingForTherapists:
          "आमच्या कडे विविध रोगोपचार तज्ञांच्या जागा रिक्त आहेत, कृपया अधिक माहिती मिळवा आणि आमच्या शी संपर्क करा",
        vacanciesInformation:
          "दिव्यांग भवन फाऊंडेशन च्या भरती चा अधिक तपशील - डाउनलोड करा",
        audiologistAndProsthetics:
          "ऑडिओलॉजिस्ट / सिनियर प्रोस्थेटिक्स /ऑर्थोटिक्स",
        lookingForAudiologist:
          "आमच्या कडे ऑडिओलॉजिस्ट / सिनियर प्रोस्थेटिक्स /ऑर्थोटिक्स साठी रिक्त जागा आहेत, कृपया अधिक माहिती मिळवा आणि आमच्या शी संपर्क करा",
        rehabilitationWorkers: "पुनर्वसन उपचार परिचारिका",
        lookingForRehabilitationWorkers:
          "आमच्या कडे पुनर्वसन उपचार परिचारिकां साठी रिक्त जागा आहेत, कृपया अधिक माहिती मिळवा आणि आमच्या शी संपर्क करा",
        kalaShikshak: "कला शिक्षक",
        lookingForKalaShikshak:
          "आमच्या कडे कला शिक्षकांसाठी रिक्त जागा आहेत, कृपया अधिक माहिती मिळवा आणि आमच्या शी संपर्क करा",
        carrerResult: "भरती केलेले कर्मचारी",
                kalaShikshak: "कला शिक्षक",
        lookingForKalaShikshak:
          "आमच्या कडे कला शिक्षकांसाठी रिक्त जागा आहेत, कृपया अधिक माहिती मिळवा आणि आमच्या शी संपर्क करा",
        carrerResult: "भरती केलेले कर्मचारी",
        totalEmployees: "आमचे एकूण कर्मचारी",
        employeeCount: "४५+",
        employeeDescription:
          "दिव्यांग भवन फाउंडेशनमध्ये, आमच्याकडे ४५ पेक्षा अधिक लोक आहेत, जे येथे प्रभावीपणे काम करतात.",
        services: "आमच्या सेवा",
        servicesCount: "१०+",
        servicesDescription:
          "दिव्यांग व्यक्तींच्या विकासासाठी आमच्याकडे अनेक आधुनिक सुविधा आणि सेवा आहेत.",
        campaign1Title: "लोगो डिझाइन स्पर्धा",
        campaign1Description:
          "दिव्यांग भवन फाउंडेशनने आपल्या समाजातील सर्व उत्साही आणि कलात्मक लोकांसाठी 'लोगो डिझाइन स्पर्धा', 15 ऑगस्ट ते 31 ऑगस्ट दरम्यान आयोजित केली होती",
        campaign1Progress: 90,
        campaign1ButtonColor: "#f44336",

        campaign2Title: "मराठी टॅगलाइन स्पर्धा",
        campaign2Description:
          "दिव्यांग भवन फाउंडेशनने आपल्या समाजातील सर्व उत्साही आणि कलात्मक लेखकांसाठी 'मराठी टॅगलाइन स्पर्धा', 15 ऑगस्ट ते 31 ऑगस्ट दरम्यान आयोजित केली होती.",
        campaign2Progress: 80,
        campaign2ButtonColor: "#9c27b0",

        campaign3Title: "इंग्रजी टॅगलाइन स्पर्धा",
        campaign3Description:
          "दिव्यांग भवन फाउंडेशनने आपल्या समाजातील सर्व उत्साही आणि कलात्मक लेखकांसाठी 'इंग्रजी टॅगलाइन स्पर्धा', 15 ऑगस्ट ते 31 ऑगस्ट दरम्यान आयोजित केली होती.",
        campaign3Progress: 85,
        campaign3ButtonColor: "#26a69a",
        campaingHeading: "आम्ही राबविलेल्या मोहीम",
        campaingSubheading: "आम्ही प्रतिभा वृद्धिंगत करतो",
        campaingReadMore: "अधिक वाचा",
        service1Title: "आमचे कर्मचारी",
        service1Value: "४५+",

        service2Title: "सेवेची क्षमता",
        service2Value: "२००+",

        service3Title: "आमचे चिकित्सक",
        service3Value: "२५+",

        service4Title: "विभाग सेवा",
        service4Value: "५०+",


     


        person1Name: "शेखर सिंह",
        person1Designation: "अध्यक्ष",

        person2Name: "ओमप्रकाश देशमुख (सेवानिवृत्त IAS)",
        person2Designation: "व्यवस्थापकीय संचालक",

        person3Name: "परेश गांधी",
        person3Designation: "मुख्य कार्यकारी अधिकारी",

        person4Name: "विजय कान्हेकर",
        person4Designation: "सल्लागार",
        peopleData: "संचालक आणि प्रमुख यांची ओळख",
        event1Date: "सप्टेंबर, 2024",
        event1Title: "जागतिक सांकेतिक भाषा, कर्णबधिर दिन उत्सव",

        event2Date: "सप्टेंबर, 2024",
        event2Title: "नवीन LOGO डिझाईन स्पर्धा",
        leftSectionHeading: "काही नवीन बातम्या",
        leftSectionSubheading: "आमच्या नवीनतम बातम्या आणि ब्लॉग पोस्ट वाचा",
        leftSectionButtonText: "सर्व बातम्या पहा",

        blogAdminText: "प्रशासनाद्वारे",
        blogCommentsText: "टिप्पण्या",
        blogKnowMoreButton: "अधिक जाणून घ्या",
        blog: "ब्लॉग",
        gallery: "गॅलरी",
        ourGallery: "आमची गॅलरी",
        ourBlog: "आमचा ब्लॉग",
        ourCareer: "आमचे करिअर",
        ourTender: "आमचे व्यवसाय निविदा",
        sudhiPatrak: "घोषवाक्य व लोगो स्पर्धेच्या विजेत्यांची घोषणा",
        logoWinner: "लोगो स्पर्धा विजेते -  रवी पवार",
        marathiTaglineWinner: "मराठी घोषवाक्य विजेती - वैष्णवी विनोद जगताप",
        englishTaglineWinner: "इंग्लिश घोषवाक्य विजेती - हृतुजा पाटील",
        departments: "विभाग",

        // Added by prachi---Marathi Data
        ourStoryTitle: "आमची संकल्पना",
        ourStory:
          "दिव्यांग भवन फाउंडेशन हे पिंपरी चिंचवड महानगरपालिकेच्या समाज विकास विभागाची एक अभिनव संकल्पना असून, फेब्रुवारी २०२४ मध्ये सेक्शन ८ कंपनी म्हणून स्थापन करण्यात आले आहे. 80G आणि 12A प्रमाणपत्र प्राप्त असलेल्या या फाउंडेशनने भारतात प्रथमच २१ प्रकारच्या मान्यताप्राप्त दिव्यांगत्वासाठी समर्पित आधुनिक पुनर्वसन केंद्राची उभारणी केली आहे. हे केंद्र समग्र जीवनचक्र दृष्टिकोनावर आधारित असून, विशेष उपचार, सहाय्यक उपकरणांची निर्मिती आणि कौशल्य विकासासाठी विविध कार्यक्रम उपलब्ध करून देते. रोजगाराच्या संधी वाढविणे आणि उद्योजकतेला चालना देणे या उपक्रमांद्वारे दिव्यांग भवन फाउंडेशन समावेशकता वाढविण्यास व दिव्यांग व्यक्तींना सक्षम, स्वावलंबी आणि उज्ज्वल भवितव्यासाठी प्रोत्साहित करण्यास कटिबद्ध आहे.",
        boardOfDirectors: "मंडळाचे संचालक",
        director1: "शेखर सिंह (आयुक्त, पिंपरी चिंचवड महापालिका)",
        designaton1: "अध्यक्ष",
        director2: "ओमप्रकाश देशमुख (आयएएस सेवानिवृत्त)",
        designaton2: "व्यवस्थापकीय संचालक",
        director3:
          "प्रदीप जांभळे पाटील (अतिरिक्त आयुक्त, पिंपरी चिंचवड महापालिका)",
        designaton3: "संचालक",
        director4:
          "तानाजी नरळे (सामाज विकास विभाग, सहाय्यक आयुक्त, पिंपरी चिंचवड महापालिका)",
        designation4: "संचालक",
        director5:
          "श्रीनिवास दांगट (सामाज विकास विभाग (दिव्यांग कक्ष), सहाय्यक आयुक्त, पिंपरी चिंचवड महापालिका)",
        designation5: "संचालक",
        comitee: "कार्यकारी समिती",
        ec1: "ओमप्रकाश देशमुख (आयएएस सेवानिवृत्त)",
        ecDesignation1: "अध्यक्ष",
        ec2: "तानाजी नरळे (सामाज विकास विभाग, सहाय्यक आयुक्त, पिंपरी चिंचवड महापालिका)",
        ecDesignation2: "संचालक",
        ec3: "श्रीनिवास दांगट (सामाज विकास विभाग (दिव्यांग कक्ष), सहाय्यक आयुक्त, पिंपरी चिंचवड महापालिका)",
        ecDesignation3: "संचालक",
        ec4: "परेश गांधी",
        ecDesignation4: "मुख्य कार्यकारी अधिकारी (सीईओ)",
        ec5: "गिरीश परळीकर",
        ecDesognation5: "कंपनी सचिव",
        advisoryBoard: "आमचे सल्लागार मंडळ",
        ab1: "डॉ. राजेंद्र वाबळे",
        abDesignation1: "वायसीएम डीन",
        abMailId1: "deanpgiycmh@pcmcindia.gov.in",
        ab2: "विजय कान्हेकर",
        abDesignation2:
          "प्रकल्प संचालक, DDRC व दिव्यांग व्यक्तींसाठी कार्य करणाऱ्या राष्ट्रीय पुरस्कारप्राप्त संस्थेचे संचालक",
        abMailId2: "vijaykanhekar@gmail.com",
        ab3: "अभिजीत मुरुगकर",
        abDesignation3: "प्रवेशसुलभता सल्लागार व विशेष मुलाचे पालक",
        abMailId3: "designbridgepune@gmail.com",
        ab4: "अनुराधा जोशी",
        abDesignation4: "माजी दिव्यांग आयुक्त (गोवा राज्य)",
        abMailId4: "anusanket@gmail.com",
        ab5: "धनंजय भोळे (दिव्यांग)",
        abDesignation5:
          "नॉन-एक्झिक्युटिव्ह डायरेक्टर, सुगम्य डिजिटल सोल्यूशन्स",
        abMailId5: "dhananjay.bhole@gmail.com",
        ab6: "डॉ. संजय जैन",
        abDesignation6: "कायदेतज्ज्ञ (दृष्टीहीन), पुणे विधी महाविद्यालय",
        abMailId6: "sanjay.jain@nls.ac.in",
        ab7: "डॉ. कल्याणी मांडके",
        abDesignation7:
          "ऑडिओलॉजिस्ट, श्रवण समस्येतील तज्ज्ञ व अमेरिकन व भारतीय संघटनेच्या सचिव",
        abMailId7: "kalyani.mandke@gmail.com",
        ab8: "सुवर्णा बोबडे",
        abDesignation8: "मानसशास्त्रज्ञ",
        abMailId8: "bobadesuvarna13@gmail.com",
        ab9: "कमांडर बिजूर",
        abDesignation9: "ऑटीझम पालक संघटनेचे प्रमुख",
        abMailId9: "bijurns@gmail.com",
        ab10: "अपर्णा पानसे",
        abDesignation10: "क्रीडा व सांस्कृतिक तज्ज्ञ",
        abMailId10: "balkalyansanstha@gmail.com",
        ab11: "मिनेता पाटील",
        abDesignation11: "कला कौशल्य विकास तज्ज्ञ",
        abMailId11: "",
        ab12: "दत्ता भोसले (दिव्यांग)",
        abDesignation12: "समाजसेवक व अस्थिव्यंग तज्ज्ञ",
        abMailId11: "",

        // deparments
        // department1: "व्यावसायिक सल्लागार विभाग",
        // roleVocational: "व्यावसायिक सल्लागाराची भूमिका",
        // role1: "व्यक्तींच्या क्षमता व आवडी ओळखणे",
        // role2: "व्यावसायिक शिक्षण व प्रशिक्षणाबाबत मार्गदर्शन करणे",
        // role3: "रोजगाराच्या संधी शोधण्यात मदत करणे",
        // role4: "कार्यक्षेत्रातील अनुकूलता आणि प्रवेशसुलभता सुनिश्चित करणे",
        // role5: "व्यक्तींना स्वावलंबन व सक्षमीकरणात मदत करणे",
        // responsibilityVocational: "व्यावसायिक सल्लागाराच्या जबाबदाऱ्या",
        // responsibility1: "व्यक्तींच्या क्षमता व आवडी ओळखणे",
        // responsibility2: "व्यावसायिक शिक्षण व प्रशिक्षणासाठी योजना तयार करणे",
        // responsibility3: "रोजगाराच्या संधींसाठी व्यक्तींना तयार करणे",
        // responsibility4:
        //   "कार्यक्षेत्रातील अनुकूलता व प्रवेशसुलभता सुनिश्चित करणे",
        // responsibility5: "व्यक्तींना मानसिक व भावनिक आधार देणे",
        // benefitsVocational: "व्यावसायिक सल्लागारांमुळे होणारे फायदे",
        // benefits1: "व्यावसायिक शिक्षण व प्रशिक्षणाचा लाभ",
        // benefits2: "रोजगाराच्या संधी उपलब्ध करणे",
        // benefits3: "कार्यक्षेत्रातील अनुकूलता व प्रवेशसुलभता",
        // benefits4: "वाढलेले स्वावलंबन व सक्षमीकरण",
        // benefits5: "मानसिक व भावनिक आधार",
        // qualitiesVocational: "व्यावसायिक सल्लागारांची गुणवैशिष्ट्ये",
        // qualities1: "व्यावसायिक मार्गदर्शनाचे ज्ञान",
        // qualities2: "उत्कृष्ट संवाद कौशल्य",
        // qualities3: "व्यक्तींच्या गरजा समजून घेण्याची क्षमता",
        // qualities4:
        //   "कार्यक्षेत्रातील अनुकूलता व प्रवेशसुलभता सुनिश्चित करण्याची क्षमता",
        // qualities5: "गोपनीयता व विश्वासार्हता",
        // taglineVocational:
        //   "व्यावसायिक सल्लागाराची भूमिका दिव्यांग व्यक्तींसाठी अत्यावश्यक आहे. व्यावसायिक शिक्षणाबाबत मार्गदर्शन, रोजगाराच्या संधी ओळखणे, व कार्यक्षेत्रातील अनुकूलता सुनिश्चित करून, ते व्यक्तींना स्वावलंबन व सक्षमीकरण मिळवून देण्यासाठी सहकार्य करतात.",
        // mail: "संपर्क",
        // floorVocationl: "चौथा मजला",
        // department2: "विशेष शिक्षण विभाग",
        // roleSE: "विशेष शिक्षकाची भूमिका",
        // roleSE1: "मूल्यांकन आणि ओळख",
        // roleSE2: "व्यक्तिनिष्ठ शैक्षणिक योजना (IEPs)",
        // roleSE3: "अनुकूलित अभ्यासक्रम",
        // roleSE4: "वकिली",
        // roleSE5: "वर्तन मूल्यांकन",
        // roleSE6: "गट सत्रे",
        // seWork: "विशेष शिक्षक खालील प्रकारच्या दिव्यांगत्वांवर कार्य करतात",
        // seWork1: "शिक्षणाशी संबंधित अडचणी (Learning Disabilities)",
        // seWork2: "ऑटिझम स्पेक्ट्रम डिसऑर्डर",
        // seWork3: "दृक्‍दृष्टी अडचणी (Visual Impairment)",
        // seWork4: "श्रवण अडचणी (Hearing Impairment)",
        // seWork5: "बौद्धिक दिव्यांगत्व",
        // seWork6: "सेरेब्रल पाल्सी",
        // seWork7: "बहुविध दिव्यांगत्व",
        // therapySE: "थेरपी सेवा",
        // therapySE1: "संवाद कौशल्य (Communication)",
        // therapySE2: "सामाजिक कौशल्य (Socialisation)",
        // therapySE3: "संज्ञानात्मक विकास (Cognitive)",
        // therapySE4: "दैनंदिन जीवनातील क्रिया (Activities of Daily Living)",
        // therapySE5: "मोटर कौशल्ये (स्थूल व सूक्ष्म)",
        // therapySE6: "पूर्व-अकादमिक शिक्षण (Pre-Academic)",
        // therapySE7: "पूर्व-लेखन कौशल्य (Pre-Writing)",
        // therapySE8: "पूर्व-वाचन कौशल्य (Pre-Reading)",
        // therapySE9: "पूर्व-गणित कौशल्य (Pre-Maths)",
        // seTagline:
        //   "विशेष शिक्षक वर्तन मूल्यांकनाद्वारे व्यक्तींच्या शैक्षणिक यशासाठी महत्त्वपूर्ण योगदान देतात, त्यासाठी संवाद, सामाजिक वर्तन, आणि दैनंदिन जीवनातील कौशल्ये वाढवण्यावर लक्ष केंद्रित केले जाते.",
        // floorSE: "चौथा मजला",
        // department3: "सांकेतिक भाषा विभाग",
        // signWork: "विभागातील कार्य",
        // signWork1:
        //   "कार्यक्रमांमध्ये संकेत भाषेचे भाषांतर करणे, भारतीय संकेत भाषा (ISL) वर्ग घेणे, कर्णबधिर व्यक्तींच्या पालकांसाठी समुपदेशन",
        // signCapacity: "विभागाची क्षमता",
        // signCapacity1:
        //   "गट क्रियाकलाप किंवा वैयक्तिक सत्रांसाठी एकावेळी २० व्यक्तींची क्षमता (उदा. - ISL कोर्स)",
        // signFeatures: "विभागाची वैशिष्ट्ये",
        // signFeatures1: "संवाद कौशल्ये विकसित करणे",
        // signFeatures2: "भारतीय संकेत भाषा शिकवणे",
        // signFeatures3: "सर्वांसाठी खुले",
        // signFeatures4: "कर्णबधिर व्यक्तींशी संकेत भाषेत संवाद साधणे",
        // signFeatures5:
        //   "ऐकणारे आणि कर्णबधिर गटांमध्ये संवादाचा दुरावा कमी करण्यास मदत करणे ",
        // floorSign: "चौथा मजला",
        // department4: "मानसशास्त्र विभाग",
        // testingService: "चाचणी आणि मूल्यमापन सेवा",
        // testingService1: "विकासात्मक मूल्यमापन (Developmental Assessment)",
        // testingService2: "संज्ञानात्मक मूल्यमापन (IQ चाचणी)",
        // testingService3: "सामाजिक विकास मूल्यमापन (SIQ)",
        // testingService4: "शैक्षणिक कामगिरी मूल्यमापन (LD/SLD)",
        // testingService5: "वर्तन मूल्यांकन (Behavioural Assessment)",
        // testingService6:
        //   "इतर सेवा (प्रक्रियेत)-जीवनमान गुणवत्ता (QOL) मूल्यमापन, आत्मसन्मान चाचणी (Self Esteem), बेक-तणाव, चिंतेचे व नैराश्य मूल्यमापन (Beck-Stress, Anxiety, Depression Assessments)",
        // therapyServices: "थेरपी सेवा",
        // therapyServices1: "मानसशैक्षणिक मार्गदर्शन (Psycho Education)",
        // therapyServices2: "वैयक्तिक थेरपी (मुले, किशोरवयीन, प्रौढ)",
        // therapyServices3: "संज्ञानात्मक वर्तन थेरपी (CBT)",
        // therapyServices4: "वर्तन थेरपी (BT)",
        // therapyServices5: "गट थेरपी",
        // therapyServices6: "कौटुंबिक थेरपी",
        // therapyServices7: "ट्रान्झॅक्शनल अनालिसिस थेरपी",
        // therapyServices8: "REBT (रॅशनल एमोटिव्ह बिहेवियर थेरपी)",
        // therapyServices9: "कला थेरपी (Art Therapy)",
        // therapyServices10:
        //   "ग्राहकाच्या गरजेनुसार आणि कार्यक्षमतेनुसार विविध मॉडेल (Eclectic Model)",
        // communityOutreac: "समुदाय संपर्क सेवा (दिव्यांग व्यक्तींसाठी)",
        // communityOutreach1: "कार्यशाळा आणि सेमिनार",
        // communityOutreach2: "सपोर्ट ग्रुप",
        // communityOutreach3: "समुदाय कार्यक्रम",
        // communityOutreach4: "स्थानिक संस्थांसोबत सहयोग",
        // communityOutreach5: "वर्तन मूल्यांकन",
        // communityOutreach6: "संदर्भ सेवा (Referral Services)",
        // amenities: "दिव्यांग व्यक्तींसाठी उपलब्ध सुविधा",
        // amenities1: "मोफत पार्किंग",
        // amenities2: "व्हीलचेअर प्रवेशसुलभता",
        // amenities3: "आरामदायक प्रतीक्षागृह",
        // amenities4: "अल्पोपहार सेवा (फूड ट्रक - प्रक्रियेत)",
        // amenities5: "मुलांसाठी खेळाची जागा",
        // floorPsychology: "चौथा मजला",
        // department5: "प्रोस्थेटिक्स आणि ऑर्थोटिक्स विभाग",
        // prostheContent:
        //   "पिंपरी चिंचवड महानगरपालिका दिव्यांग भवन फाउंडेशन, मोरवाडी पिंपरी येथील प्रोस्थेटिक्स आणि ऑर्थोटिक्स (P&O) विभाग शारीरिक अपंगत्व असलेल्या व्यक्तींसाठी अत्याधुनिक प्रोस्थेटिक आणि ऑर्थोटिक उपाययोजना पुरवून त्यांचा जीवनमान सुधारण्याचे काम करतो. ",
        // highlightContent:
        //   "कुशल व्यावसायिकांच्या आमच्या टीमकडून सहानुभूतीपूर्ण काळजी, कस्टम डिव्हाइस, आणि पुनर्वसन समर्थन प्रदान केले जाते, ज्यामुळे रुग्णांना स्वातंत्र्य आणि गतिशीलता पुन्हा मिळविण्यात मदत होते.",
        // prostheServises: "विभागाद्वारे दिल्या जाणाऱ्या सेवा",
        // prostheServiceTitle1: "प्रोस्थेटिक सेवा",
        // prostheServiceDesciption1:
        //   "सानुकूलित वरच्या आणि खालच्या अंगांचे कृत्रिम अवयव, मायोइलेक्ट्रिक कृत्रिम अवयव (प्रगत बायोनिक हात), अंगच्छेदानंतर पुनर्वसन, कृत्रिम अवयवांचे समायोजन आणि देखभाल",
        // prostheServiceTitle2: "ऑर्थोटिक सेवा ",
        // prostheServiceDesciption2:
        //   "पाठीचा, खालचा व वरच्या अंगासाठी कस्टम ऑर्थोटिक उपकरणे, मधुमेह, प्लांटर फॅसिआयटीस व इतर समस्यांसाठी पायाचे ऑर्थोटिक्स, जन्मजात/विकासात्मक समस्यांसाठी बाल ऑर्थोटिक्स, शस्त्रक्रियेनंतर समर्थन ब्रेस  ",
        // prostheServiceTitle3: "पुनर्वसन आणि समर्थन सेवा",
        // prostheServiceDesciption3:
        //   "गतिशीलता व कार्यक्षमतेच्या सुधारासाठी फिजिकल थेरपी आणि पुनर्वसन, चालण्याच्या पद्धतीचे विश्लेषण व प्रशिक्षण, उपकरणांची फॉलो-अप काळजी व समायोजन, समुपदेशन व भावनिक समर्थन  ",
        // prostheServiceTitle4: "सहाय्यक उपकरणे",
        // prostheServiceDesciption4:
        //   "1.व्हीलचेअर्स, काठ्या, आणि चालण्याची साधने, 2.गुंतागुंतीच्या गतिशीलता गरजा असलेल्या रुग्णांसाठी कस्टम सीटिंग सिस्टिम  ",
        // featuresProsthe: "विभागाची वैशिष्ट्ये",
        // featuresProstheTitle1: "अत्याधुनिक तंत्रज्ञान",
        // featuresProstheDescription1:
        //   "आमचा विभाग नवीनतम साधने व तंत्रज्ञानाने सुसज्ज आहे, ज्यामुळे प्रोस्थेसिस व ऑर्थोसिसची निर्मिती सुलभ होते. ",
        // featuresProstheTitle2: "सानुकूलित उपाय योजना",
        // featuresProstheDescription2:
        //   "आम्ही प्रत्येक रुग्णाच्या विशिष्ट गरजेनुसार डिव्हाइस तयार करतो, ज्यामुळे त्यांना अधिक आराम आणि कार्यक्षमता मिळते",
        // featuresProstheTitle3: "सर्वांगीण काळजी",
        // featuresProstheDescription3:
        //   "शारीरिक, भावनिक आणि मानसिक समर्थनासह पुनर्वसन व अनुकूलता प्रक्रियेतील रुग्णांना मदत करतो.  ",
        // featuresProstheTitle4: "बहुविभागीय दृष्टिकोन",
        // featuresProstheDescription4:
        //   "ऑर्थोपेडिक सर्जन, फिजिओथेरपिस्ट, व इतर विशेषज्ञांसोबत टीमचे सहकार्य असते, ज्यामुळे प्रत्येक रुग्णासाठी समन्वित उपचार योजना सुनिश्चित केली जाते.  ",
        // featuresProstheTitle5: "सुलभता",
        // featuresProstheDescription5:
        //   "आम्ही परवडणाऱ्या सेवांसह वेळेवर काळजी देतो, विशेषतः दुर्लक्षित समुदायातील रुग्णांसाठी",
        // ourfacilities: "आमच्या सुविधा",
        // floorProsthe: "दुसरा मजला",
        // department6: "व्यावसायिक थेरपी विभाग",
        // occupationaltagline:
        //   "व्यावसायिक थेरपी ही एक प्रकारची थेरपी आहे जी दिव्यांग व्यक्तींना त्यांचे दैनंदिन कामे आणि क्रियाकलाप करण्यास मदत करते. ही थेरपी दिव्यांग व्यक्तींना स्वावलंबी होण्यास आणि त्यांच्या जीवनमानात सुधारणा करण्यास सहाय्य करते.",
        // roleOccupational: "व्यावसायिक थेरपीचे कार्य",
        // roleOccupational1:
        //   "दिव्यांग व्यक्तींना स्वावलंबन प्राप्त करण्यात मदत करणे.",
        // roleOccupational2:
        //   "दिव्यांग व्यक्तींना त्यांच्या दैनंदिन कामे आणि क्रियाकलाप शिकवणे.",
        // roleOccupational3:
        //   "दिव्यांग व्यक्तींच्या शारीरिक आणि मानसिक क्षमतांमध्ये सुधारणा करणे",
        // roleOccupational4:
        //   "दिव्यांग व्यक्तींना सामाजिक आणि आर्थिक स्वावलंबन प्राप्त करण्यासाठी सहाय्य करणे.",
        // roleOccupational5:
        //   "दिव्यांग व्यक्तींच्या कुटुंबियांना काळजी घेण्यात सहाय्य करणे..",
        // typesOccupational: "व्यावसायिक थेरपीचे प्रकार",
        // typesOccupational1: "शारीरिक व्यावसायिक थेरपी",
        // typesOccupational2: "मानसिक व्यावसायिक थेरपी",
        // typesOccupational3: "विद्यार्थी व्यावसायिक थेरपी",
        // typesOccupational4: "पुनर्वसन व्यावसायिक थेरपी",
        // benefitsOccupational: "व्यावसायिक थेरपीचे फायदे",
        // benefitsOccupational1: "स्वावलंबनात वाढ होते.",
        // benefitsOccupational2: "दैनंदिन कामे आणि क्रियाकलाप करण्यास मदत मिळते.",
        // benefitsOccupational3: "शारीरिक आणि मानसिक क्षमतांमध्ये सुधारणा होते.",
        // benefitsOccupational4:
        //   "सामाजिक आणि आर्थिक स्वावलंबनासाठी सहाय्य मिळते.",
        // benefitsOccupational5: "जीवनमानात सुधारणा होते.",
        // occupationalBottomLine:
        //   "व्यावसायिक थेरपी ही दिव्यांग व्यक्तींसाठी अत्यंत महत्त्वाची आहे, जी त्यांना स्वावलंबन प्राप्त करण्यात आणि त्यांच्या जीवनमानात सुधारणा करण्यात मदत करते.",
        // floorOccupational: "दुसरा मजला",
        department7: "समुपदेशन आणि कार्यक्रम व्यवस्थापन विभाग",
        featuresCPM: "विभागाची वैशिष्ट्ये",
        featuresCPMTitle1: "1.समर्थन सेवा",
        featuresCPMDescription1:
          "अपंगत्वाशी संबंधित आव्हानांचा सामना करणाऱ्या व्यक्तींना प्रत्यक्ष, फोनद्वारे किंवा ऑनलाइन आवश्यक समर्थन प्रदान करणे.",
        featuresCPMTitle2: "2.आवश्यकता मूल्यांकन",
        featuresCPMDescription2:
          "व्यक्ती, कुटुंब, कॉर्पोरेट्स किंवा अपंग व्यक्तींच्या समूहांच्या गरजा समजून घेण्यासाठी मूल्यांकन करणे आणि त्यानुसार अनुकूल समर्थन योजना तयार करणे",
        featuresCPMTitle3: "3.हस्तक्षेप आणि मार्गदर्शन",
        featuresCPMDescription3:
          "कौशल्ये आणि आवडींनुसार योग्य पर्याय आणि संधी शोधण्यात व्यक्ती आणि कुटुंबाला मदत करणे.  ",
        featuresCPMTitle4: "4.कार्यशाळा आणि प्रशिक्षण",
        featuresCPMDescription4:
          "जीवन कौशल्ये, सामाजिक कौशल्ये आणि आव्हानांचा सामना करण्याच्या धोरणांचा विकास करण्यासाठी कार्यशाळा आयोजित करणे",
        featuresCPMTitle5: "5.वकिली",
        featuresCPMDescription5:
          "अपंग व्यक्तींच्या हक्कांसाठी वकिली करणे, त्यांना आवश्यक संसाधने आणि सेवा मिळवून देणे व विश्वास आणि आदराचे नाते निर्माण करणे.  ",
        featuresCPMTitle6: "6.कुटुंब समुपदेशन",
        featuresCPMDescription6:
          "कुटुंबांना मार्गदर्शन आणि समर्थन प्रदान करणे, त्यांचे विचार ऐकणे, सहानुभूती दाखवणे आणि त्यांना वेगवेगळ्या दृष्टिकोनातून गोष्टी समजून घेण्यास मदत करणे.  ",
        featuresCPMTitle7: "7.संदर्भ सेवा",
        featuresCPMDescription7:
          "इतर व्यावसायिकांशी सहकार्य करणे आणि व्यक्तींना थेरपी, वैद्यकीय समर्थन किंवा शैक्षणिक संसाधने यांसारख्या अतिरिक्त सेवांकडे संदर्भित करणे.  ",
        featuresCPMTitle8: "8. कार्यक्रम विकास",
        featuresCPMDescription8:
          "अपंग व्यक्तींच्या गरजांवर लक्ष केंद्रित करत कौशल्य विकास, सक्षमीकरण आणि सामाजिक समावेशासाठी विशिष्ट कार्यक्रम डिझाइन करणे आणि अंमलबजावणी करणे",
        featuresCPMTitle9: "9.कार्यक्रम समन्वय",
        featuresCPMDescription9:
          "कार्यशाळा, परिसंवाद, परिषद, सिम्पोजियम्स आणि इतर आउटरीच व इन-हाउस कार्यक्रम आयोजित करणे, ज्यामुळे सहभागींमध्ये आणि समुदायात जागरूकता, शिक्षण आणि सहभाग वाढतो",
        featuresCPMTitle10: "10. संसाधन व्यवस्थापन",
        featuresCPMDescription10:
          "विविध कार्यक्रमांसाठी आवश्यक संसाधने आणि साहित्य व्यवस्थापित करणे, ज्यामुळे सर्व उपक्रम सुसज्ज आणि सुलभ असतात",
        featuresCPMTitle11: "11. सहकार्य",
        featuresCPMDescription11:
          "अपंग व्यक्तींसाठी व्यावसायिक विकास, शैक्षणिक, जागरूकता, कौशल्य, रोजगार, उद्योजकता आणि इतर कार्यक्रम व इव्हेंट आयोजित करणे; तसेच अन्य विभाग, शाळा, संस्था, समुदाय संघटना आणि संबंधित घटकांशी सहकार्य करून कार्यक्रमांचा प्रभाव आणि पोहोच वाढवणे.  ",
        featuresCPMTitle12: "12.निगराणी आणि मूल्यांकन",
        featuresCPMDescription12:
          "अभिप्राय आणि मूल्यांकन मेट्रिक्सद्वारे कार्यक्रमांचा प्रभाव तपासणे, उद्दिष्टे पूर्ण होण्याची खात्री करणे आणि सहभागींना प्रभावी सेवा देणे.  ",
        featuresCPMTitle13: "13.समुदाय संपर्क",
        featuresCPMDescription13:
          "विभागातील कार्यक्रमांची माहिती समुदायापर्यंत पोहोचवणे आणि सहभाग वाढवण्यासाठी प्रोत्साहन देणे. ",
        featuresCPMTitle14: "14.शिकणे आणि प्रशिक्षण",
        featuresCPMDescription14:
          "कार्यक्रम वितरणात सहभागी असलेल्या कर्मचारी आणि स्वयंसेवकांना प्रशिक्षण देणे, ज्यामुळे ते सहभागींना योग्य समर्थन देऊ शकतील.  ",
        featuresCPMTitle15: "15. सीएसआर अनुप्रयोग",
        featuresCPMDescription15:
          "निधी संधी ओळखणे आणि विविध कार्यक्रमांसाठी आर्थिक मदत मिळवण्यासाठी प्रस्ताव तयार करणे.",

        floorCPM: "पहिला मजला",
        department8: "श्रवण आणि भाषाशास्त्र विभाग",
        testingAudio: "चाचणी आणि मूल्यांकन सेवा",
        testingAudio1: "ऐकण्याचे मूल्यांकन  ",
        testingAudio2: "ग्रहणशील आणि व्यक्त करणाऱ्या भाषेचे मूल्यांकन   ",
        testingAudio3: "भाषणाचे मूल्यांकन (आवाजनिर्मिती/ध्वनिशास्त्र)  ",
        testingAudio4: "आवाजाचे मूल्यांकन   ",
        testingAudio5: "भाषण प्रवाह मूल्यांकन  ",
        testingAudio6: "न्यूरोलॉजिकल डिसऑर्डरचे मूल्यांकन  ",
        testingAudio7: "सामाजिक संवाद कौशल्य मूल्यांकन  ",
        testingAudio8: "खाणे/गिळण्याचे मूल्यांकन  ",
        testingAudio9: "साक्षरता मूल्यांकन  ",

        therapyAudio: "थेरपी सेवा",
        therapyAudio1: "भाषाशास्त्रीय/आवाजनिर्मिती थेरपी  ",
        therapyAudio2: "भाषण प्रवाह थेरपी  ",
        therapyAudio3: "न्यूरोलॉजिकल डिसऑर्डरसाठी भाषण थेरपी  ",
        therapyAudio4: "आवाज थेरपी  ",
        therapyAudio5: "गिळण्याची थेरपी  ",
        therapyAudio6: "फोनेलॉजिकल थेरपी  ",
        therapyAudio7: "वैयक्तिक थेरपी (मुले, किशोरवयीन, प्रौढ)  ",
        therapyAudio8: "गट थेरपी (समर्थन गट, कौशल्य प्रशिक्षण)  ",
        therapyAudio9: "पालक समुपदेशन  ",

        comunityAudio: "समुदाय संपर्क (अपंग व्यक्तींसाठी सेवा)",
        comunityAudio1: "कार्यशाळा आणि परिसंवाद  ",
        comunityAudio2: "समर्थन गट  ",
        comunityAudio3: "समुदाय कार्यक्रम  ",
        comunityAudio4: "स्थानिक संस्थांसोबत सहकार्य  ",
        comunityAudio5: "संदर्भ सेवा  ",
        floorAudio: "तिसरा मजला",

        department9: "कला आणि हस्तकला विभाग",
        artTitle1: "वैयक्तिक शिक्षण पद्धती",
        artDescription1a:
          "विद्यार्थ्यांच्या गरजांनुसार आणि क्षमतांनुसार शिक्षण पद्धती करणे.",
        artDescription1b: "विद्यार्थ्यांना विविध साहित्य उपलब्ध करून देणे.",
        artDescription1c: "तंत्रे समायोजित करून कला सर्वांसाठी सुलभ बनवणे.",

        artTitle2: "कलेद्वारे सबलीकरण",
        artDescription2a:
          "विद्यार्थ्यांना स्वतःची अभिव्यक्ती करण्यासाठी प्रोत्साहित करणे.",
        artDescription2b:
          "प्रत्येक विद्यार्थ्याची अनोखी दृष्टी आणि क्षमता उजळू देणे.",
        artDescription2c:
          "प्रेरणा: कला हा आत्मविश्वासासाठी एक शक्तिशाली साधन ठरू शकतो..",

        artTitle3: "साधनसामग्रीची सुलभता",
        artDescription3a:
          "साधने आणि संसाधने सर्वांसाठी सुलभ असतील याची खात्री करणे.",
        artDescription3b: "अ‍ॅडॉप्टिव्ह ब्रशेसचा वापर.",
        artDescription3c:
          "विद्यार्थ्यांना डिजिटल ड्रॉइंग पॅड्सची ओळख करून द्या.",
        artDescription3d: "दैनंदिन जीवनातील क्रियाकलाप",
        artDescription3e: "स्पर्शजन्य घटकांचा वापर.",

        artTitle4: "समर्थक वातावरण तयार करणे",
        artDescription4a:
          "सर्व क्षमतांचा सन्मान करणारी वर्ग संस्कृती तयार करा.",
        artDescription4b: "विद्यार्थ्यांसाठी सुरक्षित जागा निर्माण करा.",
        artDescription4c:
          "त्यांना कलेच्या माध्यमातून शोधण्यासाठी आणि स्वतःला व्यक्त करण्यासाठी प्रोत्साहित करा..",
        floorArt: "तिसरा मजला",

        department10: "नृत्य आणि संगीत विभाग",
        danceTagline:
          "नृत्य आणि संगीत विभाग विद्यार्थ्यांना त्यांची सर्जनशीलता शोधण्यासाठी आणि नृत्य व संगीताच्या कलेद्वारे स्वतःला व्यक्त करण्यासाठी एक व्यासपीठ प्रदान करतो. हा विभाग विद्यार्थ्यांच्या भावनिक, संज्ञानात्मक, शारीरिक आणि सामाजिक एकात्मतेसाठी मदत करतो.",
        workDanceDep: "नृत्य आणि संगीत विभागातील कार्य",
        workTagline:
          "आमचा नृत्य आणि संगीत विभाग एक समावेशक वातावरण तयार करण्यासाठी वचनबद्ध आहे, जिथे विद्यार्थ्यांना खालील उपक्रमांमध्ये सहभागी होता येते",
        workDescription1:
          "तयारीसाठी वॉर्म-अप व्यायाम, मुख्य व्यायाम, कूल-डाऊन आणि तोंडी प्रक्रिया यांसह सत्राची सुरुवात होते..",
        workDescription2:
          "नृत्य करताना विविध साहित्य, जसे की रंगीत स्कार्फचा समावेश केला जातो.",
        workDescription3:
          "प्रत्येक विद्यार्थ्याला योग्य प्रकारे शिकता यावे यासाठी एकल सत्रे घेतली जातात",
        workDescription4:
          "गट सत्रांचे आयोजन करून विद्यार्थ्यांमध्ये आत्मविश्वास निर्माण केला जातो आणि सामाजिक संवादासाठी प्रोत्साहन दिले जाते. .",
        floorDance: "तिसरा मजला",

        department11: "फिजिओथेरपी विभाग",
        physioTagline:
          "फिजिओथेरपी विभाग २ महिन्यांपासून ८० वर्षांपर्यंतच्या अपंग व्यक्तींच्या शारीरिक पुनर्वसनासाठी आवश्यक साधनसामग्रीने सुसज्ज आहे. विभागाचे वैशिष्ट्य म्हणजे अपंग व्यक्तींमध्ये तंदुरुस्ती व सहनशीलता वाढवण्यावर भर दिला जातो.",
        physioHighlight:
          "विभागाचे ठळक मुद्दे: PWD च्या तंदुरुस्ती आणि सहनशीलतेवर देखील भर देते",
        physioFacilityTitle: "सुविधा आणि सेवा",
        physioFacility1: "संतुलनाचे समस्या",
        physioFacility2: "पक्षाघात पुनर्वसन",
        physioFacility3: "सल्लामसलत आणि मूल्यांकन",
        physioFacility4: "चालीचे विश्लेषण",
        physioFacility5: "हस्तमाना थेरपी आणि इलेक्ट्रोथेरपी पद्धती",
        physioFacility6: "वेदना काळजी आणि श्वसन पुनर्वसन",
        physioFacility7: "एर्गोनॉमिक्स आणि स्थूलता व्यवस्थापन",
        physioFacility8: "पूर्व आणि पश्चात् शस्त्रक्रियायुक्त देखभाल",
        physioFeatures: "विभाग वैशिष्ट्ये",
        physioFeaturesTitle1: "थर्मल मोडॅलिटीज",
        physioFeaturesDescription1: "क्रायोथेरपी शॉर्ट वेव थेरपी  ",
        physioFeaturesTitle2: "उत्तेजक उपचार पद्धती (Stimulating Modalities)",
        physioFeaturesDescription2:
          "1.इंटरफेरेंशियल थेरपी (Interferential Therapy) 2.ट्रान्सक्युटेनिअस इलेक्ट्रिकल नर्व स्टिम्युलेशन (TENS)",
        physioFeaturesTitle3: "मऊ ऊतक उपचार मोडॅलिटीज",
        physioFeaturesDescription3: "अल्ट्रासोनिक थेरपी, लेझर थेरपी  ",
        physioFeaturesTitle4: "डायग्नोस्टिक मोडॅलिटीज",
        physioFeaturesDescription4:
          "इलेक्ट्रोमायोग्राफी, बायो-फीडबॅक थेरपी, बाल फिजिओथेरपी युनिट, न्यूरो डेव्हलपमेंट थेरपी (NDT), सामर्थ्य प्रशिक्षण, कार्यात्मक संतुलन प्रशिक्षण, चाल प्रशिक्षण आणि सहनशक्ती प्रशिक्षण  ",
        physioFeaturesTitle5: "फिटनेस युनिट",
        physioFeaturesDescription5:
          "आम्ही ट्रेडमिल, एलिप्टिकल ट्रेनर, सहाय्यक पोटाच्या व्यायामाची यंत्रे, ८ मल्टिस्टेशन बाह्य व्यायामशाळा यासारख्या यंत्रसामग्रीसह खास फिटनेस प्रशिक्षण देतो, हायड्रोथेरपी (प्रक्रियेत आहे)",
        floorPhysio: "दुसरा मजला",







        /// FISHERIES WEBSITE ************************************************************************************************************


        

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

        //who we are

        title: "आमच्या बद्दल अधिक माहिती",
        description:
          "महाराष्ट्र मत्स्योद्योग विकास महामंडळ (MFDC)",
        buttonText: "आणखी माहिती",
        feature1Title: "बर्फ कारखाने व शीतगृह सुविधा",
        feature1Description:
          "मासळीच्या ताजेपणासाठी MFDC बर्फ निर्मिती यंत्रणा, शीतगृहे आणि प्रक्रीया केंद्रे उभारते व कार्यान्वित करते, जे मासळीच्या जतनासाठी महत्त्वाचे आहेत.",
        feature2Title: "मासेमारी साहित्य निर्मिती",
        feature2Description:
          "महामंडळ जाळी, डिझेल व सागरी इंजिने, दोर, नावा यासारख्या मत्स्यसंबंधी साहित्याचे उत्पादन व पुरवठा करते, जे स्थानिक मासेमारांना स्वावलंबी बनवतात.",
        feature3Title: "मूल्यवर्धित उत्पादने व निर्यात",
        feature3Description:
          "MFDC कडून डबाबंद मासळी, मासळीचे तेल, कुक्कुट खाद्य इ. उत्पादनांचे उत्पादन व विक्री देशांतर्गत तसेच आंतरराष्ट्रीय बाजारात केली जाते.",
        feature4Title: "मासेमारी पायाभूत सुविधा",
        feature4Description:
          "महामंडळ लहान धक्के (जेट्टी), मत्स्य बंदरे, उतरवणी केंद्रे, नाव बांधणी केंद्रे यांसारखी पायाभूत सुविधांची उभारणी करून मासेमारांसाठी सुलभता निर्माण करते.   ",
        feature5Title: "प्रशिक्षण, संशोधन व नवोन्मेष",
        feature5Description: "तांत्रिक प्रशिक्षण, संशोधन प्रकल्प व आधुनिक तंत्रज्ञान आत्मसात करण्यासाठी MFDC विविध योजनांद्वारे मत्स्य व्यवसायास वैज्ञानिक दृष्टिकोनातून सक्षम करते.",
        feature6Title: "रोजगार संधी व सामाजिक उत्थान",
        feature6Description:
          "आर्थिकदृष्ट्या दुर्बल घटकांकरिता रोजगार निर्मिती हे MFDC चे मुख्य उद्दिष्ट असून, सहकारी संस्था व स्वयं-सहायता गटांना प्रोत्साहन दिले जाते.",


          quicklinesheading:"जलद दुवे",
          quickLink1Title:"प्रधानमंत्री मत्स्यसंपदा योजना डॅशबोर्ड",
          quickLink2Title:"मत्स्यव्यवसाय विभाग महाराष्ट्र शासन, भारत",
          quickLink3Title:"सागरी आणि भूजल डॅशबोर्ड",
          quickLink4Title :"सागरमाला - भारत सरकारचे नौवहन मंत्रालय",
      
      
      },
    },
  },
});

export default i18next;
