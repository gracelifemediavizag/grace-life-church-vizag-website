export interface Leader {
  name: string;
  slug: string;
  role: string;
  category: 'pastor' | 'elder' | 'deacon' | 'worship' | 'youth' | 'women-children' | 'media';
  bio: string;
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
    role: 'Pastoral Assistant & Elder',
    category: 'elder',
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
    role: 'Elder',
    category: 'elder',
    bio: "Netti Jagadish Babu accepted the Lord in his teenage years. He was attracted to God's word and loved the Lord dearly. He greatly desired to do the Lord's work and accelerate it with the correct doctrine to bless the Telugu church. God's sovereign hand brought him in contact with Pastor Daniel Surya Avula and expository preaching at Grace Life Church.\n\nHe holds B.Sc. in Chemistry from Andhra University and a Master's in Computer Applications from Kakatiya University. He is a Branch Manager cum Sr. Principal Surveyor in a commodity and mineral testing inspection agency.\n\nHe married Lalitha Kumari, an obedient and faithful servant of God. The Lord blessed them with two angelic daughters, Vijaya Pratistitha and Nitya Srestitha.",
  },
  {
    name: 'Eliazer Naik',
    slug: 'eliazer-naik',
    role: 'Elder',
    category: 'elder',
    bio: 'Eliazer Naik serves as an elder at Grace Life Church, Vizag, providing faithful pastoral oversight and care for the congregation.',
  },
  {
    name: 'Ajay Chakravarthy Netti',
    slug: 'ajay-chakravarthy-netti',
    role: 'Elder & Pastor of Youth Ministry',
    category: 'youth',
    bio: 'Ajay Chakravarthy Netti serves as an elder and leads the youth ministry at Grace Life Church, Vizag, equipping the next generation in faith and biblical understanding.',
  },
  {
    name: 'Mani Dayal',
    slug: 'mani-dayal',
    role: 'Elder',
    category: 'elder',
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
    name: 'Sandeep Netti',
    slug: 'sandeep-netti',
    role: 'Deacon & Administrative In-Charge',
    category: 'deacon',
    bio: "Sandeep Netti is an administrative in-charge at Grace Life Church, Vizag. He was born in a Hindu family. He heard the gospel during his post-graduate studies through his classmate Rini Jessie, who later became his wife. He gave his life to Jesus Christ. While searching for a good church that is committed to God's word and instructs the flock with sound doctrine, the sovereign hand of the Lord led them to this church.\n\nHe holds both MBA and MA in Psychology degrees from Andhra University. Sandeep Netti is a businessman. He is married to Rini Jessie, and they have two amazing boys, Risan Eric and Sarin Richard.",
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
    name: 'Sunil Kumar P.',
    slug: 'sunil-kumar-p',
    role: 'Worship Leader',
    category: 'worship',
    bio: 'Sunil Kumar P. serves as a worship leader at Grace Life Church, Vizag, ministering through music and song to the glory of God.',
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
    role: "Women's & Children's Ministry",
    category: 'women-children',
    bio: "Jhancy Rani Avula leads the women's and children's ministry at Grace Life Church, Vizag. She is the wife of Pastor Daniel Surya Avula and a faithful servant of God, committed to equipping women and nurturing children in the faith.",
  },
  {
    name: 'Babita Palakurthi',
    slug: 'babita-palakurthi',
    role: "Women's & Children's Ministry",
    category: 'women-children',
    bio: "Babita Palakurthi serves in the women's and children's ministry at Grace Life Church, Vizag, faithfully discipling women and teaching children in the ways of God.",
  },
  {
    name: 'Radha Bai',
    slug: 'radha-bai',
    role: 'Media Ministry',
    category: 'media',
    bio: 'Radha Bai (Radha Nitta) serves in the media ministry at Grace Life Church, Vizag, ensuring that the ministry of the Word reaches beyond the walls of the church.',
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
