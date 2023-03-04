// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const MOCK_FOOD_ITEMS = [
  {
    id: "1",
    name: "05.21.Morning",
    thumbnail: "/photo/m01.jpg",
    slug: "#",
  },
  {
    id: "2",
    name: "05.21.Morning",
    thumbnail: "/photo/m02.jpg",
    slug: "#",
  },
  {
    id: "3",
    name: "05.21.Morning",
    thumbnail: "/photo/m03.jpg",
    slug: "#",
  },
  {
    id: "4",
    name: "05.21.Morning",
    thumbnail: "/photo/l01.jpg",
    slug: "#",
  },
  {
    id: "5",
    name: "05.21.Morning",
    thumbnail: "/photo/l02.jpg",
    slug: "#",
  },
  {
    id: "6",
    name: "05.21.Morning",
    thumbnail: "/photo/l03.jpg",
    slug: "#",
  },
  {
    id: "7",
    name: "05.21.Morning",
    thumbnail: "/photo/d01.jpg",
    slug: "#",
  },
  {
    id: "8",
    name: "05.21.Morning",
    thumbnail: "/photo/d02.jpg",
    slug: "#",
  },
];

export default function handler(req, res) {
  res.status(200).json(MOCK_FOOD_ITEMS);
}
