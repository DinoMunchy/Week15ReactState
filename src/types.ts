export interface TodoItem {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  starred: boolean;
}

export const TEST_DATA: TodoItem[] = [
  {
    id: 1,
    title: "Clean Kitchen",
    description: "Wash dishes, wipe counters, and mop the floor",
    completed: false,
    starred: true
  },
  {
    id: 2,
    title: "Laundry",
    description: "Wash, dry, and fold clothes",
    completed: false,
    starred: false
  },
  {
    id: 3,
    title: "Vacuum Living Room",
    description: "Vacuum carpets and clean under furniture",
    completed: true,
    starred: false
  },
  {
    id: 4,
    title: "Take Out Trash",
    description: "Empty all trash bins and recycling",
    completed: false,
    starred: true
  },
  {
    id: 5,
    title: "Clean Bathroom",
    description: "Scrub shower, toilet, and sink",
    completed: false,
    starred: false
  }
]; 