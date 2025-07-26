import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Leaf, Utensils } from "lucide-react";

interface MenuItemType {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  isVeg: boolean;
  isSpicy: boolean;
  rating: number;
  category: 'starter' | 'main' | 'rice' | 'dessert' | 'beverages';
}

const menuItems: MenuItemType[] = [
  // Chicken Dry & Gravy
  {
    id: 1,
    name: "Dragon Chicken",
    description: "Spicy Indo-Chinese chicken with bell peppers and onions",
    price: 280,
    image: "https://media.istockphoto.com/id/1208784937/photo/dragon-chicken-chicken-strips-marinated-fried-and-saut%C3%A9ed-in-a-spicy-and-tangy-sauce.jpg?s=2048x2048&w=is&k=20&c=OlN7hzlJ21G4-2Q1Mc8UhWq0qF03wK6ebY91VRFqqAs=",
    isVeg: false,
    isSpicy: true,
    rating: 4.7,
    category: 'main'
  },
  {
    id: 2,
    name: "Chicken Salt and Pepper",
    description: "Crispy chicken tossed with salt and pepper seasoning",
    price: 280,
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    isVeg: false,
    isSpicy: true,
    rating: 4.6,
    category: 'main'
  },
  {
    id: 3,
    name: "Chilli Chicken Roasted",
    description: "Dry roasted chicken with green chilies and spices",
    price: 280,
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    isVeg: false,
    isSpicy: true,
    rating: 4.8,
    category: 'main'
  },
  {
    id: 4,
    name: "Chicken Manchurian",
    description: "Juicy chicken dumplings in tangy Manchurian sauce",
    price: 250,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    isVeg: false,
    isSpicy: true,
    rating: 4.5,
    category: 'main'
  },
  {
    id: 5,
    name: "Honey Chilli Chicken",
    description: "Sweet and spicy chicken glazed with honey",
    price: 280,
    image: "https://media.istockphoto.com/id/1285462667/photo/fried-chicken-wings-with-sweet-chili-sauce-on-white-paper.jpg?s=2048x2048&w=is&k=20&c=tTIr0DiYjpn-TYcQ7e25XBq7iF0OeRRXWWnKNug65uw=",
    isVeg: false,
    isSpicy: true,
    rating: 4.7,
    category: 'main'
  },
  {
    id: 6,
    name: "Crispy Chicken",
    description: "Golden fried chicken with aromatic spices",
    price: 280,
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    isVeg: false,
    isSpicy: false,
    rating: 4.6,
    category: 'main'
  },

  // Lamb Dry
  {
    id: 7,
    name: "Lamb Dry Fry Chilli",
    description: "Tender lamb pieces dry fried with chilies and spices",
    price: 370,
    image: "https://media.istockphoto.com/id/1496319304/photo/mutton-varuval-dry-or-lamb-pepper-served-in-dish-isolated-on-background-top-view-of-desi.jpg?s=2048x2048&w=is&k=20&c=AD-H-RV5RFLwfiu3qu0fICpi5uv0XRRmue4kMmYDeSc=",
    isVeg: false,
    isSpicy: true,
    rating: 4.8,
    category: 'main'
  },
  {
    id: 8,
    name: "Lamb Oyster Crispy",
    description: "Crispy lamb with oyster sauce and vegetables",
    price: 370,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    isVeg: false,
    isSpicy: false,
    rating: 4.7,
    category: 'main'
  },
  {
    id: 9,
    name: "Crispy Lamb Honey",
    description: "Honey glazed crispy lamb with sesame seeds",
    price: 380,
    image: "https://media.istockphoto.com/id/902740716/photo/chinese-spare-ribs.jpg?s=2048x2048&w=is&k=20&c=vRrwjPMZOlkjvPqitQsSldhMdKFku_DvJt-2G8HVvtk=",
    isVeg: false,
    isSpicy: false,
    rating: 4.9,
    category: 'main'
  },

  // Vegetarian Dishes
  {
    id: 10,
    name: "Crispy Veg Cauliflower",
    description: "Crispy cauliflower florets with spices",
    price: 210,
    image:  "https://media.istockphoto.com/id/1743631628/photo/bakwan-fritters.jpg?s=2048x2048&w=is&k=20&c=J8IAJufXRp7eEkNR6l7lMLYgbjm2hmimFx5tkUWNaOo=",
    isVeg: true,
    isSpicy: false,
    rating: 4.4,
    category: 'starter'
  },
  {
    id: 11,
    name: "tang manchurian",
    description: "Cottage cheese in tangy Manchurian sauce",
    price: 230,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    isVeg: true,
    isSpicy: true,
    rating: 4.5,
    category: 'main'
  },
  {
    id: 12,
    name: "Mushroom Manchurian",
    description: "Fresh mushrooms in spicy Manchurian gravy",
    price: 230,
    image: "https://media.istockphoto.com/id/1468563695/photo/mushroom-manchurian-indo-chinese-dish-starter-or-appetizer.jpg?s=2048x2048&w=is&k=20&c=xaoRHHb9AxE9s8VUMT1rtXbFhot843kcWJLQzgsAKRU=",
    isVeg: true,
    isSpicy: true,
    rating: 4.3,
    category: 'main'
  },

  // Seafood
  {
    id: 13,
    name: "Fish Finger",
    description: "Crispy fish fingers with tartar sauce",
    price: 290,
    image: "https://media.istockphoto.com/id/1155454337/photo/fish-sticks-in-breading-on-a-wooden-board-next-to-french-fries-and-a-cup-of-sauce-view-from.jpg?s=2048x2048&w=is&k=20&c=s_S-qHwPpFDxdp68c4Cx0IOKtaGhnQl3BShXebiugh4=",
    isVeg: false,
    isSpicy: false,
    rating: 4.6,
    category: 'starter'
  },
  {
    id: 14,
    name: "Fish Manchurian",
    description: "Fresh fish in spicy Manchurian sauce",
    price: 360,
    image: "https://media.istockphoto.com/id/1197815003/photo/fish-manchurian-dry-looks-like-schezwan-fish-in-black-bowl-at-dark-slate-background-fish.jpg?s=2048x2048&w=is&k=20&c=qiqMpeSAuIcB-kSfagKawjRtMazuqe25Y-vav7oj8Ws=",
    isVeg: false,
    isSpicy: true,
    rating: 4.7,
    category: 'main'
  },
  {
    id: 15,
    name: "Prawn Manchurian",
    description: "Juicy prawns in tangy Manchurian gravy",
    price: 380,
    image: "https://media.istockphoto.com/id/1454371813/photo/prawns-shrimp-manchurian.jpg?s=2048x2048&w=is&k=20&c=UGcdJyQTo-2TVGX5lfk0dKYME6Ds1J610ctuqk6M2wU=",
    isVeg: false,
    isSpicy: true,
    rating: 4.8,
    category: 'main'
  },

  // Tandoor Items
  {
    id: 16,
    name: "Tandoori Chicken",
    description: "Classic tandoori chicken marinated in yogurt and spices",
    price: 210,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    isVeg: false,
    isSpicy: true,
    rating: 4.8,
    category: 'main'
  },
  {
    id: 17,
    name: "Chicken Tikka",
    description: "Boneless chicken pieces marinated and grilled",
    price: 270,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    isVeg: false,
    isSpicy: true,
    rating: 4.7,
    category: 'main'
  },
  {
    id: 18,
    name: "Paneer Tikka",
    description: "Marinated cottage cheese grilled to perfection",
    price: 280,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    isVeg: true,
    isSpicy: true,
    rating: 4.6,
    category: 'starter'
  },
  {
    id: 19,
    name: "Mushroom Tikka",
    description: "Marinated mushrooms grilled with spices",
    price: 280,
    image: "https://media.istockphoto.com/id/678431492/photo/mushroom-tikka-served-in-a-platter-on-white-background.jpg?s=2048x2048&w=is&k=20&c=P5N6QxkguFQyni_DdmJ8uGUXtcbF0j0qrpQ2pEZ68Nc=",
    isVeg: true,
    isSpicy: true,
    rating: 4.5,
    category: 'starter'
  },

  // Rice Dishes
  {
    id: 20,
    name: "Chicken Biryani",
    description: "Fragrant basmati rice with tender chicken",
    price: 350,
    image: "https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=2048x2048&w=is&k=20&c=uU0uuti6KOvpQhXuu6VMpgi021o1vZXfOhpMrJXSn1o=",
    isVeg: false,
    isSpicy: true,
    rating: 4.9,
    category: 'rice'
  },
  {
    id: 21,
    name: "Vegetable Biryani",
    description: "Aromatic rice with mixed vegetables and spices",
    price: 280,
    image: "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnJTIwYmlyaXlhbml8ZW58MHx8MHx8fDA%3D",
    isVeg: true,
    isSpicy: false,
    rating: 4.6,
    category: 'rice'
  },
  {
    id: 22,
    name: "Mutton Biryani",
    description: "Traditional biryani with tender mutton pieces",
    price: 420,
    image: "https://media.istockphoto.com/id/1430345748/photo/biryani-overhead-view.jpg?s=2048x2048&w=is&k=20&c=bnRYyLyD2gDhsQWaIhrFrh5VZvIR85WK9rCfhIM0shg=",
    isVeg: false,
    isSpicy: true,
    rating: 4.8,
    category: 'rice'
  },

  // Fried Starters
  {
    id: 23,
    name: "Chicken 65",
    description: "Spicy deep-fried chicken with curry leaves",
    price: 240,
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    isVeg: false,
    isSpicy: true,
    rating: 4.7,
    category: 'starter'
  },
  {
    id: 24,
    name: "Paneer 65",
    description: "Spicy fried cottage cheese cubes",
    price: 230,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    isVeg: true,
    isSpicy: true,
    rating: 4.5,
    category: 'starter'
  },
  {
    id: 25,
    name: "Gobi 65",
    description: "Crispy cauliflower florets with spices",
    price: 190,
    image: "https://media.istockphoto.com/id/1312278005/photo/foods.jpg?s=2048x2048&w=is&k=20&c=K9PCTR7DKZfrGYA7_pIAaRhQSGqAcuf0yrcjWFqEBtA=",
    isVeg: true,
    isSpicy: true,
    rating: 4.4,
    category: 'starter'
  },

  // Arabian Sizzlers
  {
    id: 26,
    name: "Chicken Sizzler",
    description: "Grilled chicken served on a hot sizzling plate",
    price: 450,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    isVeg: false,
    isSpicy: false,
    rating: 4.8,
    category: 'main'
  },
  {
    id: 27,
    name: "Mutton Sizzler",
    description: "Tender mutton on sizzling plate with vegetables",
    price: 520,
    image: "https://media.istockphoto.com/id/1217324481/photo/fried-lamb-rack-meat-with-vegetables.jpg?s=2048x2048&w=is&k=20&c=VdT4ULyCtdF7T8evE_HvfpDxnFyBNfRoyphSmaZmyNw=",
    isVeg: false,
    isSpicy: false,
    rating: 4.9,
    category: 'main'
  },

  // Soups
  {
    id: 28,
    name: "Hot and Sour Veg Soup",
    description: "Spicy and tangy vegetable soup",
    price: 130,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    isVeg: true,
    isSpicy: true,
    rating: 4.3,
    category: 'starter'
  },
  {
    id: 29,
    name: "Chicken Clear Soup",
    description: "Light and nutritious chicken broth",
    price: 150,
    image: "https://media.istockphoto.com/id/1057597370/photo/broth-chicken-soup-with-noodles-in-a-white-bowl-on-wood-background-in-rustic-stye.jpg?s=2048x2048&w=is&k=20&c=NBvG45VAcE0iK6RvFGGKWTsRdCLrP6Z4QLPtblkjobY=",
    isVeg: false,
    isSpicy: false,
    rating: 4.4,
    category: 'starter'
  },
  {
    id: 30,
    name: "Tom Yum Soup",
    description: "Thai style spicy and sour soup",
    price: 160,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    isVeg: false,
    isSpicy: true,
    rating: 4.6,
    category: 'starter'
  },

  // Quick Bites
  {
    id: 31,
    name: "Chicken Shawarma Roll",
    description: "Grilled chicken wrapped in soft bread",
    price: 150,
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    isVeg: false,
    isSpicy: false,
    rating: 4.7,
    category: 'starter'
  },
  {
    id: 32,
    name: "Paneer Paratha Roll",
    description: "Spiced cottage cheese in paratha wrap",
    price: 80,
    image: "https://media.istockphoto.com/id/1352474720/photo/fresh-paneer-roll-with-fresh-tomatos-salad-cheese-and-onions-isolated-on-bright-blue.jpg?s=2048x2048&w=is&k=20&c=dzXc1mMmULJUeIxmwP4nUczH-hQDfSUT17b5heLMsfo=",
    isVeg: true,
    isSpicy: false,
    rating: 4.5,
    category: 'starter'
  },
  {
    id: 33,
    name: "Falafel Roll",
    description: "Middle Eastern falafel in soft wrap",
    price: 80,
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    isVeg: true,
    isSpicy: false,
    rating: 4.4,
    category: 'starter'
  },

  // Beverages
  {
    id: 34,
    name: "Filter Coffee",
    description: "Traditional South Indian filter coffee",
    price: 80,
    image: "https://media.istockphoto.com/id/1455349022/photo/south-indian-filter-coffee.jpg?s=2048x2048&w=is&k=20&c=wJ7aHWP_IX8hLgX--6gNsLadDK2QqCVhr03yJ_h-tkU=",
    isVeg: true,
    isSpicy: false,
    rating: 4.8,
    category: 'beverages'
  },
  {
    id: 35,
    name: "Masala Chai",
    description: "Spiced Indian tea with milk",
    price: 60,
    image: "https://media.istockphoto.com/id/1296650267/photo/indian-chai-in-glass-cups-with-metal-kettle-and-other-masalas-to-make-the-tea.jpg?s=2048x2048&w=is&k=20&c=hsmWYHXyl3BklguNbOO-P3VEjgByAdQvC0HF4YMgwbU=",
    isVeg: true,
    isSpicy: false,
    rating: 4.6,
    category: 'beverages'
  },

  // Desserts
  {
    id: 36,
    name: "Gulab Jamun",
    description: "Sweet milk dumplings in sugar syrup",
    price: 120,
    image: "https://media.istockphoto.com/id/163064596/photo/gulab-jamun.jpg?s=2048x2048&w=is&k=20&c=xCoJpX9VGS0EcxjhRJEjD1Egtuo9R5yis5oJlYa57jk=",
    isVeg: true,
    isSpicy: false,
    rating: 4.7,
    category: 'dessert'
  },
  {
    id: 37,
    name: "Kulfi",
    description: "Traditional Indian ice cream",
    price: 100,
    image: "https://media.istockphoto.com/id/657090194/photo/rajwari-or-rajwadi-sweet-kesar-badam-pista-kulfi-or-ice-cream-candy.jpg?s=2048x2048&w=is&k=20&c=s8EWl4OJuDjfN4SfzaqO5e_yMgXb2oJc93AIUU4SKIM=",
    isVeg: true,
    isSpicy: false,
    rating: 4.6,
    category: 'dessert'
  }
];

const MenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Items', icon: Utensils },
    { id: 'starter', name: 'Starters', icon: Utensils },
    { id: 'main', name: 'Main Course', icon: Utensils },
    { id: 'rice', name: 'Rice & Biryani', icon: Utensils },
    { id: 'dessert', name: 'Desserts', icon: Utensils },
    { id: 'beverages', name: 'Beverages', icon: Utensils }
  ];

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'veg', name: 'Vegetarian' },
    { id: 'non-veg', name: 'Non-Vegetarian' }
  ];

  const filteredItems = menuItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const filterMatch = selectedFilter === 'all' || 
                       (selectedFilter === 'veg' && item.isVeg) ||
                       (selectedFilter === 'non-veg' && !item.isVeg);
    return categoryMatch && filterMatch;
  });

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-saffron/10 text-saffron border-saffron/20">
            Our Menu
          </Badge>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-6">
            From Savory{" "}
            <span className="bg-gradient-to-r from-saffron to-paprika bg-clip-text text-transparent">
              Appetizers
            </span>{" "}
            to Decadent Desserts
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-poppins">
            Our menu offers a variety of authentic South Indian dishes that suit all diets, 
            preferences, and occasions. Every dish is prepared with traditional methods and the finest ingredients.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Category Filters */}
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-4">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id 
                    ? "bg-saffron hover:bg-saffron/90 text-white" 
                    : "border-saffron/30 text-foreground hover:bg-saffron/10"
                  }
                >
                  <category.icon className="h-4 w-4 mr-2" />
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Diet Filters */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Diet Preference</h3>
            <div className="flex gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={selectedFilter === filter.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFilter(filter.id)}
                  className={selectedFilter === filter.id 
                    ? "bg-turmeric hover:bg-turmeric/90 text-white" 
                    : "border-turmeric/30 text-foreground hover:bg-turmeric/10"
                  }
                >
                  {filter.id === 'veg' && <Leaf className="h-4 w-4 mr-1" />}
                  {filter.name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group hover:shadow-warm transition-all duration-300 hover:scale-105 animate-fade-in border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {item.isVeg ? (
                      <Badge className="bg-mint text-white">
                        <Leaf className="h-3 w-3 mr-1" />
                        Veg
                      </Badge>
                    ) : (
                      <Badge className="bg-paprika text-white">
                        Non-Veg
                      </Badge>
                    )}
                    {item.isSpicy && (
                      <Badge className="bg-red-500 text-white">
                        🌶️ Spicy
                      </Badge>
                    )}
                  </div>
                  <div className="absolute top-3 right-3">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                      <Star className="h-3 w-3 text-saffron fill-saffron" />
                      <span className="text-xs font-semibold">{item.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-center">
                    <span className="text-2xl font-bold text-saffron">
                      ₹{item.price}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <Utensils className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No items found</h3>
            <p className="text-muted-foreground">Try adjusting your filters to see more dishes.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;