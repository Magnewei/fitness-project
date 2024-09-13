import trophyIcon from '../../assets/images/trophy_icon_gray.png';

export type Trophy = {
  id: string;
  title: string;
  description: string;
  icon: string;
  points: number;
};

export const trophyMap: Map<string, Trophy[]> = new Map([
  [
    'Beginner',
    [
      {
        id: '1',
        title: 'First Steps',
        description: 'Complete your first workout',
        icon: require('../assets/images/trophy_icon_gray.png'),
        points: 10,
      },
      {
        id: '2',
        title: 'Consistency is Key',
        description: 'Work out for 7 consecutive days',
        icon: require('../assets/images/trophy_icon_gray.png'),
        points: 20,
      },
      {
        id: '3',
        title: 'Two Weeks In',
        description: 'Work out for 14 consecutive days',
        icon: require('../assets/images/trophy_icon_gray.png'),
        points: 30,
      },
      {
        id: '5',
        title: 'Early Bird',
        description: 'Work out before 6 AM',
        icon: require('../assets/images/trophy_icon_gray.png'),
        points: 15,
      },
      {
        id: '6',
        title: 'Night Owl',
        description: 'Work out after 9 PM',
        icon: require('../assets/images/trophy_icon_gray.png'),
        points: 15,
      },
      {
        id: '7',
        title: 'Weekend Warrior',
        description: 'Work out on both Saturday and Sunday',
        icon: require('../assets/images/trophy_icon_gray.png'),
        points: 20,
      },
      {
        id: '9',
        title: 'Hydration Hero',
        description: 'Drink 2 liters of water in a day',
        icon: require('../assets/images/trophy_icon_gray.png'),
        points: 10,
      },
      {
        id: '10',
        title: 'Protein Power',
        description: 'Consume 100 grams of protein in a day',
        icon: require('../assets/images/trophy_icon_gray.png'),
        points: 15,
      },
      {
        id: '13',
        title: 'Flexibility Fanatic',
        description: 'Complete a 30-minute yoga session',
        icon: require('../assets/images/trophy_icon_gray.png'),
        points: 15,
      },
      {
        id: '14',
        title: 'Mindfulness Master',
        description: 'Meditate for 20 minutes',
        icon: require('../assets/images/trophy_icon_gray.png'),
        points: 10,
      },
      {
        id: '26',
        title: 'Jumping Jack',
        description: 'Complete 200 jumping jacks in a day',
        icon: require('../assets/images/trophy_icon_gray.png'),
        points: 15,
      },
      {
        id: '27',
        title: 'Boxing Beginner',
        description: 'Complete a 30-minute boxing workout',
        icon: require('../assets/images/trophy_icon_gray.png'),
        points: 20,
      },
    ],
  ],
  [
    'Intermediate',
    [
      {
        id: '4',
        title: 'One Month Strong',
        description: 'Work out for 30 consecutive days',
        icon: require('../assets/images/trophy_icon_gray.png'),
        points: 50,
      },
      {
        id: '8',
        title: 'Double Trouble',
        description: 'Work out twice in one day',
        icon: require('../assets/images/trophy_icon_gray.png'),
        points: 25,
      },
      {
        id: '11',
        title: 'Cardio King',
        description: 'Run 5 kilometers',
        icon: require('../assets/images/trophy_icon_gray.png'),
        points: 20,
      },
      {
        id: '12',
        title: 'Strength Specialist',
        description: 'Lift a total of 10,000 kilograms',
        icon: require('../assets/images/trophy_icon_gray.png'),
        points: 30,
      },
      {
        id: '15',
        title: 'Calorie Crusher',
        description: 'Burn 500 calories in a single workout',
        icon: require('../assets/images/trophy_icon_gray.png'),
        points: 25,
      },
      {
        id: '18',
        title: 'Cycling Champ',
        description: 'Cycle 50 kilometers',
        icon: require('../assets/images/trophy_icon_gray.png'),
        points: 40,
      },
      {
        id: '19',
        title: 'Swimming Star',
        description: 'Swim 2 kilometers',
        icon: require('../assets/images/trophy_icon_gray.png'),
        points: 30,
      },
      {
        id: '20',
        title: 'Hiking Hero',
        description: 'Hike 10 kilometers',
        icon: require('../assets/images/trophy_icon_gray.png'),
        points: 25,
      },
      {
        id: '21',
        title: 'Push-Up Pro',
        description: 'Complete 100 push-ups in a day',
        icon: require('../assets/images/trophy_icon_gray.png'),
        points: 20,
      },
      {
        id: '22',
        title: 'Squat Specialist',
        description: 'Complete 100 squats in a day',
        icon: require('../assets/images/trophy_icon_gray.png'),
        points: 20,
      },
      {
        id: '23',
        title: 'Plank Perfectionist',
        description: 'Hold a plank for 5 minutes',
        icon: require('../assets/images/trophy_icon_gray.png'),
        points: 25,
      },
      {
        id: '24',
        title: 'Burpee Boss',
        description: 'Complete 50 burpees in a day',
        icon: require('../assets/images/trophy_icon_gray.png'),
        points: 20,
      },
      {
        id: '25',
        title: 'Mountain Climber',
        description: 'Complete 100 mountain climbers in a day',
        icon: require('../assets/images/trophy_icon_gray.png'),
        points: 20,
      },
      {
        id: '28',
        title: 'Rowing Rookie',
        description: 'Row 5 kilometers',
        icon: require('../assets/images/trophy_icon_gray.png'),
        points: 25,
      },
    ],
  ],
  [
    'Advanced',
    [
      {
        id: '16',
        title: 'Marathoner',
        description: 'Run a marathon',
        icon: require('../assets/images/trophy_icon_gray.png'),
        points: 100,
      },
      {
        id: '17',
        title: 'Half Marathoner',
        description: 'Run a half marathon',
        icon: require('../assets/images/trophy_icon_gray.png'),
        points: 50,
      },
      {
        id: '29',
        title: 'Triathlete',
        description: 'Complete a triathlon',
        icon: require('../assets/images/trophy_icon_gray.png'),
        points: 100,
      },
      {
        id: '30',
        title: 'Fitness Fanatic',
        description: 'Complete 100 workouts',
        icon: require('../assets/images/trophy_icon_gray.png'),
        points: 50,
      },
    ],
  ],
]);
