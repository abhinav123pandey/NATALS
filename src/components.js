import { useState } from 'react';

// Mock Data
const mockBooks = [
  {
    id: 1,
    title: "The Art of Mindfulness",
    author: "Sarah Johnson",
    image: "https://images.pexels.com/photos/32452328/pexels-photo-32452328.jpeg",
    genre: "Self-Help",
    price: "₹299"
  },
  {
    id: 2,
    title: "Digital Marketing Mastery",
    author: "Rajesh Kumar",
    image: "https://images.pexels.com/photos/8199612/pexels-photo-8199612.jpeg",
    genre: "Business",
    price: "₹399"
  },
  {
    id: 3,
    title: "Love in Mumbai",
    author: "Priya Sharma",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
    genre: "Romance",
    price: "₹249"
  },
  {
    id: 4,
    title: "Tech Revolution 2025",
    author: "Alex Chen",
    image: "https://images.unsplash.com/3/doctype-hi-res.jpg",
    genre: "Technology",
    price: "₹499"
  },
  {
    id: 5,
    title: "Cooking with Love",
    author: "Maria Rodriguez",
    image: "https://images.unsplash.com/photo-1590587754541-a3a4f2e0d06f",
    genre: "Cooking",
    price: "₹349"
  },
  {
    id: 6,
    title: "The Mystery of Shadows",
    author: "John Thriller",
    image: "https://images.unsplash.com/photo-1511108690759-009324a90311",
    genre: "Mystery",
    price: "₹279"
  },
  {
    id: 7,
    title: "Children's Adventures",
    author: "Emma Wilson",
    image: "https://images.unsplash.com/photo-1533561304446-88a43deb6229",
    genre: "Children",
    price: "₹199"
  },
  {
    id: 8,
    title: "Fitness Journey",
    author: "David Strong",
    image: "https://images.pexels.com/photos/2228580/pexels-photo-2228580.jpeg",
    genre: "Health",
    price: "₹329"
  },
  {
    id: 9,
    title: "Business Strategy",
    author: "Michael Porter",
    image: "https://images.unsplash.com/photo-1598301257982-0cf014dabbcd",
    genre: "Business",
    price: "₹449"
  },
  {
    id: 10,
    title: "Travel Stories",
    author: "Lisa Adventure",
    image: "https://images.pexels.com/photos/32452322/pexels-photo-32452322.jpeg",
    genre: "Travel",
    price: "₹299"
  }
];

const mockAuthors = [
  {
    id: 1,
    name: "Seema Ramasamy",
    title: "Past Life Regressions Specialist",
    image: "https://images.pexels.com/photos/734968/pexels-photo-734968.jpeg",
    books: 5
  },
  {
    id: 2,
    name: "Andrea",
    title: "Children's Book Author",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296",
    books: 8
  },
  {
    id: 3,
    name: "Saloni Chopra",
    title: "Young Adult Fiction",
    image: "https://images.unsplash.com/photo-1718120361146-1055b0ee2abc",
    books: 12
  },
  {
    id: 4,
    name: "Jayesh Agarwal",
    title: "Entrepreneurship Author",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c",
    books: 7
  },
  {
    id: 5,
    name: "Purnesh Kamra",
    title: "Business Consultant",
    image: "https://images.pexels.com/photos/27045934/pexels-photo-27045934.jpeg",
    books: 9
  },
  {
    id: 6,
    name: "Amit Bagaria",
    title: "Award-winning Author",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c",
    books: 15
  }
];

const genres = [
  { id: 1, name: "Biography", icon: "👤" },
  { id: 2, name: "Business", icon: "💼" },
  { id: 3, name: "Autobiography", icon: "📖" },
  { id: 4, name: "Philosophy", icon: "🤔" },
  { id: 5, name: "Self-Help", icon: "💪" },
  { id: 6, name: "Young Adult", icon: "🧒" },
  { id: 7, name: "Politics", icon: "🏛️" },
  { id: 8, name: "Technology", icon: "💻" },
  { id: 9, name: "Health & Fitness", icon: "❤️" },
  { id: 10, name: "Education", icon: "🎓" },
  { id: 11, name: "General Book Stores", icon: "📚" }
];

// Header Component
export function Header({ activeSection, setActiveSection }) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">Natals</span>
              <span className="text-2xl font-bold text-red-500">Publication</span>
            </div>
            <nav className="hidden md:ml-8 md:flex md:space-x-8">
              <button
                onClick={() => setActiveSection('discover')}
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Discover Books
              </button>
              <button
                onClick={() => setActiveSection('writers')}
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                For Writers
              </button>
            </nav>
          </div>
          
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for books, authors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Login
            </button>
            <button
              onClick={() => setActiveSection('writers')}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

// Hero Component
export function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-6">
              Publish your Book with India's #1 Publishing Platform
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Trusted by over 30,000 authors worldwide
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">
              Start Publishing
            </button>
            
            <div className="mt-12 flex items-center space-x-8 opacity-80">
              <span className="text-sm">As featured in:</span>
              <div className="flex space-x-6">
                <span className="text-sm font-medium">The Economic Times</span>
                <span className="text-sm font-medium">Entrepreneur</span>
                <span className="text-sm font-medium">TechAsia</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img
              src="https://images.pexels.com/photos/734968/pexels-photo-734968.jpeg"
              alt="Professional Author"
              className="w-96 h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Popular Authors Component
export function PopularAuthors() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Authors</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {mockAuthors.map((author) => (
            <div key={author.id} className="bg-blue-600 text-white rounded-lg p-4 hover:bg-blue-700 transition-colors cursor-pointer">
              <img
                src={author.image}
                alt={author.name}
                className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
              />
              <h3 className="font-semibold text-sm text-center mb-1">{author.name}</h3>
              <p className="text-xs text-center opacity-90">{author.title}</p>
              <p className="text-xs text-center mt-2 opacity-75">{author.books} books</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Book Grid Component
function BookGrid({ books, title }) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <button className="text-blue-600 hover:text-blue-800 font-medium">View all</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {books.slice(0, 6).map((book) => (
            <div key={book.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-shadow">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity"></div>
              </div>
              <div className="mt-3">
                <h3 className="font-semibold text-sm text-gray-900 group-hover:text-blue-600 transition-colors">
                  {book.title}
                </h3>
                <p className="text-xs text-gray-600 mt-1">by {book.author}</p>
                <p className="text-sm font-bold text-green-600 mt-1">{book.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// New Releases Component
export function NewReleases() {
  return <BookGrid books={mockBooks.slice(0, 6)} title="New Releases" />;
}

// Trending This Week Component
export function TrendingWeek() {
  return (
    <section className="py-16 bg-gray-50">
      <BookGrid books={mockBooks.slice(3, 9)} title="Trending this week" />
    </section>
  );
}

// Browse By Genre Component
export function BrowseByGenre() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse By Genre</h2>
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-4">
          {genres.map((genre) => (
            <div key={genre.id} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-2xl">{genre.icon}</span>
              </div>
              <span className="text-xs text-center text-gray-700 font-medium">{genre.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Indian Languages Component
export function IndianLanguages() {
  const indianBooks = [
    {
      id: 1,
      title: "हिंदी साहित्य",
      author: "राम प्रसाद",
      image: "https://images.pexels.com/photos/32452322/pexels-photo-32452322.jpeg",
      language: "Hindi"
    },
    {
      id: 2,
      title: "তমিল গল্প",
      author: "সুব্রত মুখার্জী",
      image: "https://images.unsplash.com/photo-1666198262791-1d843c28cb73",
      language: "Bengali"
    },
    {
      id: 3,
      title: "தமிழ் கவிதை",
      author: "கமல் ஹாசன்",
      image: "https://images.unsplash.com/photo-1511108690759-009324a90311",
      language: "Tamil"
    },
    {
      id: 4,
      title: "ગુજરાતી નવલકથા",
      author: "ધીરુભાઈ પટેલ",
      image: "https://images.pexels.com/photos/2067569/pexels-photo-2067569.jpeg",
      language: "Gujarati"
    },
    {
      id: 5,
      title: "मराठी कादंबरी",
      author: "विजय तेंडुलकर",
      image: "https://images.unsplash.com/photo-1619646286047-c6681c24a695",
      language: "Marathi"
    },
    {
      id: 6,
      title: "తెలుగు కథలు",
      author: "విశ్వనాథ",
      image: "https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg",
      language: "Telugu"
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Indian Languages</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {indianBooks.map((book) => (
            <div key={book.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-shadow">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-3">
                <h3 className="font-semibold text-sm text-gray-900">{book.title}</h3>
                <p className="text-xs text-gray-600 mt-1">by {book.author}</p>
                <p className="text-xs text-blue-600 mt-1">{book.language}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Free Shipping Component
export function FreeShipping() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Free Shipping</h2>
          <p className="text-lg text-gray-600">Get free shipping on orders above ₹500</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {mockBooks.slice(6, 12).map((book) => (
            <div key={book.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-shadow">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                  FREE SHIPPING
                </div>
              </div>
              <div className="mt-3">
                <h3 className="font-semibold text-sm text-gray-900">{book.title}</h3>
                <p className="text-xs text-gray-600 mt-1">by {book.author}</p>
                <p className="text-sm font-bold text-green-600 mt-1">{book.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Editor's Picks Component
export function EditorsPicks() {
  const editorsPicks = [
    {
      id: 1,
      title: "Shefkrida",
      author: "Award Winner",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      badge: "Editor's Choice"
    },
    {
      id: 2,
      title: "Don't Startup",
      author: "Karthik Kumar",
      image: "https://images.pexels.com/photos/8199612/pexels-photo-8199612.jpeg",
      badge: "Bestseller"
    },
    {
      id: 3,
      title: "Spell-Binding Spells",
      author: "Magic Author",
      image: "https://images.unsplash.com/3/doctype-hi-res.jpg",
      badge: "New Release"
    },
    {
      id: 4,
      title: "Scale Smart",
      author: "Anirudh Narayan",
      image: "https://images.unsplash.com/photo-1598301257982-0cf014dabbcd",
      badge: "Business Pick"
    },
    {
      id: 5,
      title: "Venkat Rajan",
      author: "Biography",
      image: "https://images.pexels.com/photos/2228580/pexels-photo-2228580.jpeg",
      badge: "Biography"
    },
    {
      id: 6,
      title: "Koala Bru",
      author: "Children's Author",
      image: "https://images.unsplash.com/photo-1533561304446-88a43deb6229",
      badge: "Kids Choice"
    },
    {
      id: 7,
      title: "Trade and Grow Rich",
      author: "Financial Expert",
      image: "https://images.unsplash.com/photo-1590587754541-a3a4f2e0d06f",
      badge: "Finance"
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Editor's Picks</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {editorsPicks.map((book) => (
            <div key={book.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-shadow">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">
                  {book.badge}
                </div>
              </div>
              <div className="mt-3">
                <h3 className="font-semibold text-sm text-gray-900">{book.title}</h3>
                <p className="text-xs text-gray-600 mt-1">by {book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer Component
// export function Footer() {
//   return (
//     <footer className="bg-blue-800 text-white py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid md:grid-cols-4 gap-8">
//           <div>
//             <div className="mb-4">
//               <span className="text-2xl font-bold">notion</span>
//               <span className="text-2xl font-bold text-red-500">press</span>
//             </div>
//             <p className="text-sm opacity-80 mb-4">
//               For Writers
//             </p>
//             <p className="text-sm opacity-80">
//               India's premier self-publishing platform trusted by thousands of authors worldwide.
//             </p>
//           </div>
          
//           <div>
//             <h3 className="font-semibold mb-4">Read</h3>
//             <ul className="space-y-2 text-sm opacity-80">
//               <li><a href="#" className="hover:opacity-100">All Books</a></li>
//               <li><a href="#" className="hover:opacity-100">New Releases</a></li>
//               <li><a href="#" className="hover:opacity-100">Bestsellers</a></li>
//               <li><a href="#" className="hover:opacity-100">Free Books</a></li>
//             </ul>
//           </div>
          
//           <div>
//             <h3 className="font-semibold mb-4">About Us</h3>
//             <ul className="space-y-2 text-sm opacity-80">
//               <li><a href="#" className="hover:opacity-100">Company</a></li>
//               <li><a href="#" className="hover:opacity-100">Careers</a></li>
//               <li><a href="#" className="hover:opacity-100">Press</a></li>
//               <li><a href="#" className="hover:opacity-100">Blog</a></li>
//             </ul>
//           </div>
          
//           <div>
//             <h3 className="font-semibold mb-4">Connect with us</h3>
//             <div className="flex space-x-4">
//               <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500">
//                 <span className="text-sm">f</span>
//               </a>
//               <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500">
//                 <span className="text-sm">t</span>
//               </a>
//               <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500">
//                 <span className="text-sm">in</span>
//               </a>
//               <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500">
//                 <span className="text-sm">yt</span>
//               </a>
//             </div>
//           </div>
//         </div>
        
//         <div className="border-t border-blue-700 mt-8 pt-8 text-center text-sm opacity-80">
//           <p>Notice Press.com and publishing group significantly increase your manuscript's quality to achieve published results that is significantly superior which and provide excellent for promotion and marketing success also. We use professional editing and promotional services to get professional writing to promote your book and aid us in managing your digital published marketing related activities. We are proud to combine quality digital services to get professional publishing results.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }


// Footer Component
export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Plans', 'Services', 'Portfolio', 'Resources', 'Contact', 'Guidelines', 'Bulk Order', 'Book Distribution', 'Royalty Calculator', 'Policy', 'FAQ', 'Blockchain Certification', 'Special Discount and Programs', 'Sit'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in touch</h3>
            <div className="space-y-3">
              <p className="text-gray-300">
                <strong>Email:</strong><br />
                contact@whitefalconpublishing.com<br />
                helpdesk@whitefalconpublishing.com
              </p>
              <p className="text-gray-300">
                <strong>Contact For Book Publishing</strong><br />
                📞 +91-8882168882
              </p>
              <p className="text-gray-300">
                <strong>Address (INDIA):</strong><br />
                White Falcon Publishing Solutions LLP<br />
                A1-1992 Plot No 215 Ground Kamla,<br />
                New Delhi- 110025
              </p>
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Certifications</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">ISO</span>
                <span className="text-gray-300">ISO 9001:2015</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">IAF</span>
                <span className="text-gray-300">IAF Certification</span>
              </div>
            </div>
          </div>

          {/* Logo and Awards Column */}
          <div>
            <img 
              src="https://whitefalconpublishing.com/assets/img/white-falcon-logo.svg" 
              alt="White Falcon Publishing" 
              className="h-16 mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-300 text-sm mb-4">
              White Falcon Publishing Solutions LLP<br />
              An ISO 9001:2015 Certified Company
            </p>
            <div className="flex space-x-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-8" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              Copyright © 2025 White Falcon Publishing Solutions LLP
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                Terms & Conditions
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy & Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};