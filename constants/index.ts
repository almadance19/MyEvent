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
    label: 'My Tickets',
    route: '/my-tickets',
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
