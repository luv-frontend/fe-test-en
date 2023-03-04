const MOCK_FILTER_ITEMS = [
  {
    id: "1",
    label: "Morning",
    icon: "knife",
    value: "morning",
  },
  {
    id: "2",
    label: "Lunch",
    icon: "knife",
    value: "lunch",
  },
  {
    id: "3",
    label: "Dinner",
    icon: "knife",
    value: "dinner",
  },
  {
    id: "4",
    label: "Snack",
    icon: "cub",
    value: "snack",
  },
];

export default function handler(req, res) {
  res.status(200).json(MOCK_FILTER_ITEMS);
}
