export const headerLinks = [
  {
    label: 'Explore Events',
    route: '/',
  },
  {
    label: 'Organizers',
    route: '/organizers',
  },
  {
    label: 'My Saved Tickets',
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
