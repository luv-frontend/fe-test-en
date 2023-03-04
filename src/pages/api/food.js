// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const MOCK_FOOD_ITEMS = [
  {
    id: Math.random(),
    label: "05.21.Morning",
    thumbnail: "/photo/m01.jpg",
    slug: "#",
  },
  {
    id: Math.random(),
    label: "05.21.Morning",
    thumbnail: "/photo/m02.jpg",
    slug: "#",
  },
  {
    id: Math.random(),
    label: "05.21.Morning",
    thumbnail: "/photo/m03.jpg",
    slug: "#",
  },
  {
    id: Math.random(),
    label: "05.21.Morning",
    thumbnail: "/photo/l01.jpg",
    slug: "#",
  },
  {
    id: Math.random(),
    label: "05.21.Morning",
    thumbnail: "/photo/l02.jpg",
    slug: "#",
  },
  {
    id: Math.random(),
    label: "05.21.Morning",
    thumbnail: "/photo/l03.jpg",
    slug: "#",
  },
  {
    id: Math.random(),
    label: "05.21.Morning",
    thumbnail: "/photo/d01.jpg",
    slug: "#",
  },
  {
    id: Math.random(),
    label: "05.21.Morning",
    thumbnail: "/photo/d02.jpg",
    slug: "#",
  },
];

export default function handler(req, res) {
  setTimeout(() => {
    res.status(200).json(MOCK_FOOD_ITEMS);
  }, 1000);
}
