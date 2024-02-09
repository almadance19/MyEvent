export const headerLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Create Event',
    route: '/events/create',
  },
  {
    label: 'Meine Tickets',
    route: '/meine_tickets',
  },
  {
    label: 'Meine Events',
    route: '/meine_events',
  },
]

export const eventDefaultValues = {
  price: '',
  isFree: false,
  imageUrl: '',
  eventURL: '',
  eventName: '',
  eventKey: '',
  eventEmail: '',
  createdAt: new Date(),
  eventDescription: '',
  eventDate: '',
  startDateTime: new Date(),
  endDateTime: new Date(),
  eventAdress: '',
  eventFotoURL: '',
  eventWebsite: '',
  active: false,
}
