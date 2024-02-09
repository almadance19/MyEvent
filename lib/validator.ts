import * as z from "zod"

export const eventFormSchema = z.object({
  eventName: z.string().min(3, 'Title must be at least 3 characters'),
  eventEmail: z.string().min(3, 'Title must be at least 3 characters'),
  eventDescription: z.string().min(3, 'Description must be at least 3 characters').max(400, 'Description must be less than 400 characters'),
  eventAdress: z.string().min(3, 'Location must be at least 3 characters').max(400, 'Location must be less than 400 characters'),
  imageUrl: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  eventWebsite: z.string(),
  eventKey: z.string(),
  createdAt: z.date(),
  active: z.boolean(),
//  eventFon: z.string(),
})