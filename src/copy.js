// Add global names and copy here
import calendar from './assets/skills/calendar.png'
import colors from './assets/skills/colors.png'
import communicate from './assets/skills/communicate.png'
import criticalThinking from './assets/skills/critical-thinking.png'
import globe from './assets/skills/globe.png'
import goal from './assets/skills/goal.png'
import happy from './assets/skills/happy.png'
import helping from './assets/skills/helping.png'
import idea from './assets/skills/idea.png'
import multiple from './assets/skills/multiple.png'
import search from './assets/skills/search.png'
import services from './assets/skills/services.png'
import spring from './assets/skills/spring.png'
import statue from './assets/skills/statue.png'
import teamwork from './assets/skills/teamwork.png'

import arch from './assets/industry/arch.png'
import biotech from './assets/industry/biotech.png'
import caduceus from './assets/industry/caduceus.png'
import cap from './assets/industry/cap.png'
import capitol from './assets/industry/capitol.png'
import categorize from './assets/industry/categorize.png'
import laptop from './assets/industry/laptop.png'
import law from './assets/industry/law.png'
import palette from './assets/industry/palette.png'
import price from './assets/industry/price.png'

import penguins from './assets/activities/penguins.png'
import friend from './assets/activities/friend.png'
import photo from './assets/activities/photo.png'
import traces from './assets/activities/traces.png'
import burning from './assets/activities/burning.png'
import work from './assets/activities/work.png'

const copy = {
  title: 'Digifolio',
  catchPhrase: 'Visualize your career narrative',
  getStarted: "Great, let's get started!",
  studies: [
    { title: 'Architecture & Engineering', image: arch },
    { title: 'Arts & Communications', image: palette },
    { title: 'Computers & Technology', image: laptop },
    { title: 'Education & Social Services', image: cap },
    { title: 'Government & Public Administration', image: capitol },
    { title: 'Law & Law Enforcement', image: law },
    { title: 'Management, Business, & Finance', image: price },
    { title: 'Medicine & Health Care', image: caduceus },
    { title: 'Science Research', image: biotech },
    { title: 'Other', image: categorize },
  ],
  skills: [
    { title: 'Analytical & Critical Thinking', image: criticalThinking },
    { title: 'Collaboration & Coordination', image: teamwork },
    { title: 'Communication (Oral & Written)', image: communicate },
    { title: 'Cultural Awareness', image: globe },
    { title: 'Decision Making', image: multiple },
    { title: 'Design Thinking', image: colors },
    { title: 'Emotional Intelligence', image: happy },
    { title: 'Flexibility, Adaptability, & Agility', image: spring },
    { title: 'Innovation, Creativity, & Entrepreneurial Spirit', image: idea },
    { title: 'Leadership', image: statue },
    { title: 'Organization', image: calendar },
    { title: 'Problem-Solving', image: services },
    { title: 'Purpose-Driven', image: goal },
    { title: 'Research', image: search },
    { title: 'Work Ethic & Accountability', image: helping },
  ],
  helpText: {
    roles:
      'Add as many roles that you are interested in that relate to your chosen industry',
    home: "Hi, I'm Folio!",
  },
  activities: {
    friends: {
      info:
        'See what your friend says about how you would respond in different scenarios and what that might suggest about your interpersonal skills.',
      image: penguins,
      title: 'What Would Your Friend Say?',
      icon: friend,
    },
    photos: {
      info:
        'Through this activity, you will get to reflect on the past and envision the future versions of yourself through photos and comments from friends!',
      subTitle:
        'How have your photos captured your growth? Moments that mattered to you?',
      title: 'Photo Time Machine',
      icon: photo,
    },
    traces: {
      title: 'Traces of Creation',
      icon: traces,
    },
    work: {
      title: 'A Day at Work',
      icon: work,
    },
    burning: {
      title: 'Burning Questions',
      icon: burning,
    },
  },
}

export default copy
