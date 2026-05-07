export interface Leader {
  name: string;
  slug: string;
  role: string;
  category: 'pastor' | 'elder' | 'elder-in-training' | 'deacon' | 'deaconess' | 'worship' | 'youth' | 'women-children' | 'media';
  tags?: string[];
  bio: string;
  photo?: string | null;
}

export const leaders: Leader[] = [
  {
    name: 'Daniel Surya Avula',
    slug: 'daniel-surya-avula',
    role: 'Pastor — Preaching and Vision',
    category: 'pastor',
    bio: "Daniel Surya Avula is the founding pastor of Grace Life Church, Vizag. At age sixteen, he heard the gospel of Jesus Christ for the first time through his neighbor and friend. The Lord pursued him through his classmates in college. He regularly attended the Bible studies conducted by EU, a student ministry on campus. At seventeen, he repented of his sins and placed his faith in the Lord Jesus Christ for his salvation and eternal life. He was the first one to believe in Jesus Christ from his family.\n\nHe started his professional career as a control systems engineer at Honeywell Automation, Pune. He traveled to more than twenty-five countries and worked with several multinational companies on various continents. While working in Abu Dhabi as a project manager for their national oil company (ADCO), he sensed a call for full-time ministry. He loved reading and obeying the word of God. He was attracted to the teachings of Warren Wiersbe and John MacArthur. The sovereign hand of the Lord led Daniel to The Master's Seminary in Los Angeles. He quit his job in 2012 and moved to the United States with his family pursuing theological studies.\n\nHe holds a Bachelor of Science (B.S.) in Business from Capella University and Master of Divinity (M.Div.) and Master of Theology (Th.M.) degrees from The Master's Seminary. He is trained in Biblical languages Hebrew, Greek, and Aramaic.\n\nHe loves the flock of God, and he has a tender and caring heart for them. Daniel is married to Jhancy Rani, and they have two sons, Prabhu and Joseph.",
  },
  {
    name: 'Mohan Nitta',
    slug: 'mohan-nitta',
    role: 'Pastoral Assistant & Elder in Training',
    category: 'elder-in-training',
    bio: "Mohan Nitta was born in Srikakulam, Andhra Pradesh, in 1996. At 11, his parents accepted the Lord Jesus Christ as their savior after his father recovered from a severe health issue. But he gave his life to the Lord after hearing the true Gospel at the Grace Life Church in 2017.\n\nHe completed a Bachelor of Arts (B.A.) from Andhra University. When he expressed a desire to learn God's word and involve in the ministry, Pastor Daniel took him for pastoral training. He completed all systematic theology classes and trained in preaching. He has been actively involved in various aspects of the ministry.\n\nHe is married to Radha Nitta and they are blessed with a boy Nathan Daniel.",
  },
  {
    name: 'Ayodhya Rao Bai',
    slug: 'ayodhya-rao-bai',
    role: 'Elder',
    category: 'elder',
    bio: 'Ayodhya Rao Bai serves as an elder at Grace Life Church, Vizag, faithfully serving the congregation with wisdom and care.',
  },
  {
    name: 'Jagadish Netti',
    slug: 'jagadish-netti',
    role: 'Elder in Training',
    category: 'elder-in-training',
    bio: "Netti Jagadish Babu accepted the Lord in his teenage years. He was attracted to God's word and loved the Lord dearly. He greatly desired to do the Lord's work and accelerate it with the correct doctrine to bless the Telugu church. God's sovereign hand brought him in contact with Pastor Daniel Surya Avula and expository preaching at Grace Life Church.\n\nHe holds B.Sc. in Chemistry from Andhra University and a Master's in Computer Applications from Kakatiya University. He is a Branch Manager cum Sr. Principal Surveyor in a commodity and mineral testing inspection agency.\n\nHe married Lalitha Kumari, an obedient and faithful servant of God. The Lord blessed them with two angelic daughters, Vijaya Pratistitha and Nitya Srestitha.",
  },
  {
    name: 'Eliazer Naik',
    slug: 'eliazer-naik',
    role: 'Elder in Training',
    category: 'elder-in-training',
    bio: 'Eliazer Naik serves as an elder at Grace Life Church, Vizag, providing faithful pastoral oversight and care for the congregation.',
  },
  {
    name: 'Ajay Chakravarthy',
    slug: 'ajay-chakravarthy-netti',
    role: 'Elder in Training & Youth Ministry',
    category: 'elder-in-training',
    bio: 'Ajay Chakravarthy serves as an elder and leads the youth ministry at Grace Life Church, Vizag, equipping the next generation in faith and biblical understanding.',
  },
  {
    name: 'Mani Dayal',
    slug: 'mani-dayal',
    role: 'Elder in Training',
    category: 'elder-in-training',
    bio: 'Mani Dayal serves faithfully as an elder at Grace Life Church, Vizag, shepherding the congregation with diligence and love.',
  },
  {
    name: 'Chanukya Palakurthi',
    slug: 'chanukya-palakurthi',
    role: 'Deacon',
    category: 'deacon',
    bio: 'Chanukya Palakurthi serves as a deacon at Grace Life Church, Vizag, faithfully assisting in the practical ministry of the church.',
  },
  {
    name: 'Purna Surya Chandra Rao Netti',
    slug: 'purna-surya-chandra-rao-netti',
    role: 'Deacon',
    category: 'deacon',
    bio: 'Purna Netti serves as a deacon at Grace Life Church, Vizag, supporting the ministry with faithful and practical service.',
  },
  {
    name: 'Prasadh Tarini',
    slug: 'prasadh-tarini',
    role: 'Deacon',
    category: 'deacon',
    bio: 'Prasadh Tarini serves as a deacon at Grace Life Church, Vizag, committed to the practical and spiritual care of the congregation.',
  },
  {
    name: 'P. V. Ramana Murthy',
    slug: 'p-v-ramana-murthy',
    role: 'Deacon',
    category: 'deacon',
    bio: 'P. V. Ramana Murthy serves as a deacon at Grace Life Church, Vizag, faithfully supporting the work of the ministry.',
  },
  {
    name: 'Ramana Naidu',
    slug: 'ramana-naidu',
    role: 'Deacon',
    category: 'deacon',
    bio: 'Ramana Naidu serves as a deacon at Grace Life Church, Vizag, assisting in the practical ministry of the local body.',
  },
  {
    name: 'Rajendra Katikitala',
    slug: 'rajendra-katikitala',
    role: 'Deacon',
    category: 'deacon',
    bio: 'Rajendra Katikitala serves as a deacon at Grace Life Church, Vizag, committed to faithful service in the body of Christ.',
  },
  {
    name: 'Rahul Roy',
    slug: 'rahul-roy',
    role: 'Worship Leader',
    category: 'worship',
    bio: 'Rahul Roy serves as a worship leader at Grace Life Church, Vizag, leading the congregation in heartfelt, God-centered worship each week.',
  },
  {
    name: 'Sunil Kumar',
    slug: 'sunil-kumar-p',
    role: 'Worship Leader',
    category: 'worship',
    bio: 'Sunil Kumar serves as a worship leader at Grace Life Church, Vizag, ministering through music and song to the glory of God.',
  },
  {
    name: 'Anney Arpita Netti',
    slug: 'anney-arpita-netti',
    role: 'Youth Ministry',
    category: 'youth',
    bio: 'Anney Arpita Netti serves in the youth ministry at Grace Life Church, Vizag, helping disciple the next generation of believers.',
  },
  {
    name: 'Jhancy Rani Avula',
    slug: 'jhancy-rani-avula',
    role: "Deaconess — Women's & Children's Ministry",
    category: 'deaconess',
    bio: "Jhancy Rani Avula leads the women's and children's ministry at Grace Life Church, Vizag. She is the wife of Pastor Daniel Surya Avula and a faithful servant of God, committed to equipping women and nurturing children in the faith.",
  },
  {
    name: 'Babita Palakurthi',
    slug: 'babita-palakurthi',
    role: "Deaconess — Women's & Children's Ministry",
    category: 'deaconess',
    bio: "Babita Palakurthi serves in the women's and children's ministry at Grace Life Church, Vizag, faithfully discipling women and teaching children in the ways of God.",
  },
  {
    name: 'Radha Bai',
    slug: 'radha-bai',
    role: 'Deaconess — Media Ministry',
    category: 'deaconess',
    bio: 'Radha Bai (Radha Nitta) serves in the media ministry at Grace Life Church, Vizag, ensuring that the ministry of the Word reaches beyond the walls of the church.',
  },
  {
    name: 'Lalitha Netti',
    slug: 'lalitha-netti',
    role: 'Deaconess — Women\'s Ministry',
    category: 'deaconess',
    bio: "Lalitha Netti is a faithful servant of God at Grace Life Church, Vizag. The wife of Jagadish Netti, she is known for her obedient and devoted walk with the Lord. She serves actively in the women's ministry, encouraging and discipling women in the faith. Together with her husband, they are blessed with two daughters, Vijaya Pratistitha and Nitya Srestitha.",
  },
  {
    name: 'Neelima Boggarapu',
    slug: 'neelima-boggarapu',
    role: 'Deaconess — Women\'s Ministry',
    category: 'deaconess',
    bio: "Neelima Boggarapu serves faithfully at Grace Life Church, Vizag, contributing to the women's ministry with a heart for discipleship and a love for the Lord and His people.",
  },
  {
    name: 'Srihari Uppe',
    slug: 'srihari-uppe',
    role: 'Media Ministry',
    category: 'media',
    bio: 'Srihari Uppe serves in the media ministry at Grace Life Church, Vizag, supporting the audio and visual production of the church\'s services and sermons.',
  },
  {
    name: 'Ravi Kishore Merugumalla',
    slug: 'ravi-kishore-merugumalla',
    role: 'Ministry Team',
    category: 'deacon',
    bio: 'Ravi Kishore Merugumalla serves faithfully at Grace Life Church, Vizag.',
  },
];

export function getLeaderBySlug(slug: string): Leader | undefined {
  return leaders.find((l) => l.slug === slug);
}
