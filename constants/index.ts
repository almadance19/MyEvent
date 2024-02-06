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
    label: 'My Profile',
    route: '/profile',
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
}
