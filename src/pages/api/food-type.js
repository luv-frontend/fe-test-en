const MOCK_FILTER_ITEMS = [
  {
    id: "1",
    label: "Morning",
    icon: "",
    value: "morning",
  },
  {
    id: "2",
    label: "Lunch",
    icon: "",
    value: "lunch",
  },
  {
    id: "3",
    label: "Dinner",
    icon: "",
    value: "dinner",
  },
  {
    id: "4",
    label: "Snack",
    icon: "",
    value: "snack",
  },
];

export default function handler(req, res) {
  res.status(200).json(MOCK_FILTER_ITEMS);
}
